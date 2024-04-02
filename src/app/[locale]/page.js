import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("index");

  return (
    <main className="bg-white dark:bg-zinc-950 mt-28 min-h-screen flex-col relative w-full">
      <MaxWidthWrapper>
        <Hero />
        <AboutMe />
      </MaxWidthWrapper>
      <Projects />
      <Footer />
    </main>
  );
}
