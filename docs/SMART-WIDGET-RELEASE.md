# Smart Widget 独立版发版

本项目基于 [Bulua/open-tools](https://github.com/Bulua/open-tools) 的源码及 [格式刷提交](https://github.com/dodo-Zzz/open-tools/commit/00fcee1dfcd2412225a4a1411c2a1509a1d74b3c)。随项目发布的许可证与第三方组件的授权文件适用于各自代码。

Windows 源码位于 [desktop 分支](https://github.com/dodo-Zzz/smart-widget-desktop/tree/desktop)，安装包和自动更新文件都发布到同一仓库的 [Releases](https://github.com/dodo-Zzz/smart-widget-desktop/releases)。

1. 在 `desktop` 分支运行 `npm version x.y.z --no-git-tag-version`，确保版本高于已发布版本。
2. 运行 `npm run typecheck` 和 `npm test`。提交并推送代码，然后创建并推送 `vx.y.z` 标签。
3. Windows 构建流程读取仓库的 `TAURI_SIGNING_PRIVATE_KEY`，签名安装包并在 Release 中生成 `latest.json`。
4. 初次安装下载 `*-setup.exe`。以后可以在程序顶部点击检查更新，或者等待启动后的检查。

本机的签名密钥备份在 `%LOCALAPPDATA%\SmartWidgetDesktop\signing\updater.key`。后续发版继续使用同一个私钥。应用以配置中的公钥验证更新包。
