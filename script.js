const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* YES grows + confetti */
yesBtn.addEventListener("click", () => {
  let size = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size + 10 + "px";
  explodeConfetti();
});

/* NO screams + escapes */
const scream = new Audio(
  "https://www.myinstants.com/media/sounds/wilhelm-scream.mp3"
);

noBtn.addEventListener("mouseover", () => {
  scream.currentTime = 0;
  scream.play();

  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  let size = parseFloat(getComputedStyle(noBtn).fontSize);
  noBtn.style.fontSize = Math.max(size - 2, 10) + "px";
});

/* Cursor hearts */
document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "cursor-heart";
  heart.innerText = "💗";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

/* Confetti */
function explodeConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.backgroundColor =
      ["#ff4d6d", "#ffb3c1", "#ffffff", "#ff758f"][
        Math.floor(Math.random() * 4)
      ];
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
}

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 250);
