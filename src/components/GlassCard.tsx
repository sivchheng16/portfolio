import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl ${className}`}
        >
            <div className="relative z-10">
                {children}
            </div>
            {/* Subtle reflective glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        </motion.div>
    );
};

export default GlassCard;
