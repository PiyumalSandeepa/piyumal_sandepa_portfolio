import { motion } from "framer-motion";
import { FiDownload, FiUser, FiMail, FiMapPin } from "react-icons/fi";
import { FaCode, FaCertificate, FaMugHot, FaGraduationCap } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolioData";

function CounterCard({ icon, target, label }) {
    const [ref, isVisible] = useScrollReveal();
    return (
        <motion.div
            ref={ref}
            className="bg-dark-card border border-dark-border rounded-2xl p-5 text-center hover:border-accent-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            <div className="text-2xl text-accent-1 mb-2">{icon}</div>
            <h3 className="text-xl font-bold">{isVisible ? target : 0}+</h3>
            <p className="text-xs text-dark-text-secondary">{label}</p>
        </motion.div>
    );
}

export default function About() {
    const [leftRef, leftVisible] = useScrollReveal();
    const [rightRef, rightVisible] = useScrollReveal();

    const infoItems = [
        { icon: <FiUser />, label: "Name", value: personalInfo.name },
        { icon: <FiMail />, label: "Email", value: personalInfo.email },
        { icon: <FiMapPin />, label: "Location", value: personalInfo.location },
        { icon: <FaGraduationCap />, label: "Degree", value: personalInfo.degree },
    ];

    return (
        <section id="about" className="py-20 md:py-28 px-5">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader tag="about" title="About" highlight="Me" />

                <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        ref={leftRef}
                        className="relative max-w-[400px] mx-auto"
                        initial={{ opacity: 0, x: -40 }}
                        animate={leftVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="rounded-2xl overflow-hidden relative">
                            <img
                                src={personalInfo.profileImage}
                                alt="Profile"
                                className="w-full aspect-[4/5] object-cover hover:grayscale-0 grayscale-[20%] transition-all duration-500"
                                loading="lazy"
                            />
                            <div className="absolute -inset-2 border-2 border-accent-1/40 rounded-3xl -z-10" />
                        </div>
                        <div className="absolute -bottom-5 -right-5 btn-gradient p-5 rounded-2xl text-center shadow-lg">
                            <span className="text-3xl font-extrabold block leading-none">{personalInfo.yearsLearning}</span>
                            <span className="text-xs font-medium opacity-90">Years<br />Learning</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        ref={rightRef}
                        initial={{ opacity: 0, x: 40 }}
                        animate={rightVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <CounterCard icon={<FaCode />} target={personalInfo.projectCount} label="Projects" />
                            <CounterCard icon={<FaCertificate />} target={personalInfo.certCount} label="Certificates" />
                            <CounterCard icon={<FaMugHot />} target={personalInfo.coffeeCount} label="Cups of Coffee" />
                        </div>

                        {/* Bio */}
                        {personalInfo.bio.map((p, i) => (
                            <p key={i} className="text-dark-text-secondary text-[0.95rem] mb-4 leading-relaxed">
                                {p}
                            </p>
                        ))}

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                            {infoItems.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 bg-dark-card border border-dark-border rounded-xl"
                                >
                                    <span className="w-9 h-9 btn-gradient rounded-lg flex items-center justify-center text-sm shrink-0">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <span className="text-[0.65rem] text-dark-text-muted uppercase tracking-wider block">
                                            {item.label}
                                        </span>
                                        <span className="text-sm font-medium">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href={personalInfo.resumeUrl} download className="btn-gradient px-7 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                            Download CV <FiDownload />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}