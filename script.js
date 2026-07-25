gsap.registerPlugin(Flip, ScrollTrigger);

/* -- menu -- */

const menu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu li");
const hambuger = document.querySelector(".hamburger");

const menuTl = gsap.timeline({ paused: true, reversed: true });

gsap.set (menu, { xPercent: 100,})

menuTl
    .to(menu, { xPercent: 0, duration: 0.6, ease: "power2.inOut" })

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

ScrollTrigger.create({
  trigger: "#artist-intro",
  start: "center 80%",
  once: true,
  onEnter: () => {
    const track = document.querySelector(".marquee-track");
    const width = track.scrollWidth / 3; // assuming the content is repeated 3 times

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    tl.fromTo(
      track,
      { x: 0 },
      {
        x: -width,
        duration: 12
      }
    );

    tl.timeScale(6);

    gsap.to(tl, {
      timeScale: 1,
      duration: 1.5,
      ease: "power2.out"
    });
  }
});

const ctaSplit = new SplitType(".cta span", { 
  types: "chars" 
});

const cta = document.querySelector(".cta");

cta.addEventListener("mouseenter", () => {
  gsap.fromTo(
    ctaSplit.chars,
    { y: -100 },
    {
      y: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.inOut"
    }
  );
});