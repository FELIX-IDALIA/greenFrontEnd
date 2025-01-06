import React, { useState, useEffect} from 'react';
const LeftDisplay = () => {
    const words = [
        "Green is where connections come alive, where laughter is shared, and where memories are created.",
        "Green is the place where kindness blossoms, where joy is contagious, and where bonds grow stronger.",
        "Green is the platform where dreams are nurtured, where frienships are cherished, and where love finds home.",
        "Green is where moments turn into stories, where hearts connect, and where happiness becomes a way of life.",
        "Green is the space where everyone belongs, where fun has no limits, and where togetherness thrives."
    ]; // Words to display

    const [currentWord, setCurrentWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150); // Typing and deleting speed

    useEffect(() => {
        const handleTyping = setTimeout(() => {
            const fullWord = words[wordIndex]; // Get the current word

            if (!isDeleting) {
                // Typing forward
                setCurrentWord((prev) => fullWord.substring(0, prev.length + 1));
                if (currentWord === fullWord) {
                    setIsDeleting(true);
                    setSpeed(100); // Pause before deleting
                }
            } else {
                // Deleting
                setCurrentWord((prev) => fullWord.substring(0, prev.length -1));
                if (currentWord === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length); // Move to next word
                    setSpeed(150);
                }
            }
        }, speed);

        return () => clearTimeout(handleTyping); // Cleanup timeout
    }, [currentWord, isDeleting, wordIndex, words, speed]);

    

    return (
        
        <div className="hidden lg:flex lg:w-1/2 bg-blue-500 text-white flex-col justify-center items-center p-12">
            <h1 className="text-4xl font-bold mb-4 ">Welcome to Green Live!</h1>
            <p  className="text-lg font-semibold leading-realaxed">
                {currentWord}
                <span className="ml-1 text-white animate-pulse">|</span>
            </p>
        </div>
        );
        
       
    
    
};

export default LeftDisplay;