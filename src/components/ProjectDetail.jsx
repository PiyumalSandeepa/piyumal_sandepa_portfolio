import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiCalendar, FiUser, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../data/portfolioData";
import { useEffect } from "react";

const gradientStyle = {
    background: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

const gradientBg = {
    background: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
};

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4" style={gradientStyle}>404</h1>
                    <p className="text-[#a0a0b8] mb-8">Project not found</p>
                    <button
                        onClick={() => navigate("/")}
                        className="text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
                        style={gradientBg}
                    >
                        <FiArrowLeft /> Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    const { details } = project;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-[#f0f0f5]">
            {/* Hero Banner */}
            <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />

                {/* Back Button */}
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
                >
                    <FiArrowLeft /> Back to Portfolio
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-20">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs font-medium text-[#00d4ff] border border-[#00d4ff]/30 bg-[#00d4ff]/10"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
                            {project.title}
                        </h1>
                        <p className="text-lg text-[#a0a0b8] max-w-[700px]">
                            {details.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[1000px] mx-auto px-6 py-12 md:px-20">

                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    <div className="flex items-center gap-3 p-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl">
                        <span className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={gradientBg}>
                            <FiCalendar />
                        </span>
                        <div>
                            <span className="text-[0.65rem] text-[#5a5a72] uppercase tracking-wider block">Duration</span>
                            <span className="text-sm font-medium">{details.duration}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl">
                        <span className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={gradientBg}>
                            <FiUser />
                        </span>
                        <div>
                            <span className="text-[0.65rem] text-[#5a5a72] uppercase tracking-wider block">My Role</span>
                            <span className="text-sm font-medium">{details.role}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl">
                        <span className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={gradientBg}>
                            <FiCheckCircle />
                        </span>
                        <div>
                            <span className="text-[0.65rem] text-[#5a5a72] uppercase tracking-wider block">Category</span>
                            <span className="text-sm font-medium capitalize">{project.category}</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 flex-wrap mb-12">
                    {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-[0_4px_20px_rgba(0,212,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                            style={gradientBg}
                        >
                            <FaGithub size={18} /> View Source Code
                        </a>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl font-semibold border-2 border-[rgba(255,255,255,0.07)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-300 flex items-center gap-2"
                        >
                            <FiExternalLink size={18} /> Live Demo
                        </a>
                    )}
                </div>

                {/* About the Project */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">
                        About the Project
                    </h2>
                    <p className="text-[#a0a0b8] leading-relaxed text-base whitespace-pre-line">
                        {details.longDescription}
                    </p>
                </div>

                {/* Key Features */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">
                        Key Features
                    </h2>
                    <div className="grid gap-3">
                        {details.features.map((feature, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#00d4ff]/30 transition-all duration-300"
                            >
                                <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5" style={gradientBg}>
                                    {i + 1}
                                </span>
                                <span className="text-[#a0a0b8] text-sm leading-relaxed">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies Used */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">
                        Technologies Used
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {details.technologies.map((tech, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-xl hover:border-[#00d4ff] hover:-translate-y-1 transition-all duration-300"
                            >
                                <span
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
                                    style={gradientBg}
                                >
                                    {tech.name.charAt(0)}
                                </span>
                                <div>
                                    <h4 className="text-sm font-semibold">{tech.name}</h4>
                                    <p className="text-xs text-[#5a5a72]">{tech.purpose}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Challenges */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">
                        Challenges & Solutions
                    </h2>
                    <div className="grid gap-4">
                        {details.challenges.map((challenge, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-5 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-xl"
                            >
                                <span className="text-[#ff9f43] text-lg mt-0.5 shrink-0">
                                    <FiAlertTriangle />
                                </span>
                                <p className="text-[#a0a0b8] text-sm leading-relaxed">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Screenshots */}
                {details.screenshots && details.screenshots.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">
                            Project Screenshots
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {details.screenshots.map((img, i) => (
                                <div key={i} className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.07)] hover:border-[#00d4ff] transition-all duration-300">
                                    <img
                                        src={img}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Other Projects */}
                <div className="mt-16 pt-12 border-t border-[rgba(255,255,255,0.07)]">
                    <h2 className="text-2xl font-bold mb-6">
                        Other Projects
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projectsData
                            .filter((p) => p.id !== project.id)
                            .slice(0, 3)
                            .map((p) => (
                                <div
                                    key={p.id}
                                    onClick={() => {
                                        navigate(`/project/${p.id}`);
                                        window.scrollTo(0, 0);
                                    }}
                                    className="group cursor-pointer bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden hover:border-[#00d4ff] hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-semibold mb-1">{p.title}</h3>
                                        <div className="flex gap-1.5 flex-wrap">
                                            {p.tags.slice(0, 3).map((tag) => (
                                                <span key={tag} className="text-[0.6rem] text-[#00d4ff] px-2 py-0.5 bg-[#1a1a28] rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate("/")}
                        className="text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(0,212,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                        style={gradientBg}
                    >
                        <FiArrowLeft /> Back to Portfolio
                    </button>
                </div>
            </div>
        </div>
    );
}