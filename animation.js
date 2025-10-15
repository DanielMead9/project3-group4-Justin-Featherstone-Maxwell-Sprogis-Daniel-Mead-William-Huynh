// Animate elements upon scroll using the .animate-on-scroll CSS class
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of element is visible

    // Select all elements to animate
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(el => observer.observe(el));
});