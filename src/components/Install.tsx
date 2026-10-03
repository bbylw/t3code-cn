import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { CLI_BLOCKS, CLI_STEPS, DESKTOP_OPTIONS, RELEASES } from "../data.ts";
import CodeBlock from "./CodeBlock.tsx";
import Reveal from "./Reveal.tsx";

type Tab = "cli" | "desktop";

export default function Install() {
  const [tab, setTab] = useState<Tab>("cli");
  const [os, setOs] = useState(DESKTOP_OPTIONS[0].id);
  const current = DESKTOP_OPTIONS.find((o) => o.id === os) ?? DESKTOP_OPTIONS[0];

  return (
    <section
      id="install"
      className="scroll-mt-20 border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-emerald-700 dark:text-emerald-400">
            INSTALL · 安装指南
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter text-zinc-900 md:text-4xl dark:text-zinc-50">
            安装，一行命令的事
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            一行命令完成安装，再用 t3
            启动服务并打开本地网页 App。桌面端用户也可以从应用商店与包管理器获取。
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 inline-flex rounded-full border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-950">
            {(
              [
                { id: "cli", label: "命令行" },
                { id: "desktop", label: "桌面端" },
              ] as { id: Tab; label: string }[]
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                aria-pressed={tab === t.id}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                  tab === t.id
                    ? "bg-emerald-500 text-zinc-950"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {tab === "cli" ? (
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {CLI_BLOCKS.map((block) => (
                <CodeBlock key={block.label} label={block.label} code={block.code} />
              ))}
            </div>
            <ul className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
              {CLI_STEPS.map((step) => {
                const [cmd, desc] = step.split("：");
                return (
                  <li key={step} className="flex items-baseline gap-3 px-5 py-3.5">
                    <code className="shrink-0 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-[13px] text-emerald-700 dark:text-emerald-400">
                      {cmd}
                    </code>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {desc}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="选择操作系统">
                {DESKTOP_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setOs(option.id)}
                    aria-pressed={os === option.id}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                      os === option.id
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                        : "border border-zinc-300 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                从 GitHub Releases
                或常用的包管理器安装最新版桌面端，升级后重新打开应用即可。
                <a
                  href={RELEASES}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 inline-flex items-center gap-1 font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  前往 Releases
                  <ArrowUpRight size={14} weight="bold" />
                </a>
              </p>
            </div>
            <div className="space-y-4">
              {current.blocks.map((block) => (
                <CodeBlock key={block.label} label={block.label} code={block.code} />
              ))}
              {current.note && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  注：{current.note}。
                  {current.noteHref && (
                    <a
                      href={current.noteHref}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-1 text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                    >
                      查看
                    </a>
                  )}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
