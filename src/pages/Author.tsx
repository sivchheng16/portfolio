import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail, ExternalLink, Send, Loader2, CheckCircle2, AlertCircle,
  Instagram, Twitter, Linkedin, MessageCircle, Square, ArrowRight
} from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

const philosophy = [
  { title: 'Material Honesty', desc: 'Precious metals, raw stone, and reclaimed wood in their purest forms.' },
  { title: 'Spatial Silence', desc: 'Designing for the absence of noise and the presence of atmosphere.' },
  { title: 'Luminous Architecture', desc: 'Choreographing natural light to define the passing of time.' },
];

export default function Author() {
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
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="px-8 py-20 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-12">
            <div className="w-32 h-32 border border-border/20 grayscale overflow-hidden">
              <img
                src="https://picsum.photos/seed/sivechheng/400/400"
                alt="Lead Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-6">The Collective</p>
              <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight uppercase leading-[0.9]">
                Keang & Co.
              </h1>
              <p className="text-muted-foreground mt-8 text-lg font-serif italic">Architecture & Atmospheric Interiors</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-24">
        <div className="space-y-32">
          {/* Bio Sections */}
          <section className="space-y-12">
            <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase">Our Ethos</p>
            <div className="space-y-10 text-3xl text-foreground font-serif leading-relaxed max-w-2xl">
              <p>
                We believe that architecture is a medium for emotional resonance. My role is to bridge the gap between structural necessity and spiritual fulfillment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-border/10">
              {philosophy.map((item) => (
                <div key={item.title} className="space-y-4">
                  <h3 className="font-sans text-[10px] font-bold uppercase tracking-widest text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic font-serif">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Bio */}
          <section className="space-y-12">
            <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-primary uppercase">History</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-muted-foreground font-serif leading-relaxed text-lg">
              <p>
                Founded in 2018, Keang & Co. began as a small experimental studio focusing on the interplay of raw materiality and high-precision craftsmanship. Today, we manage a diverse portfolio of luxury residential and avant-garde commercial commissions across Southeast Asia.
              </p>
              <p>
                Every commission is approached as a singular work of art. We engage in a deep dialogue with our clients to uncover the subconscious needs of their daily rituals, translating those insights into physical space.
              </p>
            </div>
          </section>

          {/* Social Presence */}
          <section className="space-y-12 pt-12 border-t border-border/10">
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

        {/* Contact Sidebar */}
        <aside>
          <div className="sticky top-40 bg-muted/10 border border-border/10 p-12 space-y-12">
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-6">Commence</p>
              <h2 className="text-3xl font-serif font-medium tracking-tight">Project Inquiry.</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Full Name</Label>
                <input
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="ANONYMOUS"
                  className="w-full bg-transparent border-b border-border/20 py-3 text-sm font-serif outline-none focus:border-primary transition-all placeholder:text-muted-foreground/20"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Email Address</Label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="STUDIO@CLIENT.COM"
                  className="w-full bg-transparent border-b border-border/20 py-3 text-sm font-serif outline-none focus:border-primary transition-all placeholder:text-muted-foreground/20"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Brief / Narrative</Label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="TELL US ABOUT YOUR VISION..."
                  className="w-full bg-transparent border-b border-border/20 py-3 text-sm font-serif outline-none focus:border-primary transition-all resize-none placeholder:text-muted-foreground/20"
                />
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Enquiry Received</span>
                  </motion.div>
                ) : (
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full rounded-none h-14 bg-foreground text-background hover:bg-primary transition-all duration-500 font-sans text-[10px] font-bold tracking-[0.2em] uppercase"
                  >
                    {status === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send Message'}
                  </Button>
                )}
              </AnimatePresence>
            </form>

            <Separator className="bg-border/10" />

            <div className="space-y-4">
              <p className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Studio Location</p>
              <p className="text-sm font-serif italic text-muted-foreground">Phnom Penh, Cambodia<br />Singapore City, SG</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
