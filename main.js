const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const randomBtn = document.querySelector("button.random");
const overlay = document.querySelector('.overlay');

for (let i = 0; i < 5; i++) {
  const newImage = document.createElement("img");

  newImage.setAttribute("src", `./images/pic${i+1}.jpg`);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    displayedImage.src = e.target.src;
  }
}

btn.onclick = function() {
  const color = btn.getAttribute("class");
  if (color === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}

randomBtn.onclick = function() {
  displayedImage.src = `./images/pic${Math.floor(Math.random()*5)+1}.jpg`;
}
