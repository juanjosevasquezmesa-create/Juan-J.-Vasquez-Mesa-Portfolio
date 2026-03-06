// ============================
// MOBILE NAVIGATION
// ============================

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// ============================
// FADE-IN SCROLL ANIMATION
// ============================

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach(btn => {

  btn.addEventListener("mousemove", e => {

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.2;
    const moveY = (y - rect.height / 2) * 0.2;

    btn.style.transform = `translate(${moveX}px, ${moveY}px)`;

  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });

});