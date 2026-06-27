setTimeout(() => {
  showScreen("question1");
}, 3000);

function showScreen(id) {
  let screens = document.querySelectorAll(".screen");

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function showLetter() {
  showScreen("letterPage");
}

function showFinal() {
  showScreen("finalPage");
  startConfetti();
}

function moveNoButton(buttonId) {
  let button = document.getElementById(buttonId);

  let randomX = Math.random() * 250 - 125;
  let randomY = Math.random() * 250 - 125;

  button.style.transform = `translate(${randomX}px, ${randomY}px)`;

  if (buttonId === "no1") {
    document.getElementById("try1").innerText = "Try again baby 😭";
  } else {
    document.getElementById("try2").innerText = "No is not an option baby 😭💕";
  }
}

function startConfetti() {
  let confettiBox = document.getElementById("confetti");

  for (let i = 0; i < 60; i++) {
    let piece = document.createElement("div");
    piece.classList.add("confetti-piece");
    piece.innerText = ["🎉", "💕", "✨", "💗", "🌸"][Math.floor(Math.random() * 5)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 2 + "s";

    confettiBox.appendChild(piece);
  }
}
function showPlan() {
  showScreen("planPage");
}
function showQuotes() {
  showScreen("quotesPage");
}
function showRating() {
  showScreen("ratingPage");
}

function updateRating() {
  let rating = document.getElementById("ratingSlider").value;
  let ratingNumber = document.getElementById("ratingNumber");
  let ratingFace = document.getElementById("ratingFace");

  ratingNumber.innerText = rating;

  if (rating <= 3) {
    ratingFace.innerText = "😭 Sad";
  } else if (rating <= 5) {
    ratingFace.innerText = "😕 Disappointed";
  } else if (rating <= 8) {
    ratingFace.innerText = "🙂 Average";
  } else {
    ratingFace.innerText = "😍 Very Happy";
  }
}
function showThankYou() {
  showScreen("thankYouPage");
}
