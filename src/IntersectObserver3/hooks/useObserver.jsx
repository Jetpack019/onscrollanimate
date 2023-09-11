import { useEffect, useState } from "react";

export const useObserver = (ref, options) => {
    const { rootMargin } = options;
    const [observerEntry, setObserverEntry] = useState(null);

    useEffect(() => {
        if (!ref?.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry);
                setObserverEntry(entry);
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin } // Pass just the rootMargin property as an object
        );
        observer.observe(ref.current);

        // Cleanup the observer when the component unmounts
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, rootMargin]);

    return observerEntry;
};
