import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Library, User, Layout, ArrowRight, Layers, Terminal, Cpu, Zap, Globe, Compass, Square } from 'lucide-react';

const directory = [
  {
    title: 'Primary Archives',
    links: [
      { name: '01 Home Portal', path: '/', icon: Home, desc: 'Editorial headlines and atmospheric overview.' },
      { name: '02 Our Portfolio', path: '/library', icon: Library, desc: 'Curated collection of residential and commercial commissions.' },
      { name: '03 The Collective', path: '/author', icon: User, desc: 'Our philosophy, history, and lead visionary.' },
    ],
  },
  {
    title: 'Spatial Disciplines',
    links: [
      { name: 'Architecture', path: '/#services', icon: Globe, desc: 'Structural refinement and landscape integration.' },
      { name: 'Interior Design', path: '/#services', icon: Layers, desc: 'Atmospheric curation and material narratives.' },
      { name: 'Bespoke Objects', path: '/#services', icon: Compass, desc: 'Custom furniture and artisanal fixtures.' },
    ],
  },
  {
    title: 'Connection',
    links: [
      { name: 'Inquire', path: '/author#contact', icon: MessageCircle, desc: 'Commence a dialogue regarding your next commission.' },
      { name: 'Social Narratives', path: '/author#social', icon: Instagram, desc: 'Follow our daily evolution on digital channels.' },
    ],
  },
];

import { MessageCircle, Instagram } from 'lucide-react';

export default function Pages() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <section className="px-8 py-20 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-6">Directory</p>
          <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight uppercase leading-[0.9]">
            Keang <span className="text-muted-foreground/20">&</span> Co.
            <br />
            Index.
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {directory.map((section) => (
            <div key={section.title} className="space-y-12">
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-muted-foreground/40 uppercase pb-6 border-b border-border/10">
                {section.title}
              </p>
              <div className="space-y-12">
                {section.links.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex flex-col items-start gap-4 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-8 h-8 border border-border/20 flex items-center justify-center shrink-0 text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all duration-700">
                        <link.icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-serif text-2xl group-hover:text-primary transition-colors duration-500 flex-1">
                        {link.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground/20 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700" />
                    </div>
                    <p className="text-sm text-muted-foreground font-serif italic leading-relaxed pl-12">
                      {link.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Accent */}
      <div className="max-w-7xl mx-auto px-8 mt-32">
        <div className="aspect-[21/9] bg-muted/10 grayscale border border-border/10 overflow-hidden relative group">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Studio Atmosphere"
            className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-1000 scale-105 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-sans text-[10px] font-bold tracking-[0.5em] text-foreground uppercase border border-foreground/20 px-8 py-4 backdrop-blur-md">Atmosphere</span>
          </div>
        </div>
      </div>
    </div>
  );
}
