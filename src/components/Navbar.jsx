import { useState, useEffect } from "react";
import { FiMoon, FiSun, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = document.querySelectorAll("section[id]");
            let current = "home";
            sections.forEach((sec) => {
                if (window.scrollY >= sec.offsetTop - 150) {
                    current = sec.id;
                }
            });
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 ${
            scrolled
                ? "py-2.5 bg-[rgba(255,255,255,0.04)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] shadow-lg"
                : "py-4"
        }`}>
            <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
                <a href="#home" className="font-mono text-xl font-bold z-10">
                    <span className="bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] bg-clip-text text-transparent">
                        &lt; {personalInfo.initials} /&gt;
                    </span>
                </a>

                <div className={`${
                    menuOpen
                        ? "fixed top-0 right-0 w-[280px] h-screen flex flex-col pt-24 px-8 bg-[#111118] border-l border-[rgba(255,255,255,0.07)] z-[1]"
                        : "hidden"
                } md:relative md:flex md:w-auto md:h-auto md:pt-0 md:px-0 md:bg-transparent md:border-0`}>
                    <ul className="flex flex-col md:flex-row gap-1 md:gap-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        activeSection === link.href.slice(1)
                                            ? "text-[#00d4ff]"
                                            : "text-[#a0a0b8] hover:text-[#f0f0f5]"
                                    }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-3 z-10">
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-lg flex items-center justify-center border border-[rgba(255,255,255,0.07)] text-[#a0a0b8] hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300"
                    >
                        {theme === "dark" ? <FiMoon size={18} /> : <FiSun size={18} />}
                    </button>
                    <a
                        href={personalInfo.resumeUrl}
                        download
                        className="bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-[0_4px_20px_rgba(0,212,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <FiDownload size={14} />
                        <span className="hidden sm:inline">Resume</span>
                    </a>
                    <button
                        className="md:hidden z-10 p-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}