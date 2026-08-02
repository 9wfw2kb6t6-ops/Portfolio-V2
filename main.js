/* ==========================================
   Portfolio V4 Ultra
   Main JavaScript
========================================== */

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
`
.section-header,
.about-left,
.about-right,
.skill-card,
.service-card,
.project-card,
.why-card,
.testimonial-card,
.contact-card,
.faq-item
`
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});
// ==========================
// Typing Effect
// ==========================

const typingElement = document.querySelector(".hero h2");

const words = [
    "Frontend Developer",
    "UI / UX Designer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 40 : 90);

}

typingEffect();

// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".stat-box h3");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target =
            parseInt(counter.innerText);

        let number = 0;

        const speed = target / 50;

        const updateCounter = () => {

            number += speed;

            if (number < target) {

                counter.innerText =
                    Math.ceil(number) + "+";

                requestAnimationFrame(updateCounter);

            } else {

                if (counter.innerText.includes("%")) {

                    counter.innerText = "100%";

                } else {

                    counter.innerText =
                        target + "+";

                }

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ==========================
// Back To Top
// ==========================

const topButton = document.createElement("button");

topButton.className = "top-button";

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show-top");

    } else {

        topButton.classList.remove("show-top");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// Smooth Anchor Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
// ==========================================
// Parallax Background
// ==========================================

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    document.querySelectorAll(".blur").forEach((blur, index) => {

        const speed = (index + 1) * 0.15;

        blur.style.transform =
            `translateY(${scroll * speed}px)`;

    });

});

// ==========================================
// 3D Hover Effect
// ==========================================

document.querySelectorAll(
".project-card,.service-card,.skill-card,.why-card"
).forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});

// ==========================================
// Button Ripple Effect
// ==========================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const circle =
        document.createElement("span");

        const size =
        Math.max(this.clientWidth,this.clientHeight);

        circle.style.width=size+"px";
        circle.style.height=size+"px";

        circle.classList.add("ripple");

        const rect=this.getBoundingClientRect();

        circle.style.left=
        e.clientX-rect.left-size/2+"px";

        circle.style.top=
        e.clientY-rect.top-size/2+"px";

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});

// ==========================================
// Page Loader
// ==========================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// ==========================================
// Cursor Glow
// ==========================================

const cursor=document.createElement("div");

cursor.className="cursor-glow";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

// ==========================================
// Console Message
// ==========================================

console.log("%cPortfolio V4 Ultra",
"color:#f8b400;font-size:22px;font-weight:bold;");

console.log("%cDesigned by Nariman Alizadeh",
"color:white;font-size:14px;");

console.log("%cFrontend Developer",
"color:#f8b400;font-size:14px;");

// ==========================================
// End
// ==========================================