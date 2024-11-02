import { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, className, priority = 'low' }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        // If it's a dynamic import
        if (typeof src === 'function') {
            src().then(module => setImageSrc(module.default));
        } else {
            setImageSrc(src);
        }
    }, [src]);

    return (
        <img 
            src={imageSrc}
            alt={alt}
            className={className}
            loading="lazy"
            fetchPriority={priority}
            decoding="async"
        />
    );
};

export default OptimizedImage;
