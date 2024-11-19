import { useEffect, useRef, useState } from 'react';
const [scrollDirection, setScrollDirection] = useState(null);
const previousScrollPositions = useRef(0);
const [translateXPosition, setTranslateXPosition] = useState(80);
const [scrollPosition, setScrollPosition] = useState(0);

const usetranslateX = () => {
    const scrollTracking = () => {
        const currentScrollPositions = window.pageYOffset;
    
        if (currentScrollPositions > previousScrollPositions.current) {
            setScrollDirection('down');
        } else if (currentScrollPositions < previousScrollPositions.current) {
            setScrollDirection('up');
        }
    
        previousScrollPositions.current =
            currentScrollPositions <= 0 ? 0 : currentScrollPositions;
        setScrollPosition(currentScrollPosaitions);
    };
    
    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 1300) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDirection === 'up') {
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
    
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);
    
    return{
        translateXPosition,
        handleTranslateX,
        scrollPosition
    };
};
export default usetranslateX;