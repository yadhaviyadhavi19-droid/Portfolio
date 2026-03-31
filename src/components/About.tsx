import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          I'm a dedicated student on a mission to explore the intersection of 
          technology and creativity. My journey in tech is driven by curiosity 
          and a desire to build things that matter.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="glass border-white/5 hover:border-white/20 transition-all duration-500 group h-full">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className={`p-4 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-500 ${card.color}`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{card.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
