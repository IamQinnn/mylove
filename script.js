function showTab(tab) {
  document.querySelectorAll(".content").forEach(div => {
    div.classList.remove("active");
  });
  document.getElementById(tab).classList.add("active");
}
function showContent(id) {
      const contents = document.querySelectorAll('.content');
      contents.forEach(c => c.style.display = 'none');
      if(id) {
        document.getElementById(id).style.display = 'block';
      }
function showContent(id) {
  // sembunyikan semua konten
  document.getElementById('home').style.display = 'none';
  document.getElementById('letter').style.display = 'none';

  // ambil elemen yang dipilih
  let el = document.getElementById(id);
  el.style.display = 'block';

  // kasih efek fade setiap kali muncul
  el.classList.remove('fade');
  void el.offsetWidth; // trik biar animasi bisa restart
  el.classList.add('fade');
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
