// Cursor Glow
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// GSAP Intro
gsap.from(".hero h1", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero p", {
  y: 50,
  opacity: 0,
  delay: 0.4,
  duration: 1
});

gsap.from(".btn", {
  scale: 0,
  opacity: 0,
  stagger: 0.2,
  delay: 0.8,
  ease: "back.out(1.7)"
});

// Scroll Navigation
document.querySelector(".boring").onclick = () => {
  document.getElementById("boring").scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".fun").onclick = () => {
  document.getElementById("fun").scrollIntoView({ behavior: "smooth" });
};

// Reveal Cards
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});
