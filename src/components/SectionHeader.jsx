import { useScrollReveal } from "../hooks/useScrollReveal";

const gradientStyle = {
    background: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

export default function SectionHeader({ tag, title, highlight }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`text-center mb-16 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <span className="font-mono text-sm text-[#00d4ff] tracking-[2px]">
                &lt; {tag} &gt;
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                {title}{" "}
                <span style={gradientStyle}>{highlight}</span>
            </h2>
            <div
                className="w-16 h-1 mx-auto rounded-full"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7b2ff7)" }}
            />
        </div>
    );
}