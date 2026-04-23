import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { Lesson } from "../constants";
import { cn } from "@/lib/utils";
import { ArrowLeft, Clock, Menu, PlayCircle } from "lucide-react";
import { TOPICS } from "../constants";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";


interface LessonSidebarProps {
  lessons: Lesson[];
  activeLessonId: string | null;
  onLessonSelect: (id: string) => void;
  className?: string;
}

export const LessonSidebar = ({ lessons, activeLessonId, onLessonSelect, className }: LessonSidebarProps) => {
  const activeRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const { topicId } = useParams<{ topicId: string }>();
  const topic = TOPICS.find(t => t.id === topicId) || TOPICS[0];


  // 
  // const { topicId, moduleId } = useParams<{ topicId: string; moduleId: string }>();
  // const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // const topic = TOPICS.find((t) => t.id === topicId);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLessonSelect = (_id: string) => {
    // Navigation to /document/:topicId/:moduleId is handled inside LessonSidebar
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [activeLessonId]);

  const handleSelect = (lessonId: string) => {
    onLessonSelect(lessonId);
    if (topicId) {
      navigate(`/document/${topicId}/${lessonId}`);
    }
  };

  return (
    <aside className={cn("flex flex-col  ", className)}>
      {/* Active Topic Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        key={topic.id}
        className="flex flex-row md:flex-row md:items-center justify-start w-full  glass-panelover flow-hidden group shrink-0 py-6 gap-2 items-center"
      >
        {/* <div className={`absolute inset-0 bg-gradient-to-tr ${topic.gradient} opacity-20`} /> */}
        <div className="h-full w-[3rem] ">
          <img
            src={topic.logo}
            alt={topic.title}
            className="object-cover w-full h-full  z-10 transition-all duration-1000"
          />
        </div>
        <h1 className={`text-2xl md:text-4xl font-sans font-semibold tracking-tighter leading-[0.8]  uppercase ${topic.textgradient} `}>
          {topic.title}
        </h1>
      </motion.div>





      <div className="flex flex-col gap-2 ">
        {lessons.map((lesson, idx) => {
          const isActive = activeLessonId === lesson.id;
          return (
            <button
              key={lesson.id}
              ref={isActive ? activeRef : null}
              onClick={() => handleSelect(lesson.id)}
              className={cn(
                "group relative text-left p-3 rounded-2xl transition-all duration-300 border border-transparent",
                isActive ? "bg-primary/10 border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]" : "hover:bg-white/5"
              )}
            >
              <div className="flex gap-4 relative z-10 items-center ">
                <span className={cn(
                  "font-mono text-xs font-bold transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground/30 group-hover:text-primary/50"
                )}>
                  {(idx + 1).toString().padStart(2, '0')}
                </span>

                <div className="flex-1">
                  <h4 className={cn(
                    "font-sans text-xs font-medium mb-1 transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {lesson.title}
                  </h4>
                  {/* <div className="flex items-center gap-3 text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground/40 group-hover:text-primary/40 transition-colors">
                    <Clock size={12} />
                    {lesson.duration}
                  </div> */}
                </div>

                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-primary"
                  >
                    <PlayCircle size={18} fill="currentColor" className="opacity-20" />
                  </motion.div>
                )}
              </div>

              {
                isActive && (
                  <motion.div
                    layoutId="activeLesson"
                    className="absolute inset-y-2 left-0 w-[3px] bg-primary rounded-r-full shadow-[0_0_8px_var(--primary)]"
                  />
                )
              }
            </button>
          );
        })}
      </div>
      {/* Mobile Sidebar Trigger */}
      {/* <div className="lg:hidden top-50 z-40 h-[72px] flex items-center mr-5">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="absolute top-40 bg-background border-r border-white/5 p-0 w-80">
            <SheetHeader className="p-6 border-b border-white/5">
              <SheetTitle className="text-left font-sans italic">Course Navigator</SheetTitle>
            </SheetHeader>
            <div className="py-8 px-4 text-foreground overflow-y-auto h-[calc(100vh-80px)] custom-scrollbar" data-lenis-prevent>
              <LessonSidebar
                lessons={topic?.lessons || []}
                activeLessonId={activeLessonId}
                onLessonSelect={(id) => {
                  handleLessonSelect(id);
                  setIsSidebarOpen(false);
                }}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div> */}

    </aside >
  );
};
