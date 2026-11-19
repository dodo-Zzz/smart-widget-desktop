import { defineModuleLocales } from "@/locales/types";

export default defineModuleLocales({
  tools: {
    en: { currency: { name: "CNY Currency Converter", desc: "Convert between yuan and other currencies using reference rates" } },
    ja: { currency: { name: "人民元為替換算", desc: "参考レートで人民元と各国通貨を換算します" } },
  },
  messages: {
    "zh-CN": { currency: { amount: "金额", currency: "其他货币", reverse: "切换换算方向", refresh: "刷新汇率", loading: "正在读取汇率…", failed: "无法读取汇率，请检查网络后重试。", source: "参考汇率日期 {date} · Frankfurter", result: "换算结果" } },
    en: { currency: { amount: "Amount", currency: "Other currency", reverse: "Reverse conversion", refresh: "Refresh rates", loading: "Loading rates…", failed: "Could not load exchange rates. Check your connection and try again.", source: "Reference rates dated {date} · Frankfurter", result: "Converted amount" } },
    ja: { currency: { amount: "金額", currency: "換算通貨", reverse: "換算方向を切り替え", refresh: "レート更新", loading: "レートを読み込んでいます…", failed: "レートを取得できません。接続を確認して再試行してください。", source: "参考レートの日付 {date} · Frankfurter", result: "換算結果" } },
  },
});
