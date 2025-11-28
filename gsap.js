gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const greetings = document.querySelectorAll(".greeting");

greetings.forEach((greeting) => {
    const splitGreet = new SplitText(greeting, {
  type: "chars",
  charClass: "letter",
});

const greetLetter = greeting.querySelectorAll("div");
greetLetter.forEach((letter) => {
    letter.style.color = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
})

gsap.fromTo(
  splitGreet.chars,
  {
    // opacity: 0,
    rotateZ: 360,
    // x: (i) => (Math.random() - 0.5) * 200,
    // y: (i) => (Math.random() - 0.5) * 200,
    // x: -20,
    y: 74,
},
{
    opacity: 1,
    rotateY: 360,
    // rotateX: 0,
    x: 0,
    y: 0,
    duration: 0.4,
    stagger: 0.2,
  }
);
})



gsap.to(".greeting",
    {
        y: -74,
        duration: 0,
    }
)