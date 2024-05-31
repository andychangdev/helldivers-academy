import React, { useState, useEffect } from 'react';
import { useData } from "../contexts/dataContext.jsx";

export function FloatingBoxes() {
    const { stratagems } = useData();
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        const newRandomImages = Array.from({ length: 10 }, () => {
            const randomIndex = Math.floor(Math.random() * stratagems.length-1);
            return stratagems[randomIndex].imageUrl;
        });
        setRandomImages(newRandomImages);

        const interval = setInterval(() => {
            const newRandomImages = Array.from({ length: 10 }, () => {
                const randomIndex = Math.floor(Math.random() * stratagems.length-1);
                return stratagems[randomIndex].imageUrl;
            });
            setRandomImages(newRandomImages);
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
