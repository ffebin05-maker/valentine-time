// =============================
// 1. WEDDING DATE
// =============================
const weddingDate = new Date("2025-05-19T10:30:00");


// =============================
// 2. ENTER EXPERIENCE BUTTON
// =============================
function startExperience() {
  // Hide hero section
  document.querySelector(".hero").classList.add("hidden");

  // Show main content
  document.getElementById("mainContent").classList.remove("hidden");

  // Play background music
  const music = document.getElementById("bgMusic");
  music.volume = 0.4; // soft romantic volume
  music.play();
}


// =============================
// 3. MARRIAGE TIMER
// =============================
function updateMarriageTimer() {
  const now = new Date();
  const diff = now - weddingDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;
}

// Start timer immediately
updateMarriageTimer();
setInterval(updateMarriageTimer, 1000);


// =============================
// 4. SLIDESHOW
// =============================
const photos = [
  "assets/photo1.jpg",
  "assets/photo2.jpg",
  "assets/photo3.jpg",
  "assets/photo4.jpg",
  "assets/photo5.jpg"
];

let current = 0;

function changeSlide() {
  current = (current + 1) % photos.length;
  document.getElementById("slide").src = photos[current];
}

setInterval(changeSlide, 5000);


// =============================
// 5. FINAL BUTTON
// =============================
function showFinal() {
  document.getElementById("forever").classList.remove("hidden");
}


// =============================
// 6. SPARKLE EFFECT
// =============================
document.addEventListener("mousemove", function(e) {
  const sparkle = document.createElement("div");

  sparkle.style.position = "fixed";
  sparkle.style.width = "6px";
  sparkle.style.height = "6px";
  sparkle.style.background = "gold";
  sparkle.style.borderRadius = "50%";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "9999";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 500);
});
