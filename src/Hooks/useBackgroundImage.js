import { useState, useEffect, useRef } from "react";

const useBackgroundImage = (imageUrl) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const img = new Image();
                img.src = imageUrl;
                img.onload = () => {
                    setIsLoaded(true);
                }
                observer.unobserve(entry.target);
            })
        }, { threshold: 0.1 });
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        }
    }, [imageUrl]);

    return [elementRef, isLoaded];
}

export default useBackgroundImage;