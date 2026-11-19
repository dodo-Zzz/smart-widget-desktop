<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import AppSelect from "@/components/common/AppSelect.vue";

interface Rate { quote: string; date: string; rate: number }

const { t, locale } = useI18n();
const rates = ref<Rate[]>([]);
const selected = ref("USD");
const amount = ref<number | string>(100);
const reverse = ref(false);
const busy = ref(false);
const failed = ref(false);
const controller = new AbortController();
const current = computed(() => rates.value.find((entry) => entry.quote === selected.value));
const from = computed(() => reverse.value ? selected.value : "CNY");
const to = computed(() => reverse.value ? "CNY" : selected.value);
const options = computed(() => {
  const names = new Intl.DisplayNames(locale.value, { type: "currency" });
  return rates.value.map(({ quote }) => ({ value: quote, label: `${quote} · ${names.of(quote)}` }));
});
const result = computed(() => {
  if (!current.value || amount.value === "") return "";
  const converted = Number(amount.value) * (reverse.value ? 1 / current.value.rate : current.value.rate);
  return Number.isFinite(converted) && converted >= 0
    ? new Intl.NumberFormat(locale.value, { style: "currency", currency: to.value }).format(converted)
    : "";
});

async function refresh() {
  busy.value = true;
  failed.value = false;
  try {
    const response = await fetch("https://api.frankfurter.dev/v2/rates?base=CNY", {
      signal: AbortSignal.any([controller.signal, AbortSignal.timeout(15000)]),
      cache: "no-cache",
    });
    if (!response.ok) throw new Error(String(response.status));
    const list = await response.json() as Rate[];
    const valid = list.filter(({ quote, rate, date }) =>
      /^[A-Z]{3}$/.test(quote) && quote !== "CNY" && Number.isFinite(rate) && rate > 0 && /^\d{4}-\d{2}-\d{2}$/.test(date));
    if (!valid.length) throw new Error("empty");
    rates.value = valid.sort((a, b) => a.quote.localeCompare(b.quote));
    if (!current.value) selected.value = rates.value[0].quote;
  } catch {
    if (!controller.signal.aborted) failed.value = true;
  } finally {
    busy.value = false;
  }
}

onMounted(refresh);
onBeforeUnmount(() => controller.abort());
</script>

<template>
  <section class="card currency-form">
    <label>{{ t("currency.amount") }} ({{ from }}) <input v-model.number="amount" class="field" type="number" min="0" step="any" /></label>
    <label>{{ t("currency.currency") }} <AppSelect v-model="selected" :options="options" :disabled="!rates.length" /></label>
    <div class="actions">
      <button class="btn" type="button" @click="reverse = !reverse">{{ t("currency.reverse") }}</button>
      <button class="btn" type="button" :disabled="busy" @click="refresh">{{ t("currency.refresh") }}</button>
    </div>
    <p v-if="busy" role="status">{{ t("currency.loading") }}</p>
    <p v-if="failed" role="alert">{{ t("currency.failed") }}</p>
    <output v-if="result" :aria-label="t('currency.result')">{{ result }}</output>
    <small v-if="current">{{ t("currency.source", { date: current.date }) }}</small>
  </section>
</template>

<style scoped>
.currency-form { display: grid; gap: 14px; max-width: 560px; padding: 20px; }
label { display: grid; gap: 6px; }
.actions { display: flex; flex-wrap: wrap; gap: 8px; }
output { font-size: 1.6rem; color: var(--accent); }
small { color: var(--text-2); }
</style>
