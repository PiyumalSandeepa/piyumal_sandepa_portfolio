import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
    const [leftRef, leftVisible] = useScrollReveal();
    const [rightRef, rightVisible] = useScrollReveal();
    const [status, setStatus] = useState({ type: "", message: "" });
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        // Simulate send — replace with EmailJS or Formspree
        setTimeout(() => {
            setStatus({ type: "success", message: "✅ Message sent! I'll get back to you soon." });
            e.target.reset();
            setSending(false);
            setTimeout(() => setStatus({ type: "", message: "" }), 5000);
        }, 1500);
    };

    const contactCards = [
        { icon: <FiMail />, title: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: <FiPhone />, title: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: <FiMapPin />, title: "Location", value: personalInfo.location },
    ];

    const socials = [
        { icon: <FaGithub />, url: personalInfo.social.github },
        { icon: <FaLinkedinIn />, url: personalInfo.social.linkedin },
        { icon: <FaTwitter />, url: personalInfo.social.twitter },
        { icon: <FaInstagram />, url: personalInfo.social.instagram },
    ];

    return (
        <section id="contact" className="py-20 md:py-28 px-5">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader tag="contact" title="Get In" highlight="Touch" />

                <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
                    {/* Info */}
                    <motion.div
                        ref={leftRef}
                        initial={{ opacity: 0, x: -40 }}
                        animate={leftVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 gradient-text">Let's work together!</h3>
                        <p className="text-dark-text-secondary mb-8 leading-relaxed">
                            I'm actively seeking internship opportunities. Whether you have a position, want to collaborate, or just say hi — my inbox is open!
                        </p>

                        <div className="flex flex-col gap-4 mb-8">
                            {contactCards.map((card, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-4 bg-dark-card border border-dark-border rounded-2xl hover:border-accent-1 hover:translate-x-2 transition-all duration-300"
                                >
                                    <span className="w-12 h-12 btn-gradient rounded-xl flex items-center justify-center text-lg shrink-0">
                                        {card.icon}
                                    </span>
                                    <div>
                                        <h4 className="text-xs text-dark-text-muted">{card.title}</h4>
                                        {card.href ? (
                                            <a href={card.href} className="text-sm hover:text-accent-1 transition-colors">
                                                {card.value}
                                            </a>
                                        ) : (
                                            <span className="text-sm">{card.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-xl border border-dark-border flex items-center justify-center text-lg text-dark-text-secondary hover:text-white hover:bg-gradient-to-br hover:from-accent-1 hover:to-accent-2 hover:border-transparent hover:-translate-y-1 transition-all duration-300"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        ref={rightRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        animate={rightVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-10"
                    >
                        <div className="grid sm:grid-cols-2 gap-5 mb-5">
                            <FormField type="text" name="name" label="Your Name" />
                            <FormField type="email" name="email" label="Your Email" />
                        </div>
                        <FormField type="text" name="subject" label="Subject" />
                        <FormField type="textarea" name="message" label="Your Message" />

                        <button
                            type="submit"
                            disabled={sending}
                            className="w-full btn-gradient py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                            {sending ? (
                                <>Sending... <span className="animate-spin">⏳</span></>
                            ) : (
                                <>Send Message <FiSend /></>
                            )}
                        </button>

                        {status.message && (
                            <p className={`text-center mt-4 text-sm font-medium ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                                {status.message}
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function FormField({ type, name, label }) {
    return (
        <div className="relative mb-5">
            {type === "textarea" ? (
                <textarea
                    name={name}
                    required
                    placeholder=" "
                    rows={5}
                    className="form-input w-full p-4 bg-dark-tertiary border-2 border-dark-border rounded-xl text-dark-text text-sm resize-y min-h-[120px] focus:border-accent-1 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all duration-300"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    required
                    placeholder=" "
                    className="form-input w-full p-4 bg-dark-tertiary border-2 border-dark-border rounded-xl text-dark-text text-sm focus:border-accent-1 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all duration-300"
                />
            )}
            <label className="form-label absolute top-4 left-4 text-dark-text-muted text-sm pointer-events-none bg-dark-tertiary px-1.5 transition-all duration-300">
                {label}
            </label>
        </div>
    );
}