import { FiArrowRight, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import ParticleCanvas from "./ParticleCanvas";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { personalInfo, typingPhrases } from "../data/portfolioData";

export default function Hero() {
    const typedText = useTypingEffect(typingPhrases);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 px-5">
            <ParticleCanvas />

            <div className="relative z-10 text-center max-w-[800px] animate-[fadeInUp_0.8s_ease_both]">
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-[rgba(255,255,255,0.04)] backdrop-blur-lg border border-[rgba(255,255,255,0.08)] rounded-full text-sm text-[#00d4ff] font-medium mb-6">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Available for Internship
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] bg-clip-text text-transparent">
                        {personalInfo.name}
                    </span>
                </h1>

                {/* Typed */}
                <div className="text-lg sm:text-xl md:text-2xl text-[#a0a0b8] mb-5">
                    I'm a{" "}
                    <span className="text-[#00d4ff] font-semibold">
                        {typedText}
                        <span className="animate-[blink_0.7s_step-end_infinite]">|</span>
                    </span>
                </div>

                {/* Description - personalized */}
                <p className="text-base text-[#a0a0b8] max-w-[620px] mx-auto mb-8 leading-relaxed">
                    Computer Engineering undergraduate at{" "}
                    <span className="text-[#00d4ff] font-medium">University of Ruhuna</span>{" "}
                    passionate about full-stack development, IoT, and DevOps.
                    I build real-world applications with{" "}
                    <span className="text-[#00d4ff] font-medium">React, Spring Boot, Node.js</span>{" "}
                    and love solving complex problems with clean code.
                </p>

                {/* CTA */}
                <div className="flex gap-4 justify-center flex-wrap mb-10">
                    <a
                        href="#projects"
                        onClick={(e) => scrollTo(e, "#projects")}
                        className="bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] text-white px-7 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-[0_4px_20px_rgba(0,212,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        View My Work <FiArrowRight />
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollTo(e, "#contact")}
                        className="px-7 py-3 rounded-xl font-semibold border-2 border-[rgba(255,255,255,0.07)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-300 flex items-center gap-2"
                    >
                        Get In Touch <FiSend />
                    </a>
                </div>

                {/* Social */}
                <div className="flex gap-4 justify-center">
                    {[
                        { icon: <FaGithub />, url: personalInfo.social.github },
                        { icon: <FaLinkedinIn />, url: personalInfo.social.linkedin },
                        { icon: <FaEnvelope />, url: `mailto:${personalInfo.email}` },
                    ].map((s, i) => (
                        <a
                            key={i}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-xl border border-[rgba(255,255,255,0.07)] flex items-center justify-center text-lg text-[#a0a0b8] hover:text-[#00d4ff] hover:border-[#00d4ff] hover:-translate-y-1 transition-all duration-300"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 hidden md:flex animate-bounce">
                <div className="w-[26px] h-[42px] border-2 border-[#5a5a72] rounded-[14px] flex justify-center pt-2">
                    <div className="w-[3px] h-2 bg-[#00d4ff] rounded-full animate-[scrollWheel_1.5s_ease-in-out_infinite]" />
                </div>
                <span className="text-[0.65rem] text-[#5a5a72] uppercase tracking-[2px]">Scroll Down</span>
            </div>
        </section>
    );
}