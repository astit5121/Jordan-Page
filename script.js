// Scroll reveal effect
const elements = document.querySelectorAll("section, .timeline, .card");
window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Video toggle
const bgVideo = document.getElementById("bg-video");
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  if (bgVideo.paused) {
    bgVideo.play();
    toggleBtn.textContent = "Pause Video";
  } else {
    bgVideo.pause();
    toggleBtn.textContent = "Play Video";
  }
});

// Stats counter animation
const stats = document.querySelectorAll('.stat');
stats.forEach(stat => {
  let target = +stat.getAttribute('data-target');
  let count = 0;
  let increment = target / 200; // speed
  function update() {
    if (count < target) {
      count += increment;
      stat.innerHTML = Math.floor(count) + "<br><small>" + stat.querySelector('small').innerText + "</small>";
      requestAnimationFrame(update);
    } else {
      stat.innerHTML = target + "<br><small>" + stat.querySelector('small').innerText + "</small>";
    }
  }
  update();
});

// Fun Facts rotation
const funFacts = [
  "Michael Jordan played two seasons of minor league baseball during his first retirement.",
  "He wore the number 45 when he returned from retirement in 1995.",
  "Jordan once scored 63 points in a playoff game against the Celtics.",
  "He is the first billionaire in NBA history.",
  "Jordan was cut from his high school varsity basketball team as a sophomore."
];
let factIndex = 0;
setInterval(() => {
  factIndex = (factIndex + 1) % funFacts.length;
  document.getElementById("fun-fact").textContent = funFacts[factIndex];
}, 5000);
