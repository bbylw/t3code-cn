import {
  ArrowsClockwise,
  ArrowUpRight,
  DeviceMobile,
  GearSix,
  GitBranch,
  Hammer,
  HardDrives,
  Keyboard,
  Palette,
  RocketLaunch,
  ShieldCheck,
  Users,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { DOC_GROUPS } from "../data.ts";
import Reveal from "./Reveal.tsx";

const ICONS: Record<string, Icon> = {
  rocket: RocketLaunch,
  shield: ShieldCheck,
  keyboard: Keyboard,
  gear: GearSix,
  palette: Palette,
  mobile: DeviceMobile,
  sync: ArrowsClockwise,
  git: GitBranch,
  users: Users,
  server: HardDrives,
  hammer: Hammer,
};

export default function Docs() {
  return (
    <section id="docs" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 md:text-4xl dark:text-zinc-50">
            文档，一应俱全
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            完整文档位于仓库 docs
            目录，目前还没有独立文档站。这里是常用入口。
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {DOC_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-zinc-500 dark:text-zinc-500">
                  {group.title}
                </h3>
                <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60">
                  {group.links.map((link) => {
                    const DocIcon = ICONS[link.icon] ?? RocketLaunch;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3.5 border-b border-zinc-200 px-5 py-3.5 transition-colors last:border-b-0 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                      >
                        <DocIcon
                          size={18}
                          className="shrink-0 text-zinc-400 transition-colors group-hover:text-emerald-500 dark:text-zinc-600 dark:group-hover:text-emerald-400"
                        />
                        <span className="flex-1 text-[15px] text-zinc-800 dark:text-zinc-200">
                          {link.name}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-zinc-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500 dark:text-zinc-700 dark:group-hover:text-emerald-400"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
