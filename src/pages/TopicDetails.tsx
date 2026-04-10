import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Clock, BookOpen, LayoutTemplate, Paintbrush, Code2, AppWindow } from "lucide-react";
import { TOPICS } from "../constants";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";

const iconMap: Record<string, React.FC<any>> = {
  LayoutTemplate,
  Paintbrush,
  Code2,
  AppWindow,
};

export default function TopicDetails() {
  const { topicId } = useParams();
  const topic = TOPICS.find((t) => t.id === topicId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!topic) {
    return (
      <div className="min-h-screen pt-32 px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-serif mb-6">Topic not found</h2>
        <Button asChild variant="outline" className="rounded-none font-sans text-[10px] font-bold tracking-[0.2em] uppercase">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  const IconComponent = iconMap[topic.iconName] || BookOpen;

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 flex flex-col selection:bg-primary/30">
      <div className="container mx-auto px-6 max-w-5xl flex-1">
        {/* Navigation & Header */}
        <div className="mb-16">
          <Button
            asChild
            variant="link"
            className="p-0 h-auto font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary mb-12 flex items-center gap-2"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between"
          >
            <div className="flex items-center gap-8">
              <div className="relative w-24 h-24 border border-border/40 flex items-center justify-center bg-white shrink-0 overflow-hidden shadow-2xl rounded-sm group">
                <div className={`absolute inset-0 bg-gradient-to-tr ${topic.gradient} opacity-30`} />
                <img src={topic.logo} alt={topic.title} className="relative z-10 w-full h-full object-cover p-3 shadow-inner" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${
                    topic.level === "Beginner" ? "bg-green-500/10 text-green-600 border-green-500/20" :
                    topic.level === "Intermediate" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" :
                    "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
                  } px-2.5 py-1 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 border`}>
                    <span className={`${
                      topic.level === "Beginner" ? "bg-green-500" :
                      topic.level === "Intermediate" ? "bg-amber-500" :
                      "bg-cyan-500"
                    } w-1 h-1 rounded-full`} />
                    {topic.level} Level
                  </span>
                  <span className="text-[9px] font-sans font-bold text-muted-foreground/30 uppercase tracking-[0.3em]">
                    Documented Module
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight leading-[0.8] mb-2 uppercase">
                  {topic.title}
                </h1>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-3 text-right">
              <div className="text-sm font-serif italic text-muted-foreground/60 border-b border-border/20 pb-2">
                {topic.lessons.length} Lessons in this module
              </div>
              <div className="flex items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-primary/40">
                <Clock className="w-3.5 h-3.5" />
                {topic.lessons.length * 45} Minutes estimated
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description Section */}
        <motion.div 
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl font-serif leading-relaxed text-muted-foreground hover:text-foreground transition-colors duration-500">
            {topic.description}
          </p>
        </motion.div>

        {/* Lessons List */}
        <div className="mb-32">
          <div className="bg-border/20 h-px w-full mb-8"></div>
          <h2 className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-12">
            Course Syllabus
          </h2>

          <div className="flex flex-col gap-4">
            {topic.lessons.length > 0 ? (
              topic.lessons.map((lesson, idx) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
                  <div className="p-8 border border-border/20 group-hover:border-primary/30 transition-colors duration-500 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-center">
                    <div className="font-serif text-3xl text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-500 w-12">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif tracking-tight mb-2 group-hover:text-primary transition-colors duration-500">
                        {lesson.title}
                      </h3>
                      <p className="text-muted-foreground font-serif italic">
                        {lesson.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-sans uppercase font-bold tracking-widest text-muted-foreground/60 border border-border/20 px-4 py-2 self-start md:self-center shrink-0">
                      <Clock className="w-3 h-3 text-primary" />
                      {lesson.duration}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 border border-border/20 border-dashed text-muted-foreground font-serif italic">
                Lessons for this topic are currently in development.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
