const timeline = document.querySelector(".timeline");

if (timeline) {
    if ("IntersectionObserver" in window) {
        const timelineObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        timeline.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.25,
            }
        );

        timelineObserver.observe(timeline);
    } else {
        timeline.classList.add("is-visible");
    }
}

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
    });
});

const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector(".nav-bar");

document.addEventListener("click", (event) => {
   if (event.target.closest("#menu-icon")){
    navMenu.classList.toggle("active");
   }
});
