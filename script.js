function enterSite() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("memoryScreen").classList.remove("hidden");

  document.getElementById("bgMusic").play();

  setTimeout(() => {
    document.getElementById("memoryScreen").classList.add("hidden");
    document.getElementById("photoScreen").classList.remove("hidden");
  }, 4000);
}

function showProposal() {
  document.getElementById("photoScreen").classList.add("hidden");
  document.getElementById("proposalScreen").classList.remove("hidden");
}

function moveNo() {
  let btn = document.querySelector(".no");
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

function yesClicked() {
  document.getElementById("proposalScreen").classList.add("hidden");
  document.getElementById("finalScreen").classList.remove("hidden");

  startConfetti();
}

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);

/* Glowing cursor */
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

/* Confetti */
function startConfetti() {
  for (let i = 0; i < 120; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    confetti.style.top = "50%";
    confetti.style.left = "50%";
    confetti.style.opacity = 1;
    confetti.style.zIndex = 9999;
    document.body.appendChild(confetti);

    let angle = Math.random() * 2 * Math.PI;
    let distance = Math.random() * 400;

    confetti.animate([
      { transform: "translate(0,0)", opacity: 1 },
      {
        transform: `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px)`,
        opacity: 0
      }
    ], {
      duration: 1500,
      easing: "ease-out"
    });

    setTimeout(() => confetti.remove(), 1500);
  }
}
