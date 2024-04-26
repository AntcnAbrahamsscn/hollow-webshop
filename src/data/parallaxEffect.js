export const parallaxEffect = () => {
    const parallaxBg = document.querySelector(".parallax-bg");
    const scrolled = window.scrollY;
    const speed = scrolled * 0.3;
    parallaxBg.style.transform = `translate3d(0, ${-speed}px, 0)`;
};