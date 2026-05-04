import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GAMES, Game } from "../constants";
import { AntigravityCard } from "../components/AntigravityCard";
import {
  Search,
  Grid3X3,
  Archive,
  Cpu,
  Sparkles,
  X,
  Terminal,
  Monitor,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRequireAuth } from "../hooks/useRequireAuth";
import NavbarMobile from "@/components/NavbarMobile";
import { useLayout } from "../context/LayoutContext";
import { cn } from "@/lib/utils";

export default function GamePortal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState<Game[]>(GAMES);
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [isHoveringClose, setIsHoveringClose] = useState(false);
  const { requireAuth } = useRequireAuth();
  const { isSidebarCollapsed } = useLayout();

  useEffect(() => {
    setFilteredGames(
      GAMES.filter(
        (game) =>
          game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          game.category.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeGame) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGame]);

  const handlePlay = requireAuth((game: Game) => {
    setActiveGame(game);
    document.body.style.overflow = "hidden";
  });

  const handleClose = () => {
    setActiveGame(null);
    document.body.style.overflow = "auto";
  };

  const handleDownload = requireAuth((url: string) => {
    window.open(url, "_blank");
  });

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-12  relative overflow-hidden">
      <NavbarMobile />
      {/* Background Mesh Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] right-[10%] w-[50vw] h-[50vw] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] left-[0%] w-[40vw] h-[40vw] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-primary/40" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Games Archive
            </span>
            <span className="w-12 h-[1px] bg-primary/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-medium tracking-tighter text-foreground mb-8 md:mb-12 uppercase text-gradient"
          >
            THE <span className="italic font-bold">VAULT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground font-sans italic max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/20 pl-6 md:pl-8 inline-block text-left"
          >
            "A collection of games I've created. There are games that give you extra skills and computer thinking as well as give you a fun game to play."
          </motion.p>
        </div>

        {/* Isometric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game, idx) => (
              <AntigravityCard
                key={game.id}
                game={game}
                index={idx}
                onPlay={handlePlay}
                onDownload={handleDownload}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 glass-panel rounded-[40px]"
          >
            <Cpu size={64} className="text-primary/20 mx-auto mb-8 animate-pulse" />
            <p className="text-muted-foreground font-sans italic text-2xl">
              Terminal error: No systems found matching your query.
            </p>
          </motion.div>
        )}
      </div>

      {/* Footer Branding */}
      <div className="container mx-auto px-6  pt-20 border-t border-white/5 flex flex-col items-center">
        <Sparkles className="w-6 h-6 text-primary mb-8 animate-pulse" />
        <div className="font-mono text-primary text-[10px] font-bold tracking-[1em] uppercase opacity-40">
          SIVCHHENG KHEANG
        </div>
      </div>

      {/* Game Overlay */}
      <AnimatePresence>
        {activeGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed inset-0 z-[100] bg-background/90 backdrop-blur-[60px] flex flex-col transition-all duration-500 ease-in-out",
              isSidebarCollapsed ? "lg:left-[80px]" : "lg:left-[280px]"
            )}
          >
            {/* Sidebar Separation Block/Glow */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />

            {/* Top Interactive Zone for Close Button - Smaller Centered Notch */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 z-[110] flex justify-center items-start pt-4 pointer-events-none"
              onMouseEnter={() => setIsHoveringClose(true)}
              onMouseLeave={() => setIsHoveringClose(false)}
            >
              {/* Invisible trigger area - Focused in the center */}
              <div className="absolute inset-0 pointer-events-auto rounded-b-3xl" />

              <motion.button
                onClick={handleClose}
                animate={{
                  opacity: isHoveringClose ? 1 : 0,
                  y: isHoveringClose ? 0 : -15,
                  scale: isHoveringClose ? 1 : 0.8
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative z-[120] pointer-events-auto w-12 h-12 rounded-full glass-panel flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors shadow-2xl shadow-black/50"
              >
                <X className="w-6 h-6" />
                {/* Subtle label that appears beneath the button
                <div className="absolute top-14 font-mono text-[8px] font-bold tracking-[0.4em] uppercase whitespace-nowrap opacity-40">
                  Exit Session
                </div> */}
              </motion.button>
            </div>

            {/* Frame Container */}
            <div className="flex-1 relative flex items-center justify-center  ">
              {/* Internal Refraction Glows */}
              <div className="absolute top-0 left-0 w-full h-full bg-primary/[0.02] blur-[150px] pointer-events-none" />

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full glass-panel overflow-hidden shadow-[0_64px_128px_-16px_rgba(0,0,0,0.5)] relative rounded-[24px] md:rounded-[40px] border-white/5"
              >
                <iframe
                  src={activeGame.iframeUrl}
                  className="w-full h-full border-none"
                  title={activeGame.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </div>

            {/* Overlay Footer */}
            <div className=" relative h-20 glass-panel border-t border-white/5 px-10 flex items-center justify-between bg-background/50 backdrop-blur-xl">
              <div className="flex items-center gap-8 text-[10px] font-mono font-bold uppercase tracking-[0.1em] text-foreground/30">
                <div className="flex items-center gap-3">
                  <Monitor className="w-4 h-4" />
                  <span className="hidden sm:inline">TERMINATE SESSION_ESC</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Button
                  onClick={() => handleDownload(activeGame.appImageUrl)}
                  variant="outline"
                  className="h-10 px-6 rounded-full border-primary/20 hover:bg-primary/10 text-primary font-mono text-[9px] font-bold tracking-widest uppercase transition-all flex items-center gap-3 group shadow-lg shadow-primary/5"
                >
                  <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  <span className="hidden md:block">Download (.AppImage)</span>
                </Button>
                <div className="h-8 w-px bg-white/5 hidden md:block" />


              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
}
