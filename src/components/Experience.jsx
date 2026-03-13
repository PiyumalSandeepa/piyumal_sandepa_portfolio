import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaBriefcase, FaGraduationCap, FaLaptopCode, FaBuilding,
    FaGithub, FaUniversity, FaAward, FaSchool
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { experienceData, educationData } from "../data/portfolioData";

const iconMap = {
    laptop: FaLaptopCode, building: FaBuilding, github: FaGithub,
    university: FaUniversity, award: FaAward, school: FaSchool,
};

function TimelineItem({ item, index }) {
    const [ref, isVisible] = useScrollReveal();
    const Icon = iconMap[item.icon] || FaBriefcase;
    const isOdd = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            className={`relative mb-10 flex ${isOdd ? "md:justify-start md:pr-[calc(50%+30px)]" : "md:justify-end md:pl-[calc(50%+30px)]"} pl-16 md:pl-0`}
            initial={{ opacity: 0, x: isOdd ? -40 : 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Dot */}
            <div className="absolute left-5 md:left-1/2 top-5 w-10 h-10 md:w-11 md:h-11 btn-gradient rounded-full flex items-center justify-center text-white text-sm z-10 -translate-x-1/2 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                <Icon />
            </div>

            {/* Content */}
            <div className="w-full bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-accent-1 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] transition-all duration-300">
                <span className="text-xs text-accent-1 font-medium flex items-center gap-1.5 mb-2">
                    <FiCalendar /> {item.date}
                </span>
                <h3 className="text-base font-semibold">{item.role}</h3>
                <h4 className="text-sm text-dark-text-muted mb-2">{item.company}</h4>
                <p className="text-sm text-dark-text-secondary leading-relaxed">{item.description}</p>
                <div className="flex gap-1.5 flex-wrap mt-3">
                    {item.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-dark-tertiary rounded-md text-[0.68rem] text-accent-1 font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    const [tab, setTab] = useState("exp");
    const data = tab === "exp" ? experienceData : educationData;

    return (
        <section id="experience" className="py-20 md:py-28 px-5 bg-dark-secondary">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader tag="journey" title="Experience &" highlight="Education" />

                {/* Tabs */}
                <div className="flex justify-center gap-3 mb-12">
                    {[
                        { key: "exp", icon: <FaBriefcase />, label: "Experience" },
                        { key: "edu", icon: <FaGraduationCap />, label: "Education" },
                    ].map((t) => (
                        <button
                            key={t.key}
                            onClick={() => setTab(t.key)}
                            className={`px-7 py-2.5 rounded-xl text-sm font-semibold border flex items-center gap-2 transition-all duration-300
                ${tab === t.key
                                    ? "btn-gradient border-transparent"
                                    : "border-dark-border text-dark-text-secondary hover:border-accent-1"
                                }`}
                        >
                            {t.icon} {t.label}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative max-w-[800px] mx-auto">
                    {/* Line */}
                    <div className="timeline-line bg-dark-border absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" />

                    {data.map((item, i) => (
                        <TimelineItem key={item.id} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}