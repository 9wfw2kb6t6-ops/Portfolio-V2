// Loader

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},2200);

});

// Cursor

const cursor=document.querySelector(".cursor");

const blur=document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

blur.style.left=e.clientX+"px";
blur.style.top=e.clientY+"px";

});

// Scroll Progress

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-window.innerHeight;

const progress=

(window.scrollY/total)*100;

document.querySelector(".progress-bar-top").style.width=

progress+"%";

});
// Sticky Header

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.classList.add("active");

}else{

header.classList.remove("active");

}

});

// Mobile Menu

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});
/* =======================================
Typing Effect
======================================= */

const typing=document.querySelector(".typing-text");

const texts=[

"Frontend Developer",

"UI / UX Designer",

"Creative Coder"

];

let t=0;

let c=0;

let removing=false;

function typeEffect(){

if(!typing) return;

let word=texts[t];

if(!removing){

typing.textContent=word.substring(0,c++);

if(c>word.length){

removing=true;

setTimeout(typeEffect,1600);

return;

}

}else{

typing.textContent=word.substring(0,c--);

if(c<0){

removing=false;

t++;

if(t>=texts.length){

t=0;

}

}

}

setTimeout(typeEffect,removing?45:90);

}

typeEffect();

/* =======================================
Counter
======================================= */

document.querySelectorAll(".stat-card h3").forEach(counter=>{

let target=+counter.dataset.count;

let value=0;

let speed=target/60;

function update(){

value+=speed;

if(value<target){

counter.innerHTML=Math.ceil(value);

requestAnimationFrame(update);

}else{

counter.innerHTML=

target==100 ? "100%" : target+"+";

}

}

update();

});
/* =======================================
Hero Parallax
======================================= */

const heroImage = document.querySelector(".hero-image-card");

document.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x = (window.innerWidth/2 - e.clientX)/35;

const y = (window.innerHeight/2 - e.clientY)/35;

heroImage.style.transform =
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

if(heroImage){

heroImage.style.transform="rotateX(0) rotateY(0)";

}

});
/* =======================================
Tech Cards Animation
======================================= */

const techCards=document.querySelectorAll(".tech-card");

techCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

});
/* =======================================
About Animation
======================================= */

const infoBoxes=document.querySelectorAll(".info-box");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

infoBoxes.forEach(box=>{

box.style.opacity="0";

box.style.transform="translateY(50px)";

box.style.transition=".7s";

observer.observe(box);

});