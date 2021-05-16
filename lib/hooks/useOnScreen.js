import React, {useState, useEffect} from 'react';

// https://usehooks.com/useOnScreen/
const useOnScreen = (ref, rootMargin = '0px') => {
    //if (!ref || !ref.current || typeof ref.current !== 'Element') return;
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observeRef = async () => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // Update our state when observer callback fires
                    setIntersecting(entry.isIntersecting);
                },
                {
                    rootMargin,
                }
            );
            if (ref.current) {
                observer.observe(ref.current);
            }
            //return typeof ref.current === 'Element' ? observer.unobserve(ref.current) : [];
            return () => {
                observer.unobserve(ref.current);
            };
        };
        observeRef();
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
};

export default useOnScreen;
