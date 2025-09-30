function showTab(tab) {
  document.querySelectorAll(".content").forEach(div => {
    div.classList.remove("active");
  });
  document.getElementById(tab).classList.add("active");
}

// Animasi hati jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 800);
