import {
  AndroidLogo,
  AppleLogo,
  ArrowUpRight,
  Desktop,
  Globe,
} from "@phosphor-icons/react";
import { PLATFORMS, WEB_APP } from "../data.ts";
import type { Platform } from "../data.ts";
import Reveal from "./Reveal.tsx";

function PlatformIcon({ icon }: { icon: Platform["icon"] }) {
  const props = { size: 22, weight: "regular" as const };
  switch (icon) {
    case "apple":
      return <AppleLogo {...props} />;
    case "android":
      return <AndroidLogo {...props} />;
    case "globe":
      return <Globe {...props} />;
    case "desktop":
      return <Desktop {...props} />;
  }
}

export default function Platforms() {
  return (
    <section
      id="platforms"
      tabIndex={-1}
      className="scroll-mt-20 border-y border-zinc-200 bg-zinc-50 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 md:text-4xl dark:text-zinc-50">
              口袋里装下
              <br />
              整个开发环境
            </h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              手机 App、网页 App、桌面端四端同步，直连你电脑上的智能体。出门在外也能继续推进手头的工作。
            </p>
            <a
              href={WEB_APP}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              app.t3.codes
              <ArrowUpRight size={15} weight="bold" />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-zinc-200 dark:border-zinc-800">
            {PLATFORMS.map((platform, i) => (
              <Reveal key={platform.name} delay={i * 0.05}>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-5 border-b border-zinc-200 py-6 transition-colors hover:bg-white/60 dark:border-zinc-800 dark:hover:bg-zinc-900/60"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700 transition-colors group-hover:border-emerald-500/50 group-hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:group-hover:text-emerald-400">
                    <PlatformIcon icon={platform.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {platform.name}
                    </span>
                    <span className="mt-0.5 block text-sm text-zinc-600 dark:text-zinc-400">
                      {platform.desc}
                    </span>
                  </span>
                  <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors group-hover:border-emerald-500 group-hover:text-emerald-700 sm:inline-flex dark:border-zinc-700 dark:text-zinc-300 dark:group-hover:border-emerald-500 dark:group-hover:text-emerald-400">
                    {platform.action}
                    <ArrowUpRight
                      size={15}
                      weight="bold"
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
