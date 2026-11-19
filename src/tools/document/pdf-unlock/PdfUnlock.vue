<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { useI18n } from "vue-i18n";
import FileDropZone from "@/components/common/FileDropZone.vue";
import { showError } from "@/utils/errorToast";
import { saveFile } from "@/utils/saveFile";

const { t } = useI18n();
const file = shallowRef<File>();
const password = ref("");
const status = ref<"invalid" | "unprotected">();
const busy = ref(false);

function select(files: File[]) {
  file.value = files[0];
  password.value = "";
  status.value = undefined;
}

async function save() {
  const source = file.value;
  if (!source || !password.value || busy.value) return;
  busy.value = true;
  status.value = undefined;
  try {
    const { unlockPdf } = await import("./pdfUnlock");
    const result = unlockPdf(new Uint8Array(await source.arrayBuffer()), password.value);
    if (result.status !== "ok") {
      status.value = result.status;
      return;
    }
    await saveFile(result.data, source.name.replace(/\.pdf$/i, "") + t("pdfUnlock.suffix") + ".pdf");
  } catch (error) {
    showError(error);
  } finally {
    password.value = "";
    busy.value = false;
  }
}
</script>

<template>
  <FileDropZone v-if="!file" accept=".pdf" :paste="false" :title="t('pdfUnlock.drop')" @files="select" />
  <form v-else class="card unlock-form" @submit.prevent="save">
    <strong>{{ file.name }}</strong>
    <label>{{ t("pdfUnlock.password") }}
      <input v-model="password" class="field" type="password" autocomplete="off" :disabled="busy" />
    </label>
    <p v-if="status" role="alert">{{ t(`pdfUnlock.${status}`) }}</p>
    <div class="actions">
      <button class="btn primary" :disabled="busy || !password">{{ t(busy ? "pdfUnlock.busy" : "pdfUnlock.save") }}</button>
      <button class="btn" type="button" :disabled="busy" @click="select([])">{{ t("pdfUnlock.clear") }}</button>
    </div>
  </form>
</template>

<style scoped>
.unlock-form { display: grid; gap: 12px; max-width: 560px; padding: 20px; }
strong { overflow-wrap: anywhere; }
label { display: grid; gap: 6px; }
.actions { display: flex; flex-wrap: wrap; gap: 8px; }
</style>
