import {
    FaPalette, FaServer, FaTools, FaDatabase, FaMobile,
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
    FaJava, FaGitAlt, FaGithub, FaFigma, FaDocker,
    FaCss3, FaAws, FaJenkins, FaBug, FaVial, FaSearchPlus,
    FaTachometerAlt
} from "react-icons/fa";
import {
    SiTypescript, SiCplusplus, SiFlutter,
    SiMysql, SiFirebase, SiMongodb, SiJira
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillsData } from "../data/portfolioData";

const skillIcons = {
    html5: FaHtml5,
    css3: FaCss3Alt,
    javascript: FaJs,
    react: FaReact,
    tailwind: FaCss3,
    typescript: SiTypescript,
    nodejs: FaNodeJs,
    python: FaPython,
    java: FaJava,
    cpp: SiCplusplus,
    api: FaServer,
    mysql: SiMysql,
    firebase: SiFirebase,
    mongodb: SiMongodb,
    flutter: SiFlutter,
};

const toolIcons = {
    "Git & GitHub": FaGitAlt,
    "Docker": FaDocker,
    "AWS EC2": FaAws,
    "Jenkins": FaJenkins,
    "Jira": SiJira,
    "Figma": FaFigma,
    "JUnit": FaVial,
    "Selenium": FaBug,
    "SonarQube": FaSearchPlus,
    "JMeter": FaTachometerAlt,
};

function SkillBar({ name, icon, percent }) {
    const [ref, isVisible] = useScrollReveal(0.3);
    const Icon = skillIcons[icon] || FaServer;

    return (
        <div ref={ref} className="mb-5">
            <div className="flex justify-between mb-2 text-sm">
                <span className="flex items-center gap-1.5">
                    <Icon className="text-[#00d4ff]" /> {name}
                </span>
                <span className="text-[#00d4ff] font-mono text-xs font-semibold">{percent}%</span>
            </div>
            <div className="h-2 bg-[#1a1a28] rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] rounded-full transition-all duration-[1.5s] ease-out"
                    style={{ width: isVisible ? `${percent}%` : "0%" }}
                />
            </div>
        </div>
    );
}

function SkillCategory({ icon, title, children }) {
    const [ref, isVisible] = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 mb-7 hover:border-[#00d4ff] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <h3 className="text-lg font-semibold flex items-center gap-2.5 mb-6">
                <span className="text-[#00d4ff]">{icon}</span> {title}
            </h3>
            {children}
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-28 px-5 bg-[#111118]">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader tag="skills" title="Skills &" highlight="Technologies" />

                <SkillCategory icon={<FaPalette />} title="Frontend Development">
                    {skillsData.frontend.map((s) => (
                        <SkillBar key={s.name} {...s} />
                    ))}
                </SkillCategory>

                <SkillCategory icon={<FaServer />} title="Backend Development">
                    {skillsData.backend.map((s) => (
                        <SkillBar key={s.name} {...s} />
                    ))}
                </SkillCategory>

                <SkillCategory icon={<FaDatabase />} title="Database Management">
                    {skillsData.database.map((s) => (
                        <SkillBar key={s.name} {...s} />
                    ))}
                </SkillCategory>

                <SkillCategory icon={<FaMobile />} title="Mobile Development">
                    {skillsData.mobile.map((s) => (
                        <SkillBar key={s.name} {...s} />
                    ))}
                </SkillCategory>

                <SkillCategory icon={<FaTools />} title="Tools & DevOps">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {skillsData.tools.map((tool) => {
                            const Icon = toolIcons[tool] || FaTools;
                            return (
                                <div
                                    key={tool}
                                    className="flex flex-col items-center gap-2 p-5 bg-[#1a1a28] rounded-2xl border border-transparent hover:border-[#00d4ff] hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Icon className="text-3xl text-[#00d4ff]" />
                                    <span className="text-xs text-[#a0a0b8] text-center">{tool}</span>
                                </div>
                            );
                        })}
                    </div>
                </SkillCategory>
            </div>
        </section>
    );
}