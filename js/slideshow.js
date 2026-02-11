

// スライドショー
const images = [
  "image/book.png",
  "image/book2-1.png",
  "image/booknight.png"
];

let current = 0;
const img = document.getElementById("slideshow");

setInterval(() => {
  current = (current + 1) % images.length;
  img.src = images[current];
}, 3000);
