import { useEffect, useRef, useState } from 'react';

const useScrollHeading = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const previousScrollPositions = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPositions = window.pageYOffset;

        if (currentScrollPositions > previousScrollPositions.current) {
            setScrollDirection('down');
        } else if (currentScrollPositions < previousScrollPositions.current) {
            setScrollDirection('up');
        }

        previousScrollPositions.current =
            currentScrollPositions <= 0 ? 0 : currentScrollPositions;
        setScrollPosition(currentScrollPositions);
    };

    
    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scrollDirection,
        scrollPosition,
    };
};
export default useScrollHeading;
