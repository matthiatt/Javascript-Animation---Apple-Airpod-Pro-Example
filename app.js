//Scroll Magic Main-Page: https://scrollmagic.io/
// Scroll Magic Documentation: https://scrollmagic.io/docs/index.html

// GSAP3 CDN Document Link: https://greensock.com/docs/
// GSAP3 CheetSheet Link: https://greensock.com/cheatsheet/

const animationIntro = document.querySelector(".intro");
const mp4 = animationIntro.querySelector("video");
// Instead of grabbing the document, like normal - I instead decided to attach 'animationIntro' to the next querySelector().
const text = animationIntro.querySelector("h1");

const testSection = document.querySelector("section");
const terrminate = testSection.querySelector("h1");
// Same thing as I did on line 2.

// Following documentation under the 'Usage' area.
const controller = new ScrollMagic.Controller();

//First scene constructor
let scene = new ScrollMagic.Scene({
  duration: 9000, // 9000 is an example time right now. if the video is 9min long, I would possibly put it to 9000. every min = 1000.
  triggerElement: animationIntro, // Calling the first variable defined on line 4.
  triggerHook: 0, // This should be added to define when the animation will start/trigger.
})
  .addIndicators() // To get more familiar with this method, then visit - https://scrollmagic.io/docs/debug.addIndicators.html
  .setPin(animationIntro) // see more at: https://scrollmagic.io/docs/ScrollMagic.Scene.html
  .addTo(controller); // Linked in a previous document.

// Using TweenMax from CDN documentation.
const textAnimation = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
// 'Text' is the thing here we want animated.
// '3' is the durration.

// Second scene Constructor.
let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: animationIntro,
  triggerHook: 0,
  // All previously explained from lines 19 - 21.
})
  .setTween(textAnimation) // To get more familiar with this method, then visit - http://scrollmagic.io/docs/animation.GSAP.html
  // setTween() - is a method used in ScrollMagic GSAP plugin.
  .addTo(controller); //Ref - line 25.

// Variables for video animation.
let scrollSpeed = 0.1;
let scrollPosition = 0;
let timeDelay = 0;

scene.on("update", (e) => {
  // Calling an event in the parameters.
  scrollPosition = e.scrollPosition / 1000; // Like what I talked about on line 22. But I am defining the length of time based on the scroll position.
  //console.log(scrollPosition);
});

setInterval(() => {
  timeDelay += (scrollPosition - timeDelay) * scrollSpeed;
  console.log(scrollPosition, timeDelay);

  mp4.currentTime = timeDelay;
}, 33.3);
