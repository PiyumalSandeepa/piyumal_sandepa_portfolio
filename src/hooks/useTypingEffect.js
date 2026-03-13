import { useState, useEffect, useCallback } from "react";

export function useTypingEffect(phrases, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1800) {
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const tick = useCallback(() => {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            setText(currentPhrase.substring(0, text.length + 1));
            if (text.length + 1 === currentPhrase.length) {
                setTimeout(() => setIsDeleting(true), pauseTime);
                return;
            }
        } else {
            setText(currentPhrase.substring(0, text.length - 1));
            if (text.length - 1 === 0) {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
                return;
            }
        }
    }, [text, phraseIndex, isDeleting, phrases, pauseTime]);

    useEffect(() => {
        const timer = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting, deletingSpeed, typingSpeed]);

    return text;
}