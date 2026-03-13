import { personalInfo } from "../data/portfolioData";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { name: "GitHub", href: personalInfo.social.github },
        { name: "LinkedIn", href: personalInfo.social.linkedin },
        { name: "Twitter", href: personalInfo.social.twitter },
        { name: "Instagram", href: personalInfo.social.instagram },
    ];

    return (
        <footer className="bg-dark-secondary border-t border-dark-border pt-16">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 pb-10 border-b border-dark-border">
                    <div>
                        <a href="#home" className="font-mono text-2xl font-bold">
                            <span className="gradient-text">&lt; {personalInfo.initials} /&gt;</span>
                        </a>
                        <p className="text-dark-text-secondary mt-3 text-sm">
                            Building digital experiences that matter.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
                        {quickLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-dark-text-secondary text-sm py-1 hover:text-accent-1 hover:translate-x-1 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-4">Social</h4>
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-dark-text-secondary text-sm py-1 hover:text-accent-1 hover:translate-x-1 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="py-6 text-center text-xs text-dark-text-muted">
                    © {year} {personalInfo.name}. Crafted with{" "}
                    <FaHeart className="inline text-accent-1 mx-1" /> and lots of ☕
                </div>
            </div>
        </footer>
    );
}