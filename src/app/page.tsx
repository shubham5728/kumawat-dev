import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Projects from "@/components/Projects";
import ProjectsSkeleton from "@/components/ProjectsSkeleton";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-contrast"
      >
        Skip to work
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Credentials />
        {/* Streams the live GitHub feed; skeleton shows while it resolves */}
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
