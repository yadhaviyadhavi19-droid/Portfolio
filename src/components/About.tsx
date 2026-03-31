import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Heart } from "lucide-react";

export const About = () => {
  const cards = [
    {
      title: "Education",
      icon: GraduationCap,
      description: "First-year Computer Science student at a leading university. Learning the fundamentals of algorithms, data structures, and software engineering.",
      color: "text-indigo-400",
    },
    {
      title: "Skills",
      icon: Code,
      description: "Proficient in C, C++, and Java. Currently mastering React, TypeScript, and modern web development frameworks.",
      color: "text-cyan-400",
    },
    {
      title: "Passion",
      icon: Heart,
      description: "Deeply passionate about solving complex problems and creating elegant, user-centric digital experiences.",
      color: "text-pink-400",
    },
    {
      title: "Future",
      icon: Rocket,
      description: "Airing to become a full-stack developer and contribute to impactful open-source projects and innovative startups.",
      color: "text-violet-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          I'm a dedicated student on a mission to explore the intersection of 
          technology and creativity. My journey in tech is driven by curiosity 
          and a desire to build things that matter.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cards.map((card) => (
          <motion.div key={card.title} variants={itemVariants}>
            <div className="glass border border-white/5 hover:border-white/20 transition-all duration-500 group h-full rounded-3xl overflow-hidden">
              <div className="p-8 flex flex-col items-center text-center">
                <div className={`p-4 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-500 ${card.color}`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{card.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
