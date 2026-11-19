import { defineModuleLocales } from "@/locales/types";

export default defineModuleLocales({
  tools: {
    en: { "pdf-unlock": { name: "Remove PDF Open Password", desc: "Use a known password to save an unencrypted PDF copy locally" } },
    ja: { "pdf-unlock": { name: "PDF の開くパスワードを解除", desc: "既知のパスワードを入力して、暗号化されていないコピーを保存します" } },
  },
  messages: {
    "zh-CN": { pdfUnlock: { drop: "选择加密 PDF", password: "已知的打开密码", save: "另存无密码副本", invalid: "打开密码不正确。", unprotected: "该 PDF 无需密码即可打开。", suffix: "_无密码", busy: "正在保存…", clear: "移除文件" } },
    en: { pdfUnlock: { drop: "Select an encrypted PDF", password: "Known open password", save: "Save password-free copy", invalid: "The open password is incorrect.", unprotected: "This PDF already opens without a password.", suffix: "_unlocked", busy: "Saving…", clear: "Remove file" } },
    ja: { pdfUnlock: { drop: "暗号化された PDF を選択", password: "既知の開くパスワード", save: "パスワードなしで別名保存", invalid: "開くパスワードが正しくありません。", unprotected: "この PDF はパスワードなしで開けます。", suffix: "_パスワード解除", busy: "保存しています…", clear: "ファイルを削除" } },
  },
});
