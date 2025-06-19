document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const animateElements = [
    { selector: "#hero", y: -50 },
    { selector: ".project-card", y: 50, stagger: 0.2, trigger: "#portfolio" },
    { selector: ".timeline-item", x: -50, stagger: 0.3, trigger: ".timeline" },
    { selector: ".dev-card", x: -50, stagger: 0.3 },
    { selector: "#about", y: 50, stagger: 0.3 },
    { selector: ".quote", y: 50, stagger: 0.3, trigger: "#stack" },
    { selector: ".marquee", x: 50, stagger: 0.3 },

  ];

  animateElements.forEach(({ selector, x = 0, y = 0, stagger = 0, trigger }) => {
    gsap.from(selector, {
      duration: 1,
      opacity: 0,
      x,
      y,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger || selector,
        start: "top center",
      },
    });
  });

  // Hero image fast spin effect on load
  gsap.fromTo(
    ".hero-img img",
    { opacity: 0, scale: 0, rotation: 0 },
    {
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 1.5,
      ease: "power3.out",
    }
  );

  // Smooth rotation on scroll
  gsap.to(".hero-img img", {
    rotation: 720,
    scrollTrigger: {
      trigger: ".hero-img",
      start: "top 90%",
      end: "bottom top",
      scrub: 1.5,
    },
  });
});