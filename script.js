/* ================= DARK MODE (FIXED) ================= */
const themeToggle = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

function setTheme(theme) {
  if (theme === "dark") {
    htmlEl.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlEl.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

// Load on start
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setTheme("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = htmlEl.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
}


// Load saved or system preference

/* ================= TYPING ANIMATION ================= */
const roles = [
  "IT Graduate",
  "Frontend Developer",
  "IT Support Specialist",
  "Problem Solver",
  "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (!typingEl) return;

  const currentRole = roles[roleIndex];
  if (!isDeleting) {
    typingEl.textContent = currentRole.substring(0, charIndex++);
  } else {
    typingEl.textContent = currentRole.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentRole.length + 1) {
    setTimeout(() => (isDeleting = true), 1200);
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(typeEffect, speed);
}

typeEffect();

/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => revealObserver.observe(el));

/* ================= LIVE CLOCK ================= */
const clockEl = document.getElementById("live-clock");

function updateClock() {
  if (!clockEl) return;
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

setInterval(updateClock, 1000);
updateClock();

/* ================= CONTACT FORM LOADING ================= */
const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("send-btn");

if (contactForm && sendBtn) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    setTimeout(() => {
      sendBtn.textContent = "Message Sent ✅";
      contactForm.reset();
     
      setTimeout(() => {
        sendBtn.textContent = "Send Message";
        sendBtn.disabled = false;
      }, 2000);
    }, 1500);
  });
}

/* ================= MOBILE MENU ================= */
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
