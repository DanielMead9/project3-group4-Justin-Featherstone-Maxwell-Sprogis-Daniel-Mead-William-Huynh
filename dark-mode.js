
// Theme toggle (preserve original behavior)
const toggle = document.getElementById("themeToggle");
if (toggle) {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggle.textContent = "☀️ Light Mode";
        toggle.setAttribute("aria-pressed", "true");
    } else {
        toggle.setAttribute("aria-pressed", "false");
    }

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        if (isDark) {
            toggle.textContent = "☀️ Light Mode";
            toggle.setAttribute("aria-pressed", "true");
            localStorage.setItem("theme", "dark"); // save choice
        } else {
            toggle.textContent = "🌙 Dark Mode";
            toggle.setAttribute("aria-pressed", "false");
            localStorage.setItem("theme", "light"); // save choice
        }
    });
}

// Lazy loading image fade-in effect
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add("loaded");
                    observer.unobserve(img);
                }
            });
        }
    );

    lazyImages.forEach((img) => imageObserver.observe(img));
} else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach((img) => img.classList.add("loaded"));
}
