import { AGENTS } from "../data.ts";
import Reveal from "./Reveal.tsx";

export default function Agents() {
  return (
    <section id="agents" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-bold tracking-tighter text-zinc-900 md:text-4xl dark:text-zinc-50">
            一个面板，六种智能体
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            只要这些智能体在你的电脑上配置好，T3
            Code 就能控制它们。先完成各家的登录，再交给 T3 Code 统一调度。
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {AGENTS.map((agent, i) => (
            <Reveal key={agent.name} delay={(i % 2) * 0.07}>
              <article className="group h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-emerald-500/50 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-500/40">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 font-mono text-sm font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {agent.mono}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {agent.name}
                    </h3>
                    <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                      {agent.vendor}
                    </p>
                  </div>
                  <span className="ml-auto hidden font-mono text-xs text-zinc-400 sm:block dark:text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 overflow-hidden rounded-xl bg-zinc-950 px-4 py-3">
                  <p className="truncate font-mono text-[13px] text-zinc-100">
                    <span className="mr-2 select-none text-emerald-400">$</span>
                    {agent.command}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {agent.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
