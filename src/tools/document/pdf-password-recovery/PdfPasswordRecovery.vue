<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="recovery">
    <section class="card">
      <h2>{{ t("pdfRecovery.open") }}</h2>
      <ol>
        <li>{{ t("pdfRecovery.records") }}</li>
        <li>{{ t("pdfRecovery.original") }}</li>
        <li>{{ t("pdfRecovery.history") }}</li>
      </ol>
      <p>{{ t("pdfRecovery.reset") }}</p>
    </section>
    <section class="card">
      <h2>{{ t("pdfRecovery.permissions") }}</h2>
      <ol>
        <li>{{ t("pdfRecovery.app") }}</li>
        <li>{{ t("pdfRecovery.sender") }}</li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.recovery { display: grid; gap: 16px; max-width: 740px; }
section { display: grid; gap: 10px; padding: 18px; }
h2 { font-size: 1rem; }
h2, p, ol { margin: 0; }
ol { display: grid; gap: 8px; padding-inline-start: 24px; }
p { color: var(--text-2); }
</style>
