# T3 Code

T3 Code 是一个「智能体调度控制面板（agent harness control surface）」。它通过一流的手机 App（[iOS](https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824)、[Android](https://play.google.com/store/apps/details?id=com.t3tools.t3code)）、[网页 App](https://app.t3.codes) 以及[基于 Electron 的桌面端](https://t3.codes)，来操控你电脑上的各个智能体。

支持你订阅的 Claude Code、Codex、Cursor、Grok Build、OpenCode 以及 Google Antigravity。只要这些智能体在你的电脑上配置好了，T3 Code 就能控制它们。

## 「等等，你们这卖的是什么？」

什么都不卖。我们打造 T3 Code，是因为我们自己就想要最好的智能体开发体验。我们受到了 Codex 桌面端、Conductor、Claude Desktop 和 Cursor Glass 等现有方案的启发，但没有一个达到我们的标准。

我们想要的是高性能、可远程操控、并且真正开放的方案。万一我们走偏了，我们希望你手上掌握一切所需，能够 fork 出来构建你自己想要的编辑器。

## 安装

> [!WARNING]
> T3 Code 目前支持 Codex、Claude、Cursor、Grok Build、OpenCode 和 Antigravity。使用前请至少安装并登录其中一个服务商：
>
> - Codex：安装 [Codex CLI](https://developers.openai.com/codex/cli) 并运行 `codex login`
> - Claude：安装 [Claude Code](https://claude.com/product/claude-code) 并运行 `claude auth login`
> - Cursor：安装 [Cursor CLI](https://cursor.com/cli) 并运行 `agent login`
> - Grok Build：安装 [Grok Build CLI](https://x.ai/cli) 并运行 `grok login`
> - OpenCode：安装 [OpenCode](https://opencode.ai) 并运行 `opencode auth login`
> - Antigravity：在设置中启用它，然后使用**安装 Antigravity**与**使用 Google 账号登录**。无需安装 CLI。

### 命令行

```bash
curl -fsSL https://t3.codes/install.sh | sh
```

在 Windows 上，使用 PowerShell：

```powershell
irm https://t3.codes/install.ps1 | iex
```

然后运行 `t3` 启动服务并打开本地网页 App。`t3 service install` 可让它在后台常驻运行，`t3 update` 升级到新版本，`t3 --help` 包含完整的使用说明。

如果不想安装、只想试用一次，可以改运行 `npx t3@latest`。

### 桌面端

从 [GitHub Releases](https://github.com/pingdotgg/t3code/releases) 或你常用的包管理器安装最新版桌面端：

#### Windows（`winget`）

```bash
winget install T3Tools.T3Code
```

#### macOS（Homebrew）

```bash
brew install --cask t3-code
```

#### Debian、Ubuntu（`.deb`）

从 [GitHub Releases](https://github.com/pingdotgg/t3code/releases) 下载 `.deb`，然后：

```bash
sudo apt install ./T3-Code-*.deb
```

#### Arch Linux（AUR）

稳定版：

```bash
yay -S t3code-bin
```

每夜版：

```bash
yay -S t3code-nightly-bin
```

AUR 打包文件由本仓库维护，位于 [`packaging/aur`](https://github.com/pingdotgg/t3code/blob/main/packaging/aur)。

## 几点说明

我们这个项目还处于非常非常早期的阶段，bug 在所难免。

我们（基本上）暂时不接受贡献。小的修复可能会考虑，大的功能则不会。

## 文档

完整文档位于 [docs/](https://github.com/pingdotgg/t3code/blob/main/docs)。目前还没有文档站点。

- [安装与首次运行](https://github.com/pingdotgg/t3code/blob/main/docs/user/install.md)
- [权限模式](https://github.com/pingdotgg/t3code/blob/main/docs/user/permission-modes.md)
- [键盘快捷键](https://github.com/pingdotgg/t3code/blob/main/docs/user/keybindings.md)
- [项目设置](https://github.com/pingdotgg/t3code/blob/main/docs/user/project-settings.md)
- [外观偏好](https://github.com/pingdotgg/t3code/blob/main/docs/user/appearance.md)
- [通过手机或另一台设备远程访问](https://github.com/pingdotgg/t3code/blob/main/docs/user/remote-access.md)
- [保持 App 与服务器同步](https://github.com/pingdotgg/t3code/blob/main/docs/user/updating.md)
- [源代码管理集成](https://github.com/pingdotgg/t3code/blob/main/docs/user/source-control.md)
- 多账号：[Codex](https://github.com/pingdotgg/t3code/blob/main/docs/user/providers-codex.md) · [Claude](https://github.com/pingdotgg/t3code/blob/main/docs/user/providers-claude.md)
- [以后台服务方式运行 T3 Code](https://github.com/pingdotgg/t3code/blob/main/docs/user/background-service.md)

想从源码构建？请先看 [docs/internals/overview.md](https://github.com/pingdotgg/t3code/blob/main/docs/internals/overview.md)。

## 如果你真的还是想来贡献……请先读这段

### 安装 `vp`

T3 Code 使用了 Vite+，因此你需要先安装全局的 `vp` 命令行工具。

#### macOS / Linux

```bash
curl -fsSL https://vite.plus | bash
```

#### Windows

```bash
irm https://vite.plus/ps1 | iex
```

更多信息请查看他们的入门指南：https://viteplus.dev/guide/

### 安装依赖

```bash
vp i
```

在报告 bug 或提交 PR 之前，请先阅读 [CONTRIBUTING.md](https://github.com/pingdotgg/t3code/blob/main/CONTRIBUTING.md)。

有功能需求？请在 [Ideas 讨论区](https://github.com/pingdotgg/t3code/discussions/categories/ideas) 发起。

需要支持？加入 [Discord](https://discord.gg/jn4EGJjrvv)。
