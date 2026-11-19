import { defineModuleLocales } from "@/locales/types";

export default defineModuleLocales({
  tools: {
    en: { "pdf-password-recovery": { name: "Forgot PDF Password", desc: "Find saved passwords, original files and previous copies" } },
    ja: { "pdf-password-recovery": { name: "PDF のパスワードを忘れた", desc: "保存済みパスワード、元の文書や以前のコピーを探します" } },
  },
  messages: {
    "zh-CN": { pdfRecovery: {
      open: "打开文件时就要密码", permissions: "能打开，但编辑或打印受限",
      records: "用文件名搜索密码管理器、安全笔记、发文件时的邮件和聊天记录。",
      original: "查找制作 PDF 用的 Word、WPS 或扫描原件，从原件重新导出。",
      history: "检查 OneDrive、网盘的版本历史或 Windows 文件历史记录，尝试恢复加密前的副本。",
      app: "用当时设置限制的 PDF 软件打开原稿，检查是否可以通过创建者账号访问原件或重新导出。",
      sender: "如果文件原本来自其他人，请向发送者索取密码或一份允许编辑的副本。",
      reset: "PDF 打开密码没有通用重置入口。找不到原密码时，优先恢复原稿或旧版本。",
    } },
    en: { pdfRecovery: {
      open: "A password is required to open the file", permissions: "The file opens, but editing or printing is restricted",
      records: "Search your password manager, secure notes, email and messages for the file name.",
      original: "Find the Word, WPS or scanned originals and export a new copy.",
      history: "Check OneDrive, other cloud version histories, or Windows File History for a copy from before encryption.",
      app: "Check the PDF app or creator account you used for access to the original or an option to export a new copy.",
      sender: "If someone else supplied the file, ask them for the password or an editable copy.",
      reset: "PDF open passwords have no universal reset. If you cannot find the password, recover the original or an earlier copy.",
    } },
    ja: { pdfRecovery: {
      open: "ファイルを開くときにパスワードが必要", permissions: "開けるが編集または印刷に制限がある",
      records: "ファイル名でパスワード管理アプリ、保護されたメモ、メール、チャットを検索します。",
      original: "PDF の元になった Word、WPS、スキャン原稿を探して書き出し直します。",
      history: "OneDrive、クラウドのバージョン履歴、Windows のファイル履歴から暗号化前のコピーを探します。",
      app: "作成時に使った PDF アプリや作成者アカウントで、原稿の参照や再書き出しが可能か確認します。",
      sender: "受け取ったファイルの場合は、送信者にパスワードまたは編集できるコピーを依頼します。",
      reset: "PDF を開くパスワードには共通のリセット手段がありません。見つからない場合は原稿や以前のコピーを復元してください。",
    } },
  },
});
