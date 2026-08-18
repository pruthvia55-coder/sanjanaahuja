/*====================================
        BY SANJANA
====================================*/

AOS.init({
    duration:1200,
    once:true,
    offset:120
});


/*====================================
        PRELOADER
====================================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    loader.style.opacity="0";

    loader.style.visibility="hidden";

    loader.style.transition="1s";

});


/*====================================
        NAVBAR ON SCROLL
====================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(10,10,10,.88)";

        navbar.style.padding="18px 80px";

        navbar.style.boxShadow="0 20px 40px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.background="rgba(0,0,0,.18)";

        navbar.style.padding="25px 80px";

        navbar.style.boxShadow="none";

    }

});


/*====================================
        HERO PARALLAX
====================================*/

const hero=document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

    let value=window.scrollY;

    hero.style.transform="translateY("+value*.25+"px)";

});


/*====================================
        SMOOTH BUTTON SCROLL
====================================*/

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});


/*====================================
        CURSOR GLOW
====================================*/

const glow=document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/*====================================
        HERO TEXT ANIMATION
====================================*/

const heading=document.querySelector(".hero-content h1");

heading.animate([

{

opacity:0,

transform:"translateY(50px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1800,

fill:"forwards"

});


/*====================================
        SCROLL PROGRESS BAR
====================================*/

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progressValue=(scrollTop/height)*100;

progress.style.width=progressValue+"%";

});


/*====================================
        FLOATING PARTICLES
====================================*/

for(let i=0;i<30;i++){

let particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDelay=Math.random()*10+"s";

particle.style.animationDuration=6+Math.random()*8+"s";

document.body.appendChild(particle);

}

document.querySelectorAll(".video-card").forEach(card=>{

const video=card.querySelector("video");

card.addEventListener("mouseenter",()=>{

video.play();

});

card.addEventListener("mouseleave",()=>{

video.pause();
video.currentTime=0;

});

});

document.querySelectorAll(".video-card").forEach(card => {

    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {
        video.play();
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

});

/*==============================
      MOBILE BRUSH
==============================*/

const brush=document.getElementById("mobileBrush");

let targetX=0;
let targetY=0;

let currentX=0;
let currentY=0;

function animateBrush(){

currentX+=(targetX-currentX)*0.18;
currentY+=(targetY-currentY)*0.18;

brush.style.left=currentX+"px";
brush.style.top=currentY+"px";

requestAnimationFrame(animateBrush);

}

animateBrush();

document.addEventListener("touchmove",(e)=>{

const touch=e.touches[0];

targetX=touch.clientX+20;
targetY=touch.clientY-20;

brush.style.opacity=1;

});

document.addEventListener("touchend",()=>{

brush.style.opacity=0;

});

function createSpark(x,y){

const spark=document.createElement("div");

spark.className="spark";

spark.style.left=x+"px";
spark.style.top=y+"px";

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},800);

}

document.addEventListener("touchmove",(e)=>{

const touch=e.touches[0];

targetX=touch.clientX+20;
targetY=touch.clientY-20;

brush.style.opacity=1;

createSpark(touch.clientX,touch.clientY);

});
