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