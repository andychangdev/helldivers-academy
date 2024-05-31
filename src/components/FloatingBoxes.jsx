import React, { useState, useEffect } from 'react';
import { useData } from "../contexts/dataContext.jsx";

export function FloatingBoxes() {
    const { stratagems } = useData();
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        function getRandomImage() {
            if (stratagems.length === 0) return ''; 
            const randomIndex = Math.floor(Math.random() * stratagems.length); 
            return stratagems[randomIndex]?.imageUrl || ''; 
        };

        const generateRandomImages = () => Array.from({ length: 10 }, getRandomImage);

        setRandomImages(generateRandomImages());

        const interval = setInterval(() => {
            setRandomImages(generateRandomImages());
        }, 10000);

        return () => clearInterval(interval);
    }, [stratagems]);

    return (
        <div className="floating-boxes">
            {randomImages.map((image, index) => (
                <span key={index} style={{ backgroundImage: `url(${image})` }}></span>
            ))}
        </div>
    );
}
