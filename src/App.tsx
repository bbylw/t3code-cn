import Nav from "./components/Nav.tsx";
import Hero from "./components/Hero.tsx";
import Agents from "./components/Agents.tsx";
import Platforms from "./components/Platforms.tsx";
import Philosophy from "./components/Philosophy.tsx";
import Install from "./components/Install.tsx";
import Docs from "./components/Docs.tsx";
import Community from "./components/Community.tsx";
import Footer from "./components/Footer.tsx";
import { useTheme } from "./hooks/useTheme.ts";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div
      id="top"
      className="min-h-[100dvh] bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
    >
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Agents />
        <Platforms />
        <Philosophy />
        <Install />
        <Docs />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
