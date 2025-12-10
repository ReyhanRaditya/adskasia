// ----------------------------------------------------------
// UI/UX ENHANCEMENT — CLEAN FIXED VERSION
// ----------------------------------------------------------
(function () {
  "use strict";

  /* Year in footer */
  document.addEventListener("DOMContentLoaded", function () {
    const y = new Date().getFullYear();
    const el = document.getElementById("year");
    if (el) el.textContent = y;
  });

  /* Sticky header */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".js-sticky-header");
    if (!header) return;
    if (window.scrollY > 60) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  });

  /* Scroll reveal */
  function revealAll() {
    const reveals = document.querySelectorAll(".da-service-card");
    const windowHeight = window.innerHeight;
    reveals.forEach((el, i) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 80) {
        setTimeout(() => el.classList.add("is-revealed"), i * 80);
      }
    });
  }
  window.addEventListener("scroll", revealAll);
  window.addEventListener("load", revealAll);
  revealAll();

  /* Magnetic hover */
  const magneticEls = document.querySelectorAll("[data-magnetic]");
  magneticEls.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const rx = (mx - rect.width / 2) / (rect.width / 2);
      const ry = (my - rect.height / 2) / (rect.height / 2);
      card.style.transform = `translate3d(${rx * 8}px, ${ry * 8}px, 0) rotateX(${-ry * 4}deg) rotateY(${rx * 4}deg)`;
    });
    card.addEventListener("mouseleave", function () {
      card.style.transform = "";
    });
  });

  /* Hero parallax */
  const hero = document.querySelector("[data-parallax]");
  if (hero) {
    document.addEventListener("mousemove", function (e) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      hero.style.transform = `translate3d(${dx * 6}px, ${dy * 6}px, 0)`;
    });
  }

  /* Particles */
  (function particles() {
    const canvas = document.getElementById("hero-particles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    const particles = [];
    const PCOUNT = Math.max(12, Math.floor(w / 80));

    function rand(min, max) { return Math.random() * (max - min) + min; }
    function create() {
      for (let i = 0; i < PCOUNT; i++) {
        particles.push({
          x: rand(0, w),
          y: rand(0, h),
          r: rand(0.8, 2.5),
          vx: rand(-0.15, 0.15),
          vy: rand(-0.05, 0.05),
          alpha: rand(0.15, 0.45)
        });
      }
    }

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function update() {
      ctx.clearRect(0, 0, w, h);
      for (let p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        ctx.beginPath();
        ctx.fillStyle = `rgba(99,102,241, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(update);
    }

    window.addEventListener("resize", resize);

    create();
    resize();
    update();
  })();

  /* Preloader failsafe */
  window.addEventListener("load", function () {
    const pre = document.querySelector(".preloader");
    if (pre) {
      pre.style.transition = "opacity .45s ease";
      pre.style.opacity = "0";
      setTimeout(() => pre.style.display = "none", 500);
    }
  });

})();
/* Stagger reveal for premium cards */
function revealServiceCards() {
    const cards = document.querySelectorAll('.da-service-card');
    const winH = window.innerHeight;

    cards.forEach((card, i) => {
        const top = card.getBoundingClientRect().top;
        if (top < winH - 80) {
            setTimeout(() => {
                card.classList.add('revealed');
            }, i * 140);
        }
    });
}
window.addEventListener("scroll", revealServiceCards);
window.addEventListener("load", revealServiceCards);
revealServiceCards();

/* Tilt effect premium */
document.querySelectorAll(".da-service-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        card.style.transform = `translateY(-10px) rotateX(${ -y/20 }deg) rotateY(${ x/20 }deg)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
});
// // Galaxy starfield background
// const galaxy = document.getElementById("galaxy-canvas");
// if (galaxy) {
//     const ctx = galaxy.getContext("2d");
//     galaxy.width = window.innerWidth;
//     galaxy.height = window.innerHeight;

//     const stars = [];
//     for (let i = 0; i < 250; i++) {
//         stars.push({
//             x: Math.random() * galaxy.width,
//             y: Math.random() * galaxy.height,
//             r: Math.random() * 1.7,
//             s: Math.random() * 0.8 + 0.2
//         });
//     }

//     function drawStars() {
//         ctx.clearRect(0, 0, galaxy.width, galaxy.height);
//         stars.forEach(st => {
//             ctx.beginPath();
//             ctx.arc(st.x, st.y, st.r, 0, 2 * Math.PI);
//             ctx.fillStyle = `rgba(255,255,255,${st.s})`;
//             ctx.fill();
//         });
//         requestAnimationFrame(drawStars);
//     }
//     drawStars();
// }
// Parallax movement
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;

    document.querySelectorAll(".orbit-astronaut, .jetpack-astronaut")
        .forEach(el => {
            el.style.transform += ` translate(${x}px, ${y}px)`;
        });
});
/* ============================================================
   PREMIUM CURSOR FOLLOWER — Animated Mouse Circle
   ============================================================ */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

if (cursor && follower) {
    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX - 4;   // offset kecil
        mouseY = e.clientY - 4;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    });

    function follow() {
        posX += (mouseX - posX) * 0.12;
        posY += (mouseY - posY) * 0.12;

        follower.style.left = posX + "px";
        follower.style.top = posY + "px";

        requestAnimationFrame(follow);
    }
    follow();
}

