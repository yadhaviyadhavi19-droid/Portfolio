import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/Card";

export const Contact = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:hello@example.com", label: "Email", color: "text-indigo-400" },
    { icon: Github, href: "#", label: "GitHub", color: "text-white" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "text-cyan-400" },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's Connect</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          I'm always open to new opportunities, collaborations, or just a 
          friendly chat about technology.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants}>
          <Card className="glass border-white/5 p-10 rounded-3xl h-full">
            <CardContent className="p-0">
              <div className="flex items-center gap-6 mb-10">
                <div className="p-4 rounded-2xl bg-white/5 text-indigo-400">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold">Send a Message</h3>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">Name</label>
                    <Input placeholder="Your Name" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                    <Input placeholder="Your Email" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                  <Textarea placeholder="Your Message" className="bg-white/5 border-white/10 rounded-2xl min-h-[150px] focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 text-base font-semibold shadow-lg shadow-indigo-500/20 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center"
        >
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">Contact Info</h3>
              <p className="text-lg text-white/50 leading-relaxed max-w-md">
                Feel free to reach out through any of these platforms. I'll get 
                back to you as soon as possible.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className={`p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300 ${link.color}`}>
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/40 uppercase tracking-widest">{link.label}</p>
                    <p className="text-lg font-semibold text-white/80">Connect with me</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
