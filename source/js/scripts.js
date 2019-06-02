//Hamburglar

var menuButton = document.getElementById("menu-button");
var topNav = document.getElementById("mobile-nav");

var navVisibility = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (navVisibility == false) {
    navVisibility = true;
    topNav.style.display = "flex";
  } else {
    navVisibility = false;
    topNav.style.display = "none";
  }
}

//Testimonials
var bubbleOne = document.getElementById("bubble-one");
var bubbleTwo = document.getElementById("bubble-two");
var bubbleThree = document.getElementById("bubble-three");
var bubbleFour = document.getElementById("bubble-four");

var oneIsPlaying = false;
var twoIsPlaying = false;
var threeIsPlaying = false;
var fourIsPlaying = false;

var oneAudio = new Audio("../../sounds/testimonial-1.mp3");
var twoAudio = new Audio("../../sounds/testimonial-2.mp3");
var threeAudio = new Audio("../../sounds/testimonial-3.mp3");
var fourAudio = new Audio("../../sounds/testimonial-4.mp3");

var quoteText = document.getElementById("quote-text");

var timer;

function toggleAudio(bubbleNumber) {
  if (bubbleNumber == 1) {
    if (oneIsPlaying) {
      resetBubbles();
    } else {
      oneIsPlaying = true;
      quoteText.innerHTML =
        "“This feels like I’m walking through a communal finals week stream of consciousness... it couldn’t be more strange, wonderful, absurd, and creative. Go URBN Center!”";
      bubbleOne.src = "images/TestimonialOneStop.png";
      bubbleTwo.src = "images/TestimonialTwo.png";
      bubbleThree.src = "images/TestimonialThree.png";
      bubbleFour.src = "images/TestimonialFour.png";
      oneAudio.play();
      twoAudio.pause();
      threeAudio.pause();
      fourAudio.pause();
      clearTimeout(timer);
      timer = setTimeout(function() {
        resetBubbles();
      }, 10000);
    }
  } else if (bubbleNumber == 2) {
    if (twoIsPlaying) {
      resetBubbles();
    } else {
      twoIsPlaying = true;
      quoteText.innerHTML =
        "“Yo this jawn is really really cool! 10/10 best app, yeah!”";
      bubbleOne.src = "images/TestimonialOne.png";
      bubbleTwo.src = "images/TestimonialTwoStop.png";
      bubbleThree.src = "images/TestimonialThree.png";
      bubbleFour.src = "images/TestimonialFour.png";
      oneAudio.pause();
      twoAudio.play();
      threeAudio.pause();
      fourAudio.pause();
      clearTimeout(timer);
      timer = setTimeout(function() {
        resetBubbles();
      }, 5000);
    }
  } else if (bubbleNumber == 3) {
    if (threeIsPlaying) {
      resetBubbles();
    } else {
      threeIsPlaying = true;
      quoteText.innerHTML =
        "“This is actually such a good idea, this is sick!”";
      bubbleOne.src = "images/TestimonialOne.png";
      bubbleTwo.src = "images/TestimonialTwo.png";
      bubbleThree.src = "images/TestimonialThreeStop.png";
      bubbleFour.src = "images/TestimonialFour.png";
      oneAudio.pause();
      twoAudio.pause();
      threeAudio.play();
      fourAudio.pause();
      clearTimeout(timer);
      timer = setTimeout(function() {
        resetBubbles();
      }, 3000);
    }
  } else if (bubbleNumber == 4) {
    if (fourIsPlaying) {
      resetBubbles();
    } else {
      fourIsPlaying = true;
      quoteText.innerHTML = "“This is a really cool app!”";
      bubbleOne.src = "images/TestimonialOne.png";
      bubbleTwo.src = "images/TestimonialTwo.png";
      bubbleThree.src = "images/TestimonialThree.png";
      bubbleFour.src = "images/TestimonialFourStop.png";
      oneAudio.pause();
      twoAudio.pause();
      threeAudio.pause();
      fourAudio.play();
      clearTimeout(timer);
      timer = setTimeout(function() {
        resetBubbles();
      }, 3000);
    }
  } else {
    console.log("nada");
  }
}

function resetBubbles() {
  bubbleOne.src = "images/TestimonialOne.png";
  bubbleTwo.src = "images/TestimonialTwo.png";
  bubbleThree.src = "images/TestimonialThree.png";
  bubbleFour.src = "images/TestimonialFour.png";

  oneIsPlaying = false;
  twoIsPlaying = false;
  threeIsPlaying = false;
  fourIsPlaying = false;

  oneAudio.currentTime = 0;
  twoAudio.currentTime = 0;
  threeAudio.currentTime = 0;
  fourAudio.currentTime = 0;

  oneAudio.pause();
  twoAudio.pause();
  threeAudio.pause();
  fourAudio.pause();
}
