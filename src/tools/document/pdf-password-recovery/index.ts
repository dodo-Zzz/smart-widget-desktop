import { defineAsyncComponent } from "vue";
import { KeyRound } from "lucide-vue-next";
import type { Tool } from "@/tools/types";

export default {
  id: "pdf-password-recovery",
  name: "忘记 PDF 密码",
  desc: "按密码类型查找密码记录、原稿及历史副本",
  icon: KeyRound,
  component: defineAsyncComponent(() => import("./PdfPasswordRecovery.vue")),
} satisfies Tool;
