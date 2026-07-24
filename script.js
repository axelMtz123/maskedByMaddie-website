gsap.registerPlugin(Flip, ScrollTrigger);

/* -- menu -- */

const menu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu li");
const hambuger = document.querySelector(".hamburger");

const menuTl = gsap.timeline({ paused: true, reversed: true });

gsap.set (menu, { xPercent: 100,})

menuTl
    .to(menu, { xPercent: 0, duration: 1, ease: "power2.inOut" })

hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");

    if (menuTl.reversed()) {
        menuTl.play();
    } else {
        menuTl.reverse();
    }
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        hambuger.classList.remove("active");
    })        
});