import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Compass,
  Home as HomeIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PROJECTS } from '../constants';

const services = [
  { name: 'Interior Architecture', icon: Layout, detail: 'Space planning and structural refinement.' },
  { name: 'Bespoke Furniture', icon: Paintbrush, detail: 'Custom pieces designed for your space.' },
  { name: 'Conceptual Design', icon: Compass, detail: 'Visionary styling and material selection.' },
  { name: 'Residential Luxury', icon: HomeIcon, detail: 'Creating sanctuaries for modern living.' },
];

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero — minimal, high-impact */}
      <section className="relative min-h-screen flex items-center px-8 pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[10%] right-[15%] w-[35vw] h-[35vw] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-primary/5 blur-[150px] rounded-full" />
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-8">
                Based in Southeast Asia / Global Perspective
              </p>
              <h1 className="text-[10vw] lg:text-[7vw] font-serif font-medium leading-[0.9] tracking-tight text-foreground mb-12">
                Bespoke
                <br />
                Environments.
              </h1>
              <div className="flex flex-col sm:flex-row items-start gap-10 max-w-2xl">
                <p className="text-lg text-muted-foreground/80 font-serif leading-relaxed italic flex-1">
                  "We don't just design spaces; we curate atmospheric experiences that resonate with the human spirit."
                </p>
                <div className="shrink-0 flex flex-col gap-4">
                  <Button asChild size="lg" className="rounded-none h-14 px-8 bg-foreground text-background hover:bg-primary transition-colors duration-500 font-sans text-xs tracking-[0.2em] uppercase">
                    <Link to="/library">
                      View Collection
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
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
          </motion.div>
        </div>
      </section>

      {/* Vision — asymmetric layout */}
      <section id="about" className="py-32 px-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6">
              Our Vision
            </p>
            <h2 className="text-5xl font-serif font-medium tracking-tight leading-[1.1]">
              Refining the
              <br />
              Art of Living.
            </h2>
          </div>
          <div className="space-y-12">
            <p className="text-2xl text-muted-foreground font-serif leading-relaxed max-w-2xl">
              KEANG & CO. was founded on the principle that luxury is found in the meticulous balance of materiality, light, and silence. We create residences and commercial spaces that are both monumental and intimate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-foreground">Materiality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">We source rare stones, ancient woods, and custom textiles to create tactile narratives that age gracefully.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-foreground">Spatial Flow</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Light is our primary medium. We manipulate architecture to choreograph natural light throughout the day.</p>
              </div>
            </div>
            <Separator className="bg-border/20" />
            <div className="flex items-center gap-8 py-6">
              <div className="w-20 h-20 rounded-none bg-muted overflow-hidden grayscale border border-border/20">
                <img
                  src="https://picsum.photos/seed/sivechheng/400/400"
                  alt="Lead Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif text-xl">Sivechheng Kheang</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-1">Lead Architect & Visionary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight — List style */}
      <section id="projects" className="py-32 px-8 border-t border-border/20 bg-muted/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6">Masterworks</p>
              <h2 className="text-6xl font-serif font-medium tracking-tight">
                Selected Projects.
              </h2>
            </div>
            <Button variant="link" asChild className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary p-0 h-auto">
              <Link to="/library">Explore All Works <ArrowRight className="ml-2 w-3 h-3" /></Link>
            </Button>
          </div>

          <div className="space-y-0">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                className="border-t border-border/20 group"
              >
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="w-full text-left py-12 grid grid-cols-[80px_1fr_auto] md:grid-cols-[100px_1fr_200px_auto] gap-8 items-center"
                >
                  <span className="font-serif text-muted-foreground/30 text-2xl">0{index + 1}</span>
                  <div>
                    <h3 className="text-3xl font-serif font-medium tracking-tight group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-xs font-sans tracking-[0.1em] text-muted-foreground uppercase mt-2">
                      {project.category} / {project.year}
                    </p>
                  </div>
                  <div className="hidden md:flex flex-wrap gap-2 justify-end">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground/60 border border-border/40 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 border border-border/40 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-background">
                    {expandedProject === project.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-16 pl-[100px] grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-16">
                        <div className="space-y-8">
                          <p className="text-xl text-muted-foreground font-serif leading-relaxed italic">{project.description}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{project.details}</p>
                          <Button variant="outline" className="rounded-none font-sans text-[10px] font-bold tracking-[0.2em] uppercase h-12 px-8">
                            View Study <ExternalLink className="ml-3 w-3 h-3" />
                          </Button>
                        </div>
                        <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-border/20">
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                          />
                        </div>
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

      {/* Services — minimalist cards */}
      <section className="py-32 px-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="max-w-md">
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6">Disciplines</p>
              <h2 className="text-5xl font-serif font-medium tracking-tight leading-tight mb-8">
                A Holistic Approach
                <br />
                to Spatial Design.
              </h2>
              <p className="text-muted-foreground font-serif italic text-lg mb-12">
                "We provide end-to-end guidance from structural concept to the final textile selection."
              </p>
              <Button variant="ghost" className="p-0 h-auto font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors">
                Collaborate with us →
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/20 border border-border/20">
              {services.map(service => (
                <div key={service.name} className="bg-background p-10 flex flex-col justify-between hover:bg-muted/5 transition-colors group">
                  <div className="w-12 h-12 border border-border/40 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all duration-500 mb-12">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-3">{service.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA — atmospheric */}
      <section className="py-40 px-8 border-t border-border/20 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 blur-[150px] -z-10 rounded-full" />
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-10">Start a Conversation</p>
          <h2 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter mb-16 px-4">
            Let's build your
            <br />
            vision together.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="rounded-none h-16 px-12 bg-foreground text-background hover:bg-primary transition-colors duration-500 font-sans text-[11px] font-bold tracking-[0.2em] uppercase">
              Inquire / Project Brief
            </Button>
            <Button variant="outline" className="rounded-none h-16 px-12 font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:border-foreground transition-all duration-500">
              Studio Locations
            </Button>
          </div>
        </div>
      </section>

      {/* Social / Info Footer Minimal */}
      <footer className="py-12 px-8 border-t border-border/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted-foreground/60">© 2024 KEANG & CO. Architecture & Interiors</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted-foreground/60 hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted-foreground/60 hover:text-primary transition-colors">Pinterest</a>
            <a href="#" className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted-foreground/60 hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
