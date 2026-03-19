import {
    FaPalette, FaServer, FaTools, FaDatabase, FaMobile,
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
    FaJava, FaGitAlt, FaDocker, FaFigma,
    FaCss3, FaAws, FaJenkins, FaBug, FaVial, FaSearchPlus,
    FaTachometerAlt, FaPaperPlane, FaRocket
} from "react-icons/fa";
import {
    SiTypescript, SiCplusplus, SiFlutter,
    SiMysql, SiFirebase, SiMongodb, SiJira, SiPostman
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillsData } from "../data/portfolioData";

const allIcons = {
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
    github: FaGitAlt,
    docker: FaDocker,
    aws: FaAws,
    jenkins: FaJenkins,
    jira: SiJira,
    figma: FaFigma,
    postman: SiPostman,
    bruno: FaRocket,
    junit: FaVial,
    selenium: FaBug,
    sonarqube: FaSearchPlus,
    jmeter: FaTachometerAlt,
};

function SkillCard({ name, icon }) {
    const Icon = allIcons[icon] || FaServer;
    return (
        <div className="group flex flex-col items-center gap-3 p-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl hover:border-[#00d4ff] hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] cursor-default">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#1a1a28] group-hover:bg-[rgba(0,212,255,0.1)] transition-all duration-300">
                <Icon className="text-2xl text-[#00d4ff] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-sm text-[#a0a0b8] group-hover:text-[#f0f0f5] font-medium text-center transition-colors duration-300">
                {name}
            </span>
        </div>
    );
}

function SkillCategory({ icon, title, skills, delay }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 mb-7 hover:border-[#00d4ff] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <h3 className="text-lg font-semibold flex items-center gap-2.5 mb-6">
                <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm"
                    style={{ background: "linear-gradient(135deg, #00d4ff, #7b2ff7)" }}
                >
                    {icon}
                </span>
                {title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-28 px-5 bg-[#111118]">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader tag="skills" title="Skills &" highlight="Technologies" />

                <SkillCategory
                    icon={<FaPalette />}
                    title="Frontend Development"
                    skills={skillsData.frontend}
                    delay={0}
                />

                <SkillCategory
                    icon={<FaServer />}
                    title="Backend Development"
                    skills={skillsData.backend}
                    delay={100}
                />

                <SkillCategory
                    icon={<FaDatabase />}
                    title="Database Management"
                    skills={skillsData.database}
                    delay={200}
                />

                <SkillCategory
                    icon={<FaMobile />}
                    title="Mobile Development"
                    skills={skillsData.mobile}
                    delay={300}
                />

                <SkillCategory
                    icon={<FaTools />}
                    title="Tools & DevOps"
                    skills={skillsData.tools}
                    delay={400}
                />
            </div>
        </section>
    );
}