export const getElemOffset = (el) => {
    if (typeof window === 'undefined') {
        console.log('window object not available');
        return;
    }
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
};

export const scrollToElement = (id, marginTop = 150) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const element = document.getElementById(id);
        if (!element) return;
        const elOffset = getElemOffset(element);

        elOffset.top &&
            window.scrollTo({
                top: elOffset.top - marginTop,
                behavior: 'smooth',
            });
    }
};
