import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  language?: string;
  className?: string;
  children?: React.ReactNode;
}

export const CodeBlock = ({ language = "javascript", className, children }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const code = typeof children === "string" ? children : String(children ?? "");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className={cn("my-8 rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md group shadow-2xl", className)}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <span className="ml-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-bold">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40 hover:text-primary hover:bg-primary/5 transition-all active:scale-95"
        >
          {copied ? (
            <>
              <Check size={12} className="text-green-500" />
              <span className="text-green-500">Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code content */}
      <div className="relative group/code">
        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.7",
            background: "transparent",
            fontFamily: "var(--font-mono, JetBrains Mono, monospace)",
          }}
          lineNumberStyle={{
            minWidth: "2.5em",
            paddingRight: "1em",
            color: "rgba(255,255,255,0.1)",
            textAlign: "right",
            userSelect: "none",
          }}
          showLineNumbers={code.split("\n").length > 3}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
