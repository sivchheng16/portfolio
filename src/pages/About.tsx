import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Quote, Layers, Sun, Palette, ArrowRight,
  Instagram, Linkedin, MessageCircle, Mail, Loader2, CheckCircle2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const philosophyItems = [
  {
    title: "Clean Code",
    icon: Layers,
    detail:
      "Well-structured, maintainable code that's built for scalability and readability. Quality matters.",
  },
  {
    title: "User-Centered Design",
    icon: Sun,
    detail:
      "Every feature is designed with the end user in mind. Simplicity and functionality go hand in hand.",
  },
  {
    title: "Continuous Growth",
    icon: Palette,
    detail:
      "Always learning, always improving. Technology evolves, and so do I — staying current with industry best practices.",
  },
];

const ethos = [
  { title: 'Honest Materials', desc: 'We use stone, timber, and metal in their natural form — no decor that pretends to be something it is not.' },
  { title: 'Quiet Spaces', desc: 'Good design does not shout. We work to remove what is unnecessary so the space can breathe.' },
  { title: 'Light as a Material', desc: 'We plan every room around how sunlight moves through it from morning to evening.' },
];

export default function About() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) {
      setStatus('error');
      setErrorMessage('Services are temporarily unavailable.');
      return;
    }
    setStatus('submitting');
    try {
      await addDoc(collection(db, 'contact_messages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Communication failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6">
              Developer & Designer
            </p>
            <h1 className="text-7xl md:text-8xl font-serif font-medium tracking-tighter leading-[0.9] mb-12 uppercase">
              Sivchheng Kheang:
              <br />
              Building Digital Experiences.
            </h1>
            <p className="text-2xl text-muted-foreground font-serif leading-relaxed max-w-2xl italic">
              "Self-driven developer passionate about creating clean,
              functional, and thoughtful digital experiences. From concept to
              deployment, with an obsession for quality."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="px-8 mb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-muted overflow-hidden border border-border/20"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
              alt="Sivchheng Kheang"
              className="w-full h-full object-cover grayscale transition-all duration-1000 scale-105 hover:scale-100"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="text-primary">
              <Quote className="w-12 h-12 mb-6" />
            </div>
            <h2 className="text-4xl font-serif font-medium">
              From Concept to Deployment.
            </h2>
            <p className="text-lg text-muted-foreground font-serif leading-relaxed italic">
              I'm a self-driven developer with hands-on experience across
              frontend, backend, mobile, and UI/UX design. With a strong
              foundation in digital products and a commitment to continuous
              growth, I bring ideas to life through clean code and thoughtful
              design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work directly with stakeholders from the initial concept through
              final deployment. Every project is unique, and I approach each
              with the same dedication to detail and quality. My goal is to
              understand the problem, create elegant solutions, and build
              products that people genuinely enjoy using.
            </p>
            <div className="pt-8">
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="font-serif text-xl uppercase tracking-wider">
                    Sivchheng Kheang
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-1">
                    Full-Stack Developer & Designer
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 bg-muted/5 border-y border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {philosophyItems.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center text-primary mb-8">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-medium">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed italic font-serif">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Ethos Section */}
      <section className="border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[900px]">
          {/* Left Side: Ethos & History */}
          <div className="flex-1 px-8 py-32 space-y-40 bg-[#E9EEF5]">
            {/* Ethos */}
            <section className="space-y-12">
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase">Our Ethos</p>
              <div className="space-y-10 text-4xl text-foreground font-serif leading-relaxed max-w-2xl">
                <p>
                  We believe a well-designed space can change how you feel the moment you walk into it. Our job is to understand who you are and what you need — and then build it.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-black/5">
                {ethos.map((item) => (
                  <div key={item.title} className="space-y-4">
                    <h3 className="font-sans text-[10px] font-bold uppercase tracking-widest text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed italic font-serif">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* History */}
            <section className="space-y-12">
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase">History</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-muted-foreground font-serif leading-relaxed text-lg">
                <p>
                  Founded in 2018, SIVCHHENG KHEANG started as a small studio in Phnom Penh focused on getting the most out of modest spaces. Since then, we have grown into a full interior design practice working on homes, boutique commercial spaces, and bespoke residential commissions across Cambodia and Southeast Asia.
                </p>
                <p>
                  We work directly with each client from the first conversation to the final fitting. No two projects are the same, and we keep our process close and personal to make sure every detail is right.
                </p>
              </div>
            </section>

            {/* Presence */}
            <section className="space-y-12 pt-12 border-t border-black/5">
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase">Presence</p>
              <div className="flex flex-wrap gap-12">
                {[
                  { name: 'Instagram', icon: Instagram },
                  { name: 'LinkedIn', icon: Linkedin },
                  { name: 'Pinterest', icon: MessageCircle },
                ].map(link => (
                  <a key={link.name} href="#" className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all">
                    <link.icon className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">{link.name}</span>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right Side: Contact Sidebar */}
          <aside className="w-full lg:w-[500px] bg-[#D8E1EC]/80 backdrop-blur-md px-12 py-32 border-l border-black/5 relative overflow-hidden">
            {/* Ambient decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="sticky top-40 space-y-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-8">Start Here</p>
                <h2 className="text-5xl font-serif font-medium tracking-tight leading-tight text-foreground/90">
                  Send Us a<br />Message.
                </h2>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-12">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'ANONYMOUS', value: formData.name },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'STUDIO@CLIENT.COM', value: formData.email },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative space-y-4"
                  >
                    <Label
                      htmlFor={field.id}
                      className="block font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 group-focus-within:text-primary transition-colors"
                    >
                      {field.label}
                    </Label>
                    <div className="relative">
                      <input
                        id={field.id}
                        required
                        type={field.type}
                        value={field.value}
                        onChange={e => setFormData({ ...formData, [field.id]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent border-b border-black/10 py-4 text-sm font-serif outline-none focus:border-primary transition-all duration-500 placeholder:text-muted-foreground/20"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-700 group-focus-within:w-full" />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group relative space-y-4"
                >
                  <Label className="block font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 group-focus-within:text-primary transition-colors">
                    Brief / Narrative
                  </Label>
                  <div className="relative">
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="TELL US ABOUT YOUR PROJECT OR IDEA..."
                      className="w-full bg-transparent border-b border-black/10 py-4 text-sm font-serif outline-none focus:border-primary transition-all duration-500 resize-none placeholder:text-muted-foreground/20"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-700 group-focus-within:w-full" />
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center gap-3 py-6 bg-primary/10 border border-primary/20 text-primary"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Enquiry Received</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full rounded-none h-20 bg-[#2D2D35] text-white hover:bg-[#1A1A20] shadow-2xl shadow-black/20 hover:shadow-primary/20 transition-all duration-700 font-sans text-[11px] font-bold tracking-[0.3em] uppercase group"
                      >
                        {status === 'submitting' ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              <Separator className="bg-black/5" />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">Studio Location</p>
                <div className="space-y-2">
                  <p className="text-sm font-serif italic text-muted-foreground/80 leading-relaxed">
                    Phnom Penh, Cambodia<br />
                    Singapore City, SG
                  </p>
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-40 px-8 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-12">
            My Mission
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mb-20 leading-tight">
            To build digital experiences that are clean, functional, and
            delightful — one thoughtful line of code at a time.
          </h2>
          <Button
            size="lg"
            onClick={() => navigate("/services")}
            className="rounded-none h-16 px-12 font-sans text-xs tracking-[0.2em] uppercase bg-foreground text-background hover:bg-primary transition-colors"
          >
            View Our Work <ArrowRight className="ml-4 w-4 h-4" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
