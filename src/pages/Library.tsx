import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, SearchX, Compass, Layout, Home as HomeIcon, Star } from 'lucide-react';
import { PROJECTS, Project } from '../constants';
import { ProjectCard } from '../components/ProjectComponents';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Retail'];

export default function Library({
  favorites,
  toggleFavorite,
  setViewingProject,
}: {
  favorites: string[];
  recentlyPlayed: string[];
  toggleFavorite: (id: string, e: React.MouseEvent) => void;
  setViewingProject: (project: Project) => void;
  handleDownload: (project: Project) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-6 flex items-center gap-3">
                <Star className="w-3 h-3 fill-primary" /> Curated Excellence
              </p>
              <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight uppercase leading-[0.9]">
                Portfolio.
              </h1>
              <p className="text-muted-foreground mt-8 max-w-lg text-lg font-serif italic leading-relaxed">
                Exploring the harmony between structure and atmosphere across our latest residential and commercial commissions.
              </p>
            </motion.div>
            <div className="flex flex-col gap-6 text-muted-foreground shrink-0 border-l border-border/20 pl-8">
              <div className="flex items-center gap-4">
                <Layout className="w-4 h-4 text-primary" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest">Spatial Architecture</span>
              </div>
              <div className="flex items-center gap-4">
                <Compass className="w-4 h-4 text-primary" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest">Material Narrative</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="px-8 py-8 border-y border-border/20 sticky top-24 z-30 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 ${selectedCategory === cat
                    ? 'text-foreground border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="SEARCH PROJECTS..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-8 h-10 bg-transparent border-none border-b border-border/40 rounded-none font-sans text-[10px] uppercase tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-all pb-1"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* All Projects */}
        <section>
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              {selectedCategory === 'All' ? 'All Commissions' : selectedCategory}{' '}
              <span className="text-muted-foreground/40 font-serif text-sm ml-2">({filteredProjects.length})</span>
            </h2>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="py-32 flex flex-col items-center justify-center text-center gap-6">
              <div className="w-20 h-20 border border-border/20 flex items-center justify-center">
                <SearchX className="w-8 h-8 text-muted-foreground/30" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">No results found</h3>
                <p className="text-muted-foreground font-serif italic">
                  No commissions matching <strong>"{searchQuery}"</strong>
                  {selectedCategory !== 'All' && <> in <strong>{selectedCategory}</strong></>}.
                </p>
              </div>
              <Button
                variant="outline"
                className="rounded-none font-sans text-[10px] font-bold tracking-widest uppercase h-12 px-8 mt-4"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              >
                Reset Exploration
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isFavorite={favorites.includes(project.id)}
                  onToggleFavorite={toggleFavorite}
                  onViewDetails={setViewingProject}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
