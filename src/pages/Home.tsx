import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  MessageCircle,
  Code2,
  Users,
  Briefcase,
  Zap,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Paintbrush,
  Layout,
  LayoutTemplate,
  AppWindow,
  Compass,
  Home as HomeIcon,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GAMES, TOPICS } from "../constants";
import video from "../assets/video/about-me.mp4";
import Footer from "../components/Footer";

const services = [
  {
    name: "Frontend Development",
    icon: Layout,
    detail:
      "Building clean, responsive, and intuitive user interfaces with modern frameworks.",
  },
  {
    name: "Backend Development",
    icon: Code2,
    detail:
      "Creating robust server-side solutions and scalable API architectures.",
  },
  {
    name: "Mobile & Cross-Platform",
    icon: Compass,
    detail:
      "Developing seamless experiences across iOS, Android, and web platforms.",
  },
  {
    name: "UI/UX Design",
    icon: Paintbrush,
    detail:
      "Crafting user-centered designs that balance aesthetics with functionality.",
  },
];

const topicIconMap: Record<string, React.FC<any>> = {
  LayoutTemplate,
  Paintbrush,
  Code2,
  AppWindow,
};

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      const heroHeight = rect.height;
      const scrollProgress = -rect.top / heroHeight;

      // After scrolling past half the hero section, change text to current color
      if (scrollProgress > 0.5) {
        setTextColor("text-white");
      } else {
        setTextColor("text-foreground");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero — minimal, high-impact */}
      <section className="hero-section relative min-h-screen flex items-center px-8 pt-20 overflow-hidden ">
        {/* Background video */}
        {/* <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-auto min-h-full max-w-none object-cover z-0"
        >
          <source src={video} type="video/mp4" />
        </video> */}

        {/* Blur overlay in front of video */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/10 z-5"></div>

        {/* Color gradient overlay - bottom half with white transition */}
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-background via-background/30 via-30% to-transparent z-5"></div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[10%] right-[15%] w-[35vw] h-[35vw] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-primary/5 blur-[150px] rounded-full" />
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 ">
          <div className="relative z-10 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className={`font-sans text-[10px] font-bold tracking-[0.4em] uppercase mb-8 transition-colors duration-500 ${textColor === "text-primary" ? "text-white" : "text-primary"}`}
              >
                Developer & Designer from Phnom Penh
              </p>
              <h1
                className={`text-[10vw] lg:text-[7vw] font-serif font-medium leading-[0.9] tracking-tight mb-12 transition-colors duration-500 ${textColor === "text-primary" ? "text-white" : "text-primary"}`}
              >
                BUILDING
                <br />
                <span className="text-[8vw] lg:text-[6vw] font-serif font-medium leading-[0.9] tracking-tight">
                  DIGITAL EXPERIENCES
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row items-start gap-10 max-w-2xl">
                <p
                  className={`text-lg font-serif leading-relaxed italic flex-1 transition-colors duration-500 ${textColor === "text-primary" ? "text-white/80" : "text-muted-foreground/80"}`}
                >
                  Self-driven developer passionate about creating clean,
                  functional, and thoughtful experiences. From concept to
                  deployment.
                </p>
                <div className="shrink-0 flex flex-col gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-none h-14 px-8 bg-white text-black hover:bg-gray-200 transition-colors duration-500 font-sans text-xs tracking-[0.2em] uppercase"
                  >
                    <Link to="#documents">Explore Documents</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block aspect-[4/5] bg-muted overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out border border-border/20"
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Interior"
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
            />
          </motion.div> */}
        </div>
      </section>

      {/* Learning & Topics Section */}
      <section className="py-35 px-8 border-t border-border/20 bg-background relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: `24px 24px`
          }}
        />

        {/* Large Decorative Blooms */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

        <div className=" pt-10 max-w-7xl mx-auto relative z-10" id="documents">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative group">
              <div className="flex items-center gap-4 mb-8">
                <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-primary uppercase">
                  Library & learning
                </p>
                <div className="h-[1px] w-12 bg-primary/20 group-hover:w-20 transition-all duration-700" />
              </div>
              <h2 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter leading-[0.85]">
                Programming <br className="hidden md:block" />
                <span className="text-muted-foreground/20">&</span> <span className="italic font-light text-muted-foreground group-hover:text-primary transition-colors duration-700">Design.</span>
              </h2>
            </div>
            <p className="text-primary text-lg font-serif max-w-sm">
              Explore documented lessons and materials on key technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOPICS.map((topic, idx) => {
              const lessonCount = topic.lessons.length;

              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Link to={`/document/${topic.id}`} className="block h-full cursor-pointer group">
                    <div className="border border-primary/10 bg-white/40 backdrop-blur-md h-full p-8 flex flex-col justify-between group-hover:border-primary/40 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/5 space-y-6">
                      {/* Dynamic unique gradient based on topic - enhanced hover */}
                      <div className={`absolute inset-0 bg-gradient-to-tr ${topic.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`} />
                      <div className={`absolute -inset-20 bg-gradient-to-tr ${topic.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-1000 p-20 pointer-events-none`} />

                      <div className="relative w-24 h-24 border border-border/40 flex items-center justify-center bg-white shrink-0 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${topic.gradient} opacity-30`} />
                        <img src={topic.logo} alt={topic.title} className="relative z-10 w-full h-full object-cover p-3 transition-all duration-700 shadow-inner" />
                      </div>

                      <div className="z-10 flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`${topic.level === "Beginner" ? "bg-green-500/10 text-green-600 border-green-500/20" :
                            topic.level === "Intermediate" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" :
                              "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
                            } px-2.5 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider flex items-center gap-1.5 border`}>
                            <span className={`${topic.level === "Beginner" ? "bg-green-500" :
                              topic.level === "Intermediate" ? "bg-amber-500" :
                                "bg-cyan-500"
                              } w-1 h-1 rounded-full`} />
                            {topic.level}
                          </span>
                          <span className="text-[9px] font-sans font-medium text-muted-foreground/60 uppercase tracking-widest whitespace-nowrap">
                            {lessonCount} Lessons
                          </span>
                        </div>

                        <h3 className="text-3xl font-serif font-medium tracking-tight mb-3 group-hover:text-primary transition-colors duration-500">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2 italic">
                          {topic.description}
                        </p>
                      </div>

                      <div className="z-10 pt-4 border-t border-border/10 flex items-center justify-between">
                        <div className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                          Explore <ArrowRight className="w-3 h-3 transition-transform" />
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-sans font-bold uppercase tracking-widest text-muted-foreground/40 italic">
                          <Clock className="w-3 h-3 text-primary/40" />
                          {lessonCount * 45} MINS EST.
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Games Highlight — List style */}
      <section
        id="projects"
        className="py-32 px-8 border-t border-border/20 bg-muted/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6">
                Digital Games Archive
              </p>
              <h2 className="text-6xl font-serif font-medium tracking-tight hover:text-primary transition-colors duration-500 cursor-pointer">
                The Vault Game Portfolio.
              </h2>
            </div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <Button
                variant="link"
                asChild
                className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary p-0 h-auto"
              >
                <Link to="/vault">
                  Explore All Games <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="space-y-0">
            {GAMES.map((game, index) => (
              <motion.div
                key={game.id}
                layout
                className="border-t border-border/20 group hover:border-primary/40 hover:bg-muted/5 transition-all duration-500"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === game.id ? null : game.id,
                    )
                  }
                  className={`w-full text-left py-6 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_200px_auto] gap-8 items-center`}
                >

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 border border-border/20 overflow-hidden shrink-0 ">
                      <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif font-medium tracking-tight group-hover:text-primary transition-colors duration-500">
                        {game.title}
                      </h3>
                      <p className="text-xs font-sans tracking-[0.1em] text-muted-foreground uppercase mt-2">
                        {game.category}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-wrap gap-2 justify-end">
                    <motion.span
                      className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground/60 border border-border/40 px-3 py-1 group-hover:border-primary group-hover:text-primary transition-all duration-500 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                    >
                      {game.category}
                    </motion.span>
                  </div>
                  <motion.div
                    className="w-10 h-10 border border-border/40 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-background"
                    animate={{
                      rotate: expandedProject === game.id ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedProject === game.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedProject === game.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-16  grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
                        <div className="space-y-8">
                          <p className="text-xl text-muted-foreground font-serif leading-relaxed italic">
                            {game.description}
                          </p>
                          <Button
                            asChild
                            variant="outline"
                            className="rounded-none font-sans text-[10px] font-bold tracking-[0.2em] uppercase h-12 px-8"
                          >
                            <Link to="/vault">
                              Play Game <ExternalLink className="ml-3 w-3 h-3" />
                            </Link>
                          </Button>
                        </div>
                        <motion.div
                          className="aspect-[16/9] overflow-hidden border border-border/20"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={game.cover}
                            alt={game.title}
                            className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-0.005"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <div className="border-t border-border/20" />
          </div>
        </div>
      </section>

      {/* Vision — asymmetric layout */}
      <section id="about" className="py-32 px-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24 items-start">
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6">
              My Approach
            </p>
            <h2 className="text-5xl font-serif font-medium tracking-tight leading-[1.1]">
              Clean Code,
              <br />
              Thoughtful Design.
            </h2>
          </motion.div>
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-2xl text-muted-foreground font-serif leading-relaxed max-w-2xl hover:text-foreground transition-colors duration-500">
              I'm a self-driven developer with hands-on experience across
              frontend, backend, mobile, and UI/UX design. I bring ideas to life
              from concept to deployment, with an obsession for quality and
              commitment to continuous growth. Every project reflects thoughtful
              planning and careful attention to detail.
            </p>
            <div className="pt-4 pb-8">
              <Button
                asChild
                variant="link"
                className="p-0 h-auto font-sans text-xs font-bold tracking-widest uppercase text-primary hover:text-foreground transition-colors group"
              >
                <Link to="/about" className="flex items-center gap-2">
                  View Full Story{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                className="space-y-4 p-6 border border-border/20 hover:border-primary/50 transition-all duration-500 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors duration-500">
                  Materials
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                  We use quality stone, warm wood, and fine textiles that feel
                  good to touch and look better over time.
                </p>
              </motion.div>
              <motion.div
                className="space-y-4 p-6 border border-border/20 hover:border-primary/50 transition-all duration-500 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors duration-500">
                  Light & Space
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                  We design rooms around natural light — how it enters, moves,
                  and changes throughout the day.
                </p>
              </motion.div>
            </div>
            <Separator className="bg-border/20" />
            <motion.div
              className="flex items-center gap-8 py-6 group cursor-pointer"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-20 h-20 rounded-none bg-muted overflow-hidden border border-border/20 group-hover:border-primary/50 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://picsum.photos/seed/sivechheng/400/400"
                  alt="Lead Designer"
                  className="w-full h-full object-cover group-hover:grayscale-0 grayscale transition-all duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-serif text-xl group-hover:text-primary transition-colors duration-500">
                  Sivechheng Kheang
                </h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-1">
                  Principal Designer & Founder
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Games Highlight — List style */}
      {/* <section
        id="projects"
        className="py-32 px-8 border-t border-border/20 bg-muted/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6">
                Digital Games Archive
              </p>
              <h2 className="text-6xl font-serif font-medium tracking-tight hover:text-primary transition-colors duration-500 cursor-pointer">
                The Vault.
              </h2>
            </div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <Button
                variant="link"
                asChild
                className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary p-0 h-auto"
              >
                <Link to="/vault">
                  Explore All Games <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="space-y-0">
            {GAMES.map((game, index) => (
              <motion.div
                key={game.id}
                layout
                className="border-t border-border/20 group"
              >
                <button
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === game.id ? null : game.id,
                    )
                  }
                  className="w-full text-left py-12 grid grid-cols-[80px_1fr_auto] md:grid-cols-[100px_1fr_200px_auto] gap-8 items-center"
                >
                  <span className="font-serif text-muted-foreground/30 text-2xl">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 border border-border/20 overflow-hidden shrink-0">
                      <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif font-medium tracking-tight group-hover:text-primary transition-colors duration-500">
                        {game.title}
                      </h3>
                      <p className="text-xs font-sans tracking-[0.1em] text-muted-foreground uppercase mt-2">
                        {game.category}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-wrap gap-2 justify-end">
                    <motion.span
                      className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground/60 border border-border/40 px-3 py-1 group-hover:border-primary group-hover:text-primary transition-all duration-500 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                    >
                      {game.category}
                    </motion.span>
                  </div>
                  <motion.div
                    className="w-10 h-10 border border-border/40 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-background"
                    animate={{
                      rotate: expandedProject === game.id ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedProject === game.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedProject === game.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-16 pl-[100px] grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-16">
                        <div className="space-y-8">
                          <p className="text-xl text-muted-foreground font-serif leading-relaxed italic">
                            {game.description}
                          </p>
                          <Button
                            asChild
                            variant="outline"
                            className="rounded-none font-sans text-[10px] font-bold tracking-[0.2em] uppercase h-12 px-8"
                          >
                            <Link to="/vault">
                              Play Game <ExternalLink className="ml-3 w-3 h-3" />
                            </Link>
                          </Button>
                        </div>
                        <motion.div
                          className="aspect-[16/10] overflow-hidden border border-border/20"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={game.thumbnail}
                            alt={game.title}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <div className="border-t border-border/20" />
          </div>
        </div>
      </section> */}

      {/* Services — minimalist cards */}
      <section className="py-32 px-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div
              className="max-w-md"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6">
                What We Do
              </p>
              <h2 className="text-5xl font-serif font-medium tracking-tight leading-tight mb-8">
                Full Service,
                <br />
                Start to Finish.
              </h2>
              <p className="text-muted-foreground font-serif italic text-lg mb-12">
                "From the first floor plan to the last cushion — we handle every
                step of the design process."
              </p>
              <div className="flex flex-col gap-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors"
                  >
                    <Link to="/services">Explore All Services →</Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors"
                  >
                    Work with us →
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/20 border border-border/20"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {services.map((service, idx) => (
                <motion.div
                  key={service.name}
                  className="bg-background p-10 flex flex-col justify-between hover:bg-muted/5 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className="w-12 h-12 border border-border/40 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all duration-500 mb-12"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors duration-500">
                      {service.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-500">
                      {service.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA — atmospheric */}
      <section className="py-40 px-8 border-t border-border/20 relative overflow-hidden text-center">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 blur-[150px] -z-10 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-10">
            Get in Touch
          </p>
          <h2 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter mb-16 px-4 hover:text-primary transition-colors duration-500 cursor-pointer">
            Have a project
            <br />
            in mind?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button asChild className="rounded-none h-16 px-12 bg-foreground text-background hover:bg-primary transition-colors duration-500 font-sans text-[11px] font-bold tracking-[0.2em] uppercase">
                <Link to="/services#contact">
                  Send a Project Brief
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                className="rounded-none h-16 px-12 font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:border-foreground transition-all duration-500"
              >
                <Link to="/services">
                  Find Our Studio
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Social / Info Footer Minimal */}
      <Footer />
    </div>
  );
}
