import { useState, useEffect } from "react";

export default function ScrollProgress() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const el = document.documentElement;
            const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
            setWidth(pct);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-[3px] z-[10001]"
            style={{
                width: `${width}%`,
                background: "linear-gradient(135deg, var(--color-accent-1), var(--color-accent-2))",
                boxShadow: "0 0 10px var(--color-accent-1)",
            }}
        />
    );
}