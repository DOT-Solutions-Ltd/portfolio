import { useState, useRef, useEffect } from 'react';

const useBackgroundImage = (imageUrl) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        // Preload image with low priority
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = imageUrl;
        preloadLink.fetchPriority = 'low';
        document.head.appendChild(preloadLink);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = new Image();
                    
                    // Add loading priority
                    img.loading = 'lazy';
                    img.fetchPriority = 'low';
                    
                    img.src = imageUrl;
                    img.onload = () => {
                        setIsLoaded(true);
                        observer.unobserve(entry.target);
                    }
                }
            })
        }, { 
            threshold: 0.1,
            rootMargin: '50px' // Start loading slightly before element comes into view
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
            // Clean up preload link
            document.head.removeChild(preloadLink);
        }
    }, [imageUrl]);

    return [elementRef, isLoaded];
}

export default useBackgroundImage; 