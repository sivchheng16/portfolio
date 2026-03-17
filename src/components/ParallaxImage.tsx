import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = '', speed = 0.2 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y, scale: 1.1 }}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default ParallaxImage;
