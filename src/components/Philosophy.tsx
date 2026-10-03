import Reveal from "./Reveal.tsx";

export default function Philosophy() {
  return (
    <section className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tighter text-zinc-900 md:text-6xl dark:text-zinc-50">
            “什么都不卖。”
          </h2>
          <p className="mx-auto mt-6 max-w-[60ch] text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400">
            我们打造 T3
            Code，只因为我们自己想要最好的智能体开发体验：高性能、可远程操控、真正开放。万一我们走偏了，你手上掌握一切所需，随时可以
            fork 出属于你自己的编辑器。
          </p>
          <p className="mx-auto mt-6 max-w-[60ch] text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            这一想法深受 Codex 桌面端、Conductor、Claude Desktop 与 Cursor Glass
            的启发，只是没有一个达到我们的标准。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
