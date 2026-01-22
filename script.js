// ------------------
// Mobile menu
// ------------------
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("show");
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  const clickedInside =
    mobileMenu.contains(e.target) || hamburger.contains(e.target);
  if (!clickedInside) {
    mobileMenu.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

// ------------------
// Cinematic scroll animations
// ------------------
const animatedEls = document.querySelectorAll(".anim");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        // Animate once, then stop observing
        io.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px",
  }
);

animatedEls.forEach((el) => io.observe(el));
