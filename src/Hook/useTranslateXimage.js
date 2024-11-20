import useScrollHeading from "@/Hook/useScrollHeading";
import { useEffect, useState } from "react";

const usetranslateXIamge = () => {
    const { scrollPosition, scrollDirection } = useScrollHeading();
    const [translateXPosition, setTranslateXPosition] = useState(80);

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
        handleTranslateX();
    }, [scrollPosition]);


    return {
        translateXPosition,
    };  
};
export default usetranslateXIamge;