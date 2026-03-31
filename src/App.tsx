import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 z-[100] origin-left"
        style={{ scaleX }}
      />
      <BackgroundBlobs />
      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-12 md:gap-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <a href="#home" className="text-2xl font-display font-bold tracking-tighter">
              STUDENT<span className="text-indigo-500">.</span>
            </a>
            <p className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">
              Designed and built with passion. Exploring the future of technology 
              and design. © {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex items-center gap-8 mt-4">
              {["Twitter", "GitHub", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-medium text-white/30 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Subtle background glow for footer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[120px] -z-10 rounded-full" />
      </footer>
    </div>
  );
}

export default App;
