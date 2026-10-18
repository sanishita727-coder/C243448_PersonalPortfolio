const navLinks = document.querySelectorAll(".nav-menu .nav-link");
navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); const sectionId = link.getAttribute("href");
        const section = document.querySelector(sectionId);
        if (section) { section.scrollIntoView({
                behavior: "smooth", block: "start"
            });
        }
    });
});const currentYear = document.getElementById("currentYear");
if (currentYear) { currentYear.textContent = new Date().getFullYear();}
