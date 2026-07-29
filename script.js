gsap.registerPlugin(Flip, ScrollTrigger);

/* -- menu -- */

const menu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu li a");
const hambuger = document.querySelector(".hamburger");

const menuTl = gsap.timeline({ paused: true, reversed: true });

gsap.set (menu, { xPercent: 100,})

menuTl
    .to(menu, { xPercent: 0, duration: 0.6, ease: "power2.inOut" })
    .from(".nav-menu li", { xPercent: 50, duration: 0.6, ease: "bounce2.inOut", stagger: 0.1 }, "<")

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

        if (menuTl.reversed()) {
          menuTl.play();
        } else {
          menuTl.reverse();
        }
    })        
});

/* -- hero --*/

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

gsap.from (".hero-img", ({
  yPercent: -100,
  ease: "power2.out",
  duration: .6,
}))

const splitH1 = new SplitType("#hero h1", {
  types: "chars"
});

gsap.from(
  splitH1.chars,
  { y: 100,
    stagger: 0.05,
    ease: "power2.out",
    duration: 0.6
   },
);
/* gallery */

const galleryImgs = document.querySelectorAll(".img-wrapper");
const gallery = document.querySelector("#gallery");
const galleryTitle = document.querySelector("#gallery h2");

ScrollTrigger.matchMedia({
  "(min-width: 769px)": () => {

    gsap.from ("#gallery h2 span", {
    xPercent: -100,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: gallery,
      start: "top 80%",
      end: "top 10%%",
      scrub: true,
    }
  })

  gsap.utils.toArray('.gallery-container > div:nth-of-type(odd)').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: -200,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'top 10%',
        toggleActions: 'play none none reverse',
        scrub: true,
      }
    });
  });

  gsap.utils.toArray('.gallery-container > div:nth-of-type(even)').forEach((el) => {
    gsap.from(el, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'top 10%',
        toggleActions: 'play none none reverse',
        scrub: true,
      }
    });
  });
  }
})

ScrollTrigger.matchMedia({
  "(max-width: 769px)": () => {

    gsap.from ("#gallery h2 span", {
    xPercent: -100,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: gallery,
      start: "top 80%",
      end: "top 50%%",
      scrub: true,
    }
  })

  gsap.utils.toArray('.gallery-container > div:nth-of-type(odd)').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: -200,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'top 70%',
        toggleActions: 'play none none reverse',
        scrub: true,
      }
    });
  });

  gsap.utils.toArray('.gallery-container > div:nth-of-type(even)').forEach((el) => {
    gsap.from(el, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'top 70%',
        toggleActions: 'play none none reverse',
        scrub: true,
      }
    });
  });
  }
})

/* -- about -- */

gsap.from("#about .img-wrapper", {
  xPercent: 100,
  ease: "power2.out",
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
  }
});

const aboutSplitH2 = new SplitType("#about h2", {
  types: "chars"
});

gsap.from(aboutSplitH2.chars, {
  yPercent: 100,
  ease: "power2.out",
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#about",
  }
});