import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, BookOpen } from "@phosphor-icons/react";

const TERMINAL_LINES = [
  { prompt: true, text: "curl -fsSL https://t3.codes/install.sh | sh" },
  { prompt: false, text: "✓ t3 已安装" },
  { prompt: true, text: "t3" },
  { prompt: false, text: "→ 服务已启动，正在打开本地网页 App…" },
  { prompt: false, text: "✓ 已接管 Claude Code" },
  { prompt: false, text: "✓ 已接管 Codex" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* 背景：细网格 + 顶部微光，深浅两主题各自收敛 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_30%,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px] dark:bg-emerald-500/10"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
            T3 CODE · AGENT HARNESS
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tighter text-zinc-900 md:text-5xl lg:text-6xl dark:text-zinc-50">
            一部手机，
            <br />
            调度所有智能体
          </h1>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            T3 Code
            是智能体调度控制面板，把电脑上的智能体装进口袋，随时随地远程操控。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#install"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 active:scale-[0.98]"
            >
              开始安装
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="#docs"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-100 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <BookOpen size={16} />
              阅读文档
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="lg:pl-6"
        >
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-zinc-950/10 dark:shadow-black/50">
            <div className="flex items-center gap-2 border-b border-zinc-800/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="ml-2 font-mono text-xs text-zinc-500">
                终端 · 首次运行
              </span>
            </div>
            <div className="space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
              {TERMINAL_LINES.map((line, i) => (
                <p
                  key={i}
                  className={
                    line.prompt ? "text-zinc-100" : "text-zinc-400"
                  }
                >
                  {line.prompt && (
                    <span className="mr-2 select-none text-emerald-400">$</span>
                  )}
                  {line.text}
                </p>
              ))}
              <p className="text-zinc-100">
                <span className="mr-2 select-none text-emerald-400">$</span>
                <span className="caret-blink inline-block h-4 w-2 translate-y-0.5 bg-emerald-400" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
