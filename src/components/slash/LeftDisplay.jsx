import React, { useState, useEffect, useCallback, useMemo} from 'react';
const LeftDisplay = ({
    typingSpeed = 120,
    deletingSpeed = 20,
    pauseTime = 1500,
    
}) => {
    const words = [
        "where connections come alive, where laughter is shared, and where memories are created.",
        "the place where kindness blossoms, where joy is contagious, and where bonds grow stronger.",
        "the platform where dreams are nurtured, where frienships are cherished, and where love finds home.",
        "where moments turn into stories, where hearts connect, and where happiness becomes a way of life.",
        "the space where everyone belongs, where fun has no limits, and where togetherness thrives."
    ]; // Words to display

    const [currentWord, setCurrentWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false); 

    const sentences = useMemo(() => words.map(word => word.trim()), [words]);

    const getCurrentSpeed = useCallback(() => {
        if (isPaused) return pauseTime;
        return isDeleting ? deletingSpeed : typingSpeed;
    }, [isDeleting, isPaused, deletingSpeed, typingSpeed, pauseTime]);

    const handleAnimation = useCallback(() => {
        const currentSentence = sentences[wordIndex];

        if (!currentSentence) return;

        if (isPaused) {
            setIsPaused(false);
            setIsDeleting(true);
            return;
        }

        if (!isDeleting) {
            if (currentWord === currentSentence) {
                setIsPaused(true);
                return;
            }
            setCurrentWord(prev => currentSentence.substring(0, prev.length + 1));
        } else {
            if (currentWord === '') {
                setIsDeleting(false);
                setWordIndex(prev => (prev + 1) % sentences.length);
                return;
            }
            setCurrentWord(prev => prev.substring(0, prev.length - 1));
        }
    }, [currentWord, isDeleting, wordIndex, sentences, isPaused]);

    useEffect(() => {
        if (!sentences.length) return;

        const timeout = setTimeout(handleAnimation, getCurrentSpeed());
        return () => clearTimeout(timeout);
    }, [handleAnimation, getCurrentSpeed, sentences]);

    // Error state handling
    if (!sentences.length) {
        return <div className="text-red-500">No sentences provided</div>;
    }
              
    return (
        
        <div className="hidden lg:flex lg:w-1/2 bg-blue-500 text-white flex-col justify-center items-center p-12">
            <h1 className="text-4xl font-bold mb-4 ">Welcome to Green Live!</h1>
            <p  className="text-lg font-semibold leading-relaxed">
                Green is {currentWord}
                <span className="ml-1 text-white animate-pulse">|</span>
            </p>
        </div>
        );
};

export default LeftDisplay;