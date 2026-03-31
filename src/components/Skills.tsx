import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Cpu, Globe } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
      color: "from-indigo-500/20 to-cyan-500/20",
      accent: "text-indigo-400",
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"],
      color: "from-violet-500/20 to-pink-500/20",
      accent: "text-violet-400",
    },
    {
      title: "Languages",
      icon: Code2,
      skills: ["C", "C++", "Java", "JavaScript", "Python"],
      color: "from-cyan-500/20 to-indigo-500/20",
      accent: "text-cyan-400",
    },
    {
      title: "Tools",
      icon: Terminal,
      skills: ["Git", "Docker", "VS Code", "Postman", "Figma"],
      color: "from-pink-500/20 to-violet-500/20",
      accent: "text-pink-400",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Technical Arsenal</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          Continuously expanding my toolkit with the latest technologies to build 
          robust and scalable digital solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`glass p-10 rounded-3xl bg-gradient-to-br ${category.color} border-white/5 hover:border-white/20 transition-all duration-500 group`}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className={`p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-500 ${category.accent}`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
