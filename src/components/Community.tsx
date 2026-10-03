import { ArrowUpRight, DiscordLogo } from "@phosphor-icons/react";
import { CONTRIBUTING, DISCORD, IDEAS, REPO, VP_INSTALL_BLOCKS } from "../data.ts";
import CodeBlock from "./CodeBlock.tsx";
import Reveal from "./Reveal.tsx";

const GUIDE_URL = "https://viteplus.dev/guide/";

const ACTION_LINK_CLASS =
  "inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400";

export default function Community() {
  return (
    <section
      id="community"
      className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 md:text-4xl dark:text-zinc-50">
            还很早期，
            <br />
            欢迎围观
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            项目处于非常早期的阶段，Bug
            在所难免。小的修复可能会考虑，大的功能暂时不接受。报告 Bug
            或提交 PR 之前，请先阅读贡献指南。
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={CONTRIBUTING}
              target="_blank"
              rel="noreferrer"
              className={ACTION_LINK_CLASS}
            >
              贡献指南
              <ArrowUpRight size={14} weight="bold" />
            </a>
            <a
              href={IDEAS}
              target="_blank"
              rel="noreferrer"
              className={ACTION_LINK_CLASS}
            >
              Ideas 讨论区
              <ArrowUpRight size={14} weight="bold" />
            </a>
            <a
              href={DISCORD}
              target="_blank"
              rel="noreferrer"
              className={ACTION_LINK_CLASS}
            >
              <DiscordLogo size={16} />
              Discord
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="text-sm font-semibold tracking-wide text-zinc-500 dark:text-zinc-500">
            想从源码构建，先安装 vp 工具
          </h3>
          <div className="mt-4 space-y-4">
            {VP_INSTALL_BLOCKS.map((block) => (
              <CodeBlock key={block.label} label={block.label} code={block.code} />
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            T3 Code 基于 Vite+ 构建。更多信息请查看
            <a
              href={GUIDE_URL}
              target="_blank"
              rel="noreferrer"
              className="mx-1 text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              入门指南
            </a>
            ，构建前先读
            <a
              href={`${REPO}/blob/main/docs/internals/overview.md`}
              target="_blank"
              rel="noreferrer"
              className="mx-1 font-mono text-[13px] text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              docs/internals/overview.md
            </a>
            。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
