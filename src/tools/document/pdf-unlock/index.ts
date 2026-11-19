import { defineAsyncComponent } from "vue";
import { LockOpen } from "lucide-vue-next";
import type { Tool } from "@/tools/types";

export default {
  id: "pdf-unlock",
  name: "PDF 移除打开密码",
  desc: "输入已知的打开密码，在本地另存一份无密码 PDF",
  icon: LockOpen,
  component: defineAsyncComponent(() => import("./PdfUnlock.vue")),
} satisfies Tool;
