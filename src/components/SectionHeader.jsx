import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function SectionHeader({ tag, title, highlight }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <span className="font-mono text-sm text-accent-1 tracking-widest">
                &lt; {tag} &gt;
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                {title} <span className="gradient-text">{highlight}</span>
            </h2>
            <div
                className="w-16 h-1 mx-auto rounded-full"
                style={{ background: "linear-gradient(135deg, var(--color-accent-1), var(--color-accent-2))" }}
            />
        </motion.div>
    );
}