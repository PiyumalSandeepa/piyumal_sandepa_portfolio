import { FiDownload, FiUser, FiMail, FiMapPin } from "react-icons/fi";
import { FaCode, FaCertificate, FaGraduationCap, FaTerminal } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolioData";

const gradientStyle = {
    background: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

export default function About() {
    const [leftRef, leftVisible] = useScrollReveal();
    const [rightRef, rightVisible] = useScrollReveal();

    const stats = [
        { icon: <FaCode />, value: personalInfo.projectCount, label: "Projects" },
        { icon: <FaCertificate />, value: personalInfo.certCount, label: "Certificates" },
        { icon: <FaTerminal />, value: personalInfo.contribution, label: "Contributions" },
    ];

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
                    <div
                        ref={leftRef}
                        className={`relative max-w-[400px] mx-auto transition-all duration-700 ${
                            leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <div className="rounded-2xl overflow-hidden relative">
                            <img
                                src={personalInfo.profileImage}
                                alt="Piyumal Sandeepa"
                                className="w-full aspect-[4/5] object-cover hover:grayscale-0 grayscale-[20%] transition-all duration-500"
                                loading="lazy"
                            />
                            <div className="absolute -inset-2 border-2 border-[#00d4ff]/40 rounded-3xl -z-10" />
                        </div>
                        <div
                            className="absolute -bottom-5 -right-5 p-5 rounded-2xl text-center shadow-lg text-white"
                            style={{ background: "linear-gradient(135deg, #00d4ff, #7b2ff7)" }}
                        >
                            <span className="text-3xl font-extrabold block leading-none">{personalInfo.yearsLearning}</span>
                            <span className="text-xs font-medium opacity-90">Years<br />Learning</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div
                        ref={rightRef}
                        className={`transition-all duration-700 ${
                            rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                    >
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-5 text-center hover:border-[#00d4ff] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]">
                                    <div className="text-2xl text-[#00d4ff] mb-2 flex justify-center">{stat.icon}</div>
                                    <h3 className="text-xl font-bold" style={gradientStyle}>
                                        {stat.value.toLocaleString()}+
                                    </h3>
                                    <p className="text-xs text-[#a0a0b8]">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Bio */}
                        {personalInfo.bio.map((text, i) => (
                            <p key={i} className="text-[#a0a0b8] text-[0.95rem] mb-4 leading-relaxed">{text}</p>
                        ))}

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                            {infoItems.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-xl">
                                    <span
                                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm shrink-0"
                                        style={{ background: "linear-gradient(135deg, #00d4ff, #7b2ff7)" }}
                                    >
                                        {item.icon}
                                    </span>
                                    <div>
                                        <span className="text-[0.65rem] text-[#5a5a72] uppercase tracking-wider block">{item.label}</span>
                                        <span className="text-sm font-medium">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href={personalInfo.resumeUrl}
                            download
                            className="text-white px-7 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(0,212,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                            style={{ background: "linear-gradient(135deg, #00d4ff, #7b2ff7)" }}
                        >
                            Download CV <FiDownload />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}