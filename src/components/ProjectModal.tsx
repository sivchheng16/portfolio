import React from "react";
import { X } from "lucide-react";
import { Project } from "../constants";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="relative w-full max-w-4xl rounded-xl bg-background border border-border/40 shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border border-border/40 bg-background/90 flex items-center justify-center text-foreground hover:bg-muted transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-72 w-full object-cover lg:h-full"
          />
          <div className="p-8 space-y-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {project.category} • {project.year}
            </p>
            <h2 className="text-3xl font-serif font-bold">{project.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.details}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="mt-4 inline-flex items-center gap-2 rounded-none border border-primary bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-background hover:bg-primary/90 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
