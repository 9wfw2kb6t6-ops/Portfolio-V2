/* =====================================
   Portfolio V2
   Main JavaScript
===================================== */

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

// ==========================
// Header Shadow
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==========================
// Active Menu
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Scroll Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .15
});

document.querySelectorAll(
".skill-card,.service-card,.project-card,.contact-box,.about-text"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ==========================
// Contact Form
// ==========================

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show-top");

}else{

topBtn.classList.remove("show-top");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================
// Typing Effect
// ==========================

const text =
"Frontend Developer";

const typingElement =
document.querySelector(".hero h3");

if(typingElement){

let index=0;

typingElement.innerHTML="";

function typing(){

if(index<text.length){

typingElement.innerHTML+=text.charAt(index);

index++;

setTimeout(typing,90);

}

}

typing();

}

// ==========================
// Console Message
// ==========================

console.log(
"Portfolio V2 Loaded Successfully"
);