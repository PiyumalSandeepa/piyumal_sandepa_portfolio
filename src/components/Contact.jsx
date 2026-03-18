import { useState } from "react";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolioData";

const gradientStyle = {
    background: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

export default function Contact() {
    const [leftRef, leftVisible] = useScrollReveal();
    const [rightRef, rightVisible] = useScrollReveal();
    const [status, setStatus] = useState({ type: "", message: "" });
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            setStatus({ type: "success", message: "✅ Message sent! I'll get back to you soon." });
            e.target.reset();
            setSending(false);
            setTimeout(() => setStatus({ type: "", message: "" }), 5000);
        }, 1500);
    };

    const contactCards = [
        { icon: <FiMail />, title: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: <FiPhone />, title: "Phone", value: personalInfo.phone, href: `tel:+94713269622` },
        { icon: <FiMapPin />, title: "Location", value: personalInfo.location },
    ];

    return (
        <section id="contact" className="py-20 md:py-28 px-5">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader tag="contact" title="Get In" highlight="Touch" />

                <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
                    {/* Left Info */}
                    <div
                        ref={leftRef}
                        className={`transition-all duration-700 ${leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        <h3 className="text-2xl font-bold mb-4" style={gradientStyle}>
                            Let's work together!
                        </h3>
                        <p className="text-[#a0a0b8] mb-8 leading-relaxed">
                            I'm actively seeking internship opportunities. Whether you have a position, want to collaborate, or just say hi — my inbox is open!
                        </p>

                        <div className="flex flex-col gap-4 mb-8">
                            {contactCards.map((card, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl hover:border-[#00d4ff] hover:translate-x-2 transition-all duration-300">
                                    <span
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg shrink-0"
                                        style={{ background: "linear-gradient(135deg, #00d4ff, #7b2ff7)" }}
                                    >
                                        {card.icon}
                                    </span>
                                    <div>
                                        <h4 className="text-xs text-[#5a5a72]">{card.title}</h4>
                                        {card.href ? (
                                            <a href={card.href} className="text-sm hover:text-[#00d4ff] transition-colors">{card.value}</a>
                                        ) : (
                                            <span className="text-sm">{card.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {[
                                { icon: <FaGithub />, url: personalInfo.social.github },
                                { icon: <FaLinkedinIn />, url: personalInfo.social.linkedin },
                                { icon: <FaTwitter />, url: personalInfo.social.twitter },
                                { icon: <FaInstagram />, url: personalInfo.social.instagram },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-xl border border-[rgba(255,255,255,0.07)] flex items-center justify-center text-lg text-[#a0a0b8] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300"
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #00d4ff, #7b2ff7)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <form
                        ref={rightRef}
                        onSubmit={handleSubmit}
                        className={`bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-3xl p-8 md:p-10 transition-all duration-700 ${
                            rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                    >
                        <div className="grid sm:grid-cols-2 gap-5 mb-5">
                            <input type="text" name="name" required placeholder="Your Name" className="w-full p-4 bg-[#1a1a28] border-2 border-[rgba(255,255,255,0.07)] rounded-xl text-[#f0f0f5] text-sm focus:border-[#00d4ff] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all duration-300 outline-none" />
                            <input type="email" name="email" required placeholder="Your Email" className="w-full p-4 bg-[#1a1a28] border-2 border-[rgba(255,255,255,0.07)] rounded-xl text-[#f0f0f5] text-sm focus:border-[#00d4ff] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all duration-300 outline-none" />
                        </div>
                        <div className="mb-5">
                            <input type="text" name="subject" required placeholder="Subject" className="w-full p-4 bg-[#1a1a28] border-2 border-[rgba(255,255,255,0.07)] rounded-xl text-[#f0f0f5] text-sm focus:border-[#00d4ff] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all duration-300 outline-none" />
                        </div>
                        <div className="mb-5">
                            <textarea name="message" rows={5} required placeholder="Your Message" className="w-full p-4 bg-[#1a1a28] border-2 border-[rgba(255,255,255,0.07)] rounded-xl text-[#f0f0f5] text-sm resize-y min-h-[120px] focus:border-[#00d4ff] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all duration-300 outline-none" />
                        </div>

                        <button
                            type="submit"
                            disabled={sending}
                            className="w-full text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,212,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.4)] disabled:opacity-60 transition-all duration-300"
                            style={{ background: "linear-gradient(135deg, #00d4ff, #7b2ff7)" }}
                        >
                            {sending ? "Sending..." : <><span>Send Message</span> <FiSend /></>}
                        </button>

                        {status.message && (
                            <p className={`text-center mt-4 text-sm font-medium ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}