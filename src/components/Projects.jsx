import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { projectsData } from "../data/portfolioData";

const categories = ["all", "web", "mobile", "devops"];

export default function Projects() {
    const [filter, setFilter] = useState("all");

    const filtered = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

    return (
        <section id="projects" className="py-20 md:py-28 px-5">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeader tag="projects" title="Featured" highlight="Projects" />

                {/* Filters */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                                filter === cat
                                    ? "bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] text-white border-transparent shadow-[0_4px_15px_rgba(0,212,255,0.25)]"
                                    : "border-[rgba(255,255,255,0.07)] text-[#a0a0b8] hover:border-[#00d4ff] hover:text-[#00d4ff]"
                            }`}
                        >
                            {cat === "devops" ? "DevOps / QA" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filtered.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-[#00d4ff] hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] transition-all duration-400"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-[3/2]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[600ms]"
                                />
                                <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] flex items-center justify-center text-white hover:scale-110 transition-transform"
                                    >
                                        <FiExternalLink />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] flex items-center justify-center text-white hover:scale-110 transition-transform"
                                    >
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <div className="flex gap-2 flex-wrap mb-3">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-[#1a1a28] rounded-full text-[0.7rem] text-[#00d4ff] font-medium border border-[rgba(255,255,255,0.07)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-[#a0a0b8] leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}