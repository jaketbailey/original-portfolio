
const images = document.querySelectorAll(".zoom")

for (let i = 0; i < images.length; i++) {
    const num = i + 1
    const imgBg = document.getElementById('imgbg' + num)
    const zoomedImg = document.getElementById("zoomedimg" + num);
    const captionText = document.getElementById("caption" + num);
    images[i].addEventListener('click', () => {
        imgBg.style.display = "block";
        zoomedImg.src = images[i].src;
        zoomedImg.alt = images[i].alt;
        captionText.innerHTML = images[i].alt;
        captionText.classList.add('imgcaption')
    })
    imgBg.addEventListener('click', () => {
        setTimeout(function() {
            imgBg.style.display = "none";
          }, 100);
    })
}

console.log(images)
