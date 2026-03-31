import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Globe } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/ProjectCard";
import { Badge } from "@/components/ui/Badge";

export const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot Platform",
      description: "A real-time AI chatbot application built with React, Node.js, and OpenAI API. Features include multi-model support and persistent chat history.",
      image: "https://picsum.photos/seed/ai-chatbot/800/600",
      tags: ["React", "Node.js", "OpenAI", "Socket.io"],
      github: "#",
      demo: "#",
      color: "from-indigo-500/20 to-cyan-500/20",
    },
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing e-commerce stores. Includes real-time analytics, inventory management, and order tracking.",
      image: "https://picsum.photos/seed/dashboard/800/600",
      tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      github: "#",
      demo: "#",
      color: "from-violet-500/20 to-pink-500/20",
    },
    {
      title: "Crypto Tracker App",
      description: "A mobile-responsive web app for tracking cryptocurrency prices and market trends. Features live price updates and interactive charts.",
      image: "https://picsum.photos/seed/crypto/800/600",
      tags: ["React", "Chart.js", "CoinGecko API", "Firebase"],
      github: "#",
      demo: "#",
      color: "from-cyan-500/20 to-indigo-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Featured Projects</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          A collection of projects that showcase my technical skills and 
          creative approach to problem-solving.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Card className="glass border-white/5 hover:border-white/20 transition-all duration-500 group overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
              </div>
              <CardContent className="p-8 flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/5 text-white/60 border-white/10 text-[10px] uppercase tracking-wider">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="p-8 pt-0 flex items-center gap-4">
                <a href={project.github} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-indigo-400 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.demo} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-cyan-400 transition-all duration-300">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
