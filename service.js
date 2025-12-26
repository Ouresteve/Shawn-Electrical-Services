const texts = [
  "Electrical Installations",
  "Solar Power Systems",
  "CCTV & Security Solutions",
  "Electric Fence Setup",
  "Maintenance & Repairs",
  "Electrical Supplies"
];

let i = 0, j = 0, charIndex=0;
const typingText = document.getElementById("typing-text");

function type() {
  if (j < texts[i].length) {
    typingText.textContent += texts[i][j];
    j++;
    setTimeout(type, 80);
  } else {
    setTimeout(() => {
      typingText.textContent = "";
      j = 0;
      i = (i + 1) % texts.length;
      type();
    }, 1500);
  }
}
type();

const images = [
  "images/service1.jfif",
  "images/cctv3.jpg",
  "images/wiring.jpg",
  "images/hero.jpg"
];

let imgIndex = 0;
const heroImage = document.getElementById("heroImage");

setInterval(() => {
  imgIndex = (imgIndex + 1) % images.length;
  heroImage.src = images[imgIndex];
}, 4000);
