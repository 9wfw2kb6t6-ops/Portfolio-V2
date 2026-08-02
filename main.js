/* ===========================================
   Portfolio V3 Premium
   Main JavaScript
=========================================== */

// =========================
// Mobile Menu
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

// =========================
// Header Effect
// =========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(8,8,8,.90)";
header.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(10,10,10,.72)";
header.style.boxShadow="none";

}

});

// =========================
// Active Navigation
// =========================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =========================
// Scroll Reveal
// =========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(

".glass-card,.skill-card,.service-card,.project-card,.testimonial-card,.faq-item,.contact-card"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});
// ===========================================
// Typing Effect
// ===========================================

const typingTarget = document.querySelector(".hero h2");

if (typingTarget) {

const words = [
"Frontend Developer",
"UI Designer",
"Web Designer",
"Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const current = words[wordIndex];

if(!deleting){

typingTarget.textContent =
current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typingTarget.textContent =
current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 45 : 90);

}

typeEffect();

}

// ===========================================
// Animated Counters
// ===========================================

const counters =
document.querySelectorAll(".stat-box h3");

const speed = 60;

counters.forEach(counter=>{

const updateCounter=()=>{

const target =
parseInt(counter.innerText);

const count =
+counter.getAttribute("data-count") || target;

const increment =
Math.ceil(count/speed);

if(target<count){

counter.innerText =
target+increment;

requestAnimationFrame(updateCounter);

}else{

counter.innerText =
count+"+";

}

};

counter.innerText="0";

counter.setAttribute(
"data-count",
counter.innerText.replace("+","")
);

});

// ===========================================
// Back To Top
// ===========================================

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show-top");

}else{

topBtn.classList.remove("show-top");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// ===========================================
// Loader
// ===========================================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ===========================================
// Parallax Background
// ===========================================

const blur1=document.querySelector(".blur-1");
const blur2=document.querySelector(".blur-2");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

if(blur1){

blur1.style.transform=
`translate(${x*40}px,${y*40}px)`;

}

if(blur2){

blur2.style.transform=
`translate(${-x*40}px,${-y*40}px)`;

}

});

// ===========================================
// 3D Hover Cards
// ===========================================

document.querySelectorAll(

".project-card,.service-card,.glass-card,.skill-card"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/18;

const rotateY=(rect.width/2-x)/18;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0) rotateY(0)";

});

});

// ===========================================
// Floating Image
// ===========================================

const profile=document.querySelector(".profile-card");

if(profile){

let angle=0;

setInterval(()=>{

angle+=0.01;

profile.style.transform=

`translateY(${Math.sin(angle)*10}px)`;

},20);

}

// ===========================================
// Contact Form
// ===========================================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const btn=form.querySelector("button");

btn.innerHTML="Sending...";

setTimeout(()=>{

btn.innerHTML="Message Sent ✓";

btn.style.background="#16c784";

form.reset();

},1800);

});

}

// ===========================================
// Console
// ===========================================

console.log("%cPortfolio V3 Premium Loaded",
"color:#f8b400;font-size:20px;font-weight:bold;");