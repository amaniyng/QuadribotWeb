document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer for animations
    const observeElements = (selector, animationClass) => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                }
            });
        });
        document.querySelectorAll(selector).forEach(el => observer.observe(el));
    };

    observeElements('.title-section', 'animation-from-left');
    observeElements('.description-section', 'animation-from-bottom');
    observeElements('.title-section-top1', 'animation-from-top');
});