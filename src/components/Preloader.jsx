import { useState, useEffect } from "react";

export default function Preloader() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader bg-dark-bg ${hidden ? "hidden" : ""}`}>
            <div className="text-center">
                <div className="w-16 h-16 relative mx-auto mb-5">
                    <div className="loader-circle" />
                    <div className="loader-circle-inner" />
                </div>
                <span className="font-mono text-accent-1 text-sm tracking-widest">
                    &lt; Loading /&gt;
                </span>
            </div>
        </div>
    );
}