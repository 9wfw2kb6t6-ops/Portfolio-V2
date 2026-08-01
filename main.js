/* ======================================
   Portfolio V4
   Author: Nariman Alizadeh
====================================== */

"use strict";

// ============================
// Select Elements
// ============================

const header = document.querySelector("header");

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section");

const heroImage = document.querySelector(".hero-image img");

// ============================
// Mobile Menu
// ============================

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

menuBtn.classList.toggle("open");

});

}

navItems.forEach(item=>{

item.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuBtn.classList.remove("open");

});

});

// ============================
// Sticky Header
// ============================

window.addEventListener("scroll",()=>{

if(window.scrollY>70){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});
// ============================
// Active Navigation
// ============================

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;
const height=section.offsetHeight;

if(window.scrollY>=top &&
window.scrollY<top+height){

current=section.id;

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

// ============================
// Scroll Reveal Animation
// ============================

const revealItems=document.querySelectorAll(

".hero-text,.hero-image,.about-text,.info-box,.skill-card,.service-card,.project-card,.contact-box,.contact-form"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

revealItems.forEach(item=>{

item.classList.add("hidden");

revealObserver.observe(item);

});
// ============================
// Typing Effect
// ============================

const typingElement=document.querySelector(".hero h3");

const words=[
"Frontend Developer",
"UI / UX Designer",
"Freelance Web Developer"
];

let wordIndex=0;
let charIndex=0;
let isDeleting=false;

function typingEffect(){

if(!typingElement) return;

const currentWord=words[wordIndex];

typingElement.textContent=currentWord.substring(0,charIndex);

if(isDeleting){

charIndex--;

}else{

charIndex++;

}

if(!isDeleting && charIndex===currentWord.length){

isDeleting=true;

setTimeout(typingEffect,1500);

return;

}

if(isDeleting && charIndex===0){

isDeleting=false;

wordIndex=(wordIndex+1)%words.length;

}

setTimeout(typingEffect,isDeleting?60:110);

}

typingEffect();

// ============================
// Animated Counter
// ============================

const counters=document.querySelectorAll(".stat-box h2");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.textContent);

let count=0;

const timer=setInterval(()=>{

count++;

counter.textContent=count+"+";

if(count>=target){

clearInterval(timer);

counter.textContent=target+"+";

}

},25);

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ============================
// Hero Image Parallax
// ============================

window.addEventListener("scroll",()=>{

if(heroImage){

heroImage.style.transform=

`translateY(${window.scrollY*0.08}px)`;

}

});

// ============================
// Floating Hero Image
// ============================

if(heroImage){

setInterval(()=>{

heroImage.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:3000,

iterations:1

});

},3000);

}
// ============================
// Contact Form
// ============================

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const btn=contactForm.querySelector("button");

const oldText=btn.innerHTML;

btn.disabled=true;

btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';

setTimeout(()=>{

btn.innerHTML='<i class="fas fa-check"></i> Message Sent';

setTimeout(()=>{

btn.innerHTML=oldText;

btn.disabled=false;

contactForm.reset();

},2000);

},1500);

});

}

// ============================
// Back To Top Button
// ============================

const topButton=document.createElement("button");

topButton.className="top-btn";

topButton.innerHTML='<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show-top");

}else{

topButton.classList.remove("show-top");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ============================
// Button Hover Effect
// ============================

document.querySelectorAll(".btn,.outline-btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// ============================
// Image Fade
// ============================

document.querySelectorAll("img").forEach(img=>{

img.style.opacity="0";

img.style.transition="opacity .6s ease";

img.onload=()=>{

img.style.opacity="1";

};

});

// ============================
// Preloader
// ============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ============================
// Console Message
// ============================

console.clear();

console.log(

"%cNariman Portfolio V4",

"color:#f8b400;font-size:22px;font-weight:bold;"

);

console.log(

"%cDeveloped by Nariman Alizadeh",

"color:white;font-size:14px;"

);

console.log(

"%chttps://github.com/9wfw2kb6t6-ops",

"color:#00bfff;font-size:14px;"

);
