import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 500);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-8 right-8 w-12 h-12 rounded-2xl btn-gradient flex items-center justify-center text-lg z-[9999] shadow-lg transition-all duration-300
        ${show ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-5"}`}
            aria-label="Back to top"
        >
            <FiChevronUp />
        </button>
    );
}