import { defineAsyncComponent } from "vue";
import { Coins } from "lucide-vue-next";
import type { Tool } from "@/tools/types";

export default {
  id: "currency",
  name: "人民币汇率换算",
  desc: "按最新可用参考汇率在人民币与其他货币之间换算",
  icon: Coins,
  component: defineAsyncComponent(() => import("./Currency.vue")),
} satisfies Tool;
