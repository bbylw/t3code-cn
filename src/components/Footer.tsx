import { APP_STORE, CONTRIBUTING, DISCORD, GOOGLE_PLAY, RELEASES, REPO, WEB_APP } from "../data.ts";
import { Logo } from "./Nav.tsx";

const COLUMNS = [
  {
    title: "产品",
    links: [
      { label: "支持的智能体", href: "#agents" },
      { label: "全端操控", href: "#platforms" },
      { label: "安装", href: "#install" },
      { label: "文档", href: "#docs" },
    ],
  },
  {
    title: "资源",
    links: [
      { label: "GitHub 仓库", href: REPO },
      { label: "Releases", href: RELEASES },
      { label: "贡献指南", href: CONTRIBUTING },
    ],
  },
  {
    title: "获取与社区",
    links: [
      { label: "App Store", href: APP_STORE },
      { label: "Google Play", href: GOOGLE_PLAY },
      { label: "网页 App", href: WEB_APP },
      { label: "Discord", href: DISCORD },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              智能体调度控制面板。一部手机，调度电脑上的所有智能体。
            </p>
            <a
              href="#install"
              className="mt-5 inline-block rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 active:scale-[0.98]"
            >
              开始安装
            </a>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} className="md:col-span-2" aria-label={col.title}>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="text-sm text-zinc-600 transition-colors hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-emerald-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-[13px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:text-zinc-400">
          <p>© 2026 T3 Code 中文介绍页</p>
          <p>内容整理自公开 README，仅供学习交流，非官方站点。</p>
        </div>
      </div>
    </footer>
  );
}
