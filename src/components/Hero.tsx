import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const yScroll = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.div
        style={{ opacity, scale, y: yScroll }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-indigo-400 text-xs font-medium tracking-wide flex items-center gap-2 mx-auto w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            First Year CSE Student
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-6"
        >
          Yadhavi <br />
          <span className="text-gradient">MRK</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          A passionate developer exploring the future of technology through 
          innovative solutions in AI and Web Development.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-300">
            View My Work
          </a>
          <a href="#contact" className="inline-flex items-center justify-center border border-white/10 hover:bg-white/5 text-white rounded-full px-8 h-12 text-base font-semibold transition-all duration-300">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            className="absolute opacity-10"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          >
            <div className="w-24 h-24 border border-white/20 rounded-2xl rotate-45" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
