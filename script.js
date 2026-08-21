const roles = ["Game Technology", "Unity Systems", "Interactive Design"];
const roleElement = document.querySelector("#rotating-role");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (roleElement && !reduceMotion) {
  let roleIndex = 0;
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
  }, 2200);
}

const menuButton = document.querySelector(".menu-button");
const mobileNavigation = document.querySelector(".mobile-nav");

function closeMenu() {
  menuButton?.classList.remove("is-open");
  mobileNavigation?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Open menu");
}

menuButton?.addEventListener("click", () => {
  const isOpen = !menuButton.classList.contains("is-open");
  menuButton.classList.toggle("is-open", isOpen);
  mobileNavigation?.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

mobileNavigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const revealItems = document.querySelectorAll("[data-reveal]");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  revealItems.forEach((item) => observer.observe(item));
}

const navigationLinks = document.querySelectorAll(".desktop-nav a[href^='#']");
const sections = [...navigationLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateActiveNavigation() {
  const current = sections.reduce((active, section) => {
    return window.scrollY >= section.offsetTop - 180 ? section : active;
  }, sections[0]);

  navigationLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current?.id}`);
  });
}

window.addEventListener("scroll", updateActiveNavigation, { passive: true });
updateActiveNavigation();

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.hidden = true;
  });
});
