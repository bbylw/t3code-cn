import { useEffect, useRef, useState } from "react";
import { List, Moon, Sun, X } from "@phosphor-icons/react";
import type { Theme } from "../hooks/useTheme.ts";

interface NavProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const LINKS = [
  { label: "智能体", href: "#agents" },
  { label: "全端操控", href: "#platforms" },
  { label: "安装", href: "#install" },
  { label: "文档", href: "#docs" },
];

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="回到顶部">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 font-mono text-sm font-bold text-zinc-950">
        T3
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        T3 Code
      </span>
    </a>
  );
}

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = (hash?: string) => {
    setOpen(false);
    requestAnimationFrame(() => {
      const target = hash ? document.querySelector<HTMLElement>(hash) : null;
      (target ?? burgerRef.current)?.focus({ preventScroll: true });
    });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="主导航"
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 active:scale-[0.96] dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#install"
            className="hidden rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 active:scale-[0.98] md:inline-block"
          >
            开始安装
          </a>
          <button
            ref={burgerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 hover:bg-zinc-100 active:scale-[0.96] md:hidden dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200 px-4 py-3 md:hidden dark:border-zinc-800"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => close(link.href)}
              className="block rounded-xl px-3 py-2.5 text-[15px] text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#install"
            onClick={() => close("#install")}
            className="mt-2 block rounded-full bg-emerald-500 px-5 py-2.5 text-center text-sm font-semibold text-zinc-950"
          >
            开始安装
          </a>
        </div>
      )}
    </header>
  );
}
