export const REPO = "https://github.com/pingdotgg/t3code";
export const RELEASES = `${REPO}/releases`;
export const APP_STORE =
  "https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824";
export const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.t3tools.t3code";
export const WEB_APP = "https://app.t3.codes";
export const DISCORD = "https://discord.gg/jn4EGJjrvv";
export const IDEAS = `${REPO}/discussions/categories/ideas`;
export const CONTRIBUTING = `${REPO}/blob/main/CONTRIBUTING.md`;

const DOC = (path: string) => `${REPO}/blob/main/docs/${path}`;

export interface Agent {
  name: string;
  vendor: string;
  mono: string;
  command: string;
  note: string;
}

export const AGENTS: Agent[] = [
  {
    name: "Claude Code",
    vendor: "Anthropic",
    mono: "Cl",
    command: "claude auth login",
    note: "安装 Claude Code 并登录，T3 Code 即可接管。",
  },
  {
    name: "Codex",
    vendor: "OpenAI",
    mono: "Cx",
    command: "codex login",
    note: "安装 Codex CLI 并登录，T3 Code 即可接管。",
  },
  {
    name: "Cursor",
    vendor: "Cursor",
    mono: "Cu",
    command: "agent login",
    note: "安装 Cursor CLI 并登录，T3 Code 即可接管。",
  },
  {
    name: "Grok Build",
    vendor: "xAI",
    mono: "Gr",
    command: "grok login",
    note: "安装 Grok Build CLI 并登录，T3 Code 即可接管。",
  },
  {
    name: "OpenCode",
    vendor: "开源",
    mono: "Op",
    command: "opencode auth login",
    note: "安装 OpenCode 并登录，T3 Code 即可接管。",
  },
  {
    name: "Antigravity",
    vendor: "Google",
    mono: "An",
    command: "设置中启用",
    note: "在设置中启用并用 Google 账号登录，无需安装 CLI。",
  },
];

export interface Platform {
  name: string;
  desc: string;
  action: string;
  href: string;
  icon: "apple" | "android" | "globe" | "desktop";
}

export const PLATFORMS: Platform[] = [
  {
    name: "iOS",
    desc: "一流的手机 App，把智能体装进口袋。",
    action: "前往 App Store",
    href: APP_STORE,
    icon: "apple",
  },
  {
    name: "Android",
    desc: "同样的操控体验，同样随身携带。",
    action: "前往 Google Play",
    href: GOOGLE_PLAY,
    icon: "android",
  },
  {
    name: "网页 App",
    desc: "免安装，打开 app.t3.codes 即用。",
    action: "打开网页版",
    href: WEB_APP,
    icon: "globe",
  },
  {
    name: "桌面端",
    desc: "基于 Electron 的桌面客户端，从 GitHub Releases 获取。",
    action: "前往 Releases",
    href: RELEASES,
    icon: "desktop",
  },
];

export interface InstallBlock {
  label: string;
  code: string;
}

export interface DesktopOption {
  id: string;
  label: string;
  blocks: InstallBlock[];
  note?: string;
  noteHref?: string;
}

export const CLI_BLOCKS: InstallBlock[] = [
  {
    label: "macOS / Linux",
    code: "curl -fsSL https://t3.codes/install.sh | sh",
  },
  {
    label: "Windows（PowerShell）",
    code: "irm https://t3.codes/install.ps1 | iex",
  },
];

export const CLI_STEPS: string[] = [
  "t3：启动服务并打开本地网页 App",
  "t3 service install：让它在后台常驻运行",
  "t3 update：升级到新版本",
  "t3 --help：查看完整使用说明",
  "npx t3@latest：不想安装、只试用一次",
];

export const DESKTOP_OPTIONS: DesktopOption[] = [
  {
    id: "windows",
    label: "Windows",
    blocks: [{ label: "winget", code: "winget install T3Tools.T3Code" }],
  },
  {
    id: "macos",
    label: "macOS",
    blocks: [{ label: "Homebrew", code: "brew install --cask t3-code" }],
  },
  {
    id: "debian",
    label: "Debian / Ubuntu",
    blocks: [{ label: ".deb", code: "sudo apt install ./T3-Code-*.deb" }],
    note: "先从 GitHub Releases 下载 .deb 包",
    noteHref: RELEASES,
  },
  {
    id: "arch",
    label: "Arch Linux",
    blocks: [
      { label: "稳定版", code: "yay -S t3code-bin" },
      { label: "每夜版", code: "yay -S t3code-nightly-bin" },
    ],
    note: "AUR 打包文件由仓库 packaging/aur 维护",
    noteHref: `${REPO}/blob/main/packaging/aur`,
  },
];

export type DocIconKind =
  | "rocket"
  | "shield"
  | "keyboard"
  | "gear"
  | "palette"
  | "mobile"
  | "sync"
  | "git"
  | "users"
  | "server"
  | "hammer";

export interface DocLink {
  name: string;
  href: string;
  icon: DocIconKind;
}

export interface DocGroup {
  title: string;
  links: DocLink[];
}

export const DOC_GROUPS: DocGroup[] = [
  {
    title: "上手指南",
    links: [
      { name: "安装与首次运行", href: DOC("user/install.md"), icon: "rocket" },
      { name: "权限模式", href: DOC("user/permission-modes.md"), icon: "shield" },
      { name: "键盘快捷键", href: DOC("user/keybindings.md"), icon: "keyboard" },
      { name: "项目设置", href: DOC("user/project-settings.md"), icon: "gear" },
      { name: "外观偏好", href: DOC("user/appearance.md"), icon: "palette" },
    ],
  },
  {
    title: "深入使用",
    links: [
      { name: "手机与另一台设备远程访问", href: DOC("user/remote-access.md"), icon: "mobile" },
      { name: "保持 App 与服务器同步", href: DOC("user/updating.md"), icon: "sync" },
      { name: "源代码管理集成", href: DOC("user/source-control.md"), icon: "git" },
      { name: "多账号：Codex", href: DOC("user/providers-codex.md"), icon: "users" },
      { name: "多账号：Claude", href: DOC("user/providers-claude.md"), icon: "users" },
      { name: "以后台服务方式运行", href: DOC("user/background-service.md"), icon: "server" },
      { name: "从源码构建", href: DOC("internals/overview.md"), icon: "hammer" },
    ],
  },
];

export const VP_INSTALL_BLOCKS: InstallBlock[] = [
  {
    label: "macOS / Linux",
    code: "curl -fsSL https://vite.plus | bash",
  },
  {
    label: "Windows",
    code: "irm https://vite.plus/ps1 | iex",
  },
  {
    label: "安装依赖",
    code: "vp i",
  },
];
