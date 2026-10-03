import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

interface CodeBlockProps {
  code: string;
  label?: string;
}

/** 终端风格代码块：深色底在明暗两主题下保持一致，附带复制按钮。 */
export default function CodeBlock({ code, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-800/80 px-4 py-2.5">
        <span className="font-mono text-xs tracking-wide text-zinc-400">
          {label ?? "终端"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "已复制" : "复制命令"}
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 active:scale-[0.97]"
        >
          {copied ? (
            <>
              <Check size={14} weight="bold" className="text-emerald-400" />
              <span className="text-emerald-400">已复制</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>复制</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px] leading-relaxed text-zinc-100">
        <code>
          <span className="mr-2 select-none text-emerald-400">$</span>
          {code}
        </code>
      </pre>
    </div>
  );
}
