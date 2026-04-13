let sliderIndex = 0;
const slides = document.getElementById("slides")
const totalSlides = document.querySelectorAll(".slide")
const dotContainer = document.getElementById("dots")

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span")
    dot.classList.add("dots")
    dot.onclick = () => {
        sliderIndex = i;

    }
    dotContainer.appendChild(dot)
}

const dots = document.querySelectorAll(".dots")
dots[0].classList.add("active");


function showSlide() {
    if (sliderIndex >= totalSlides.length) {
        sliderIndex = 0;
    }

    if (sliderIndex < 0) {
        sliderIndex = totalSlides.length - 1;
    }

    slides.style.transform = `translateX(-${sliderIndex * 100}%)`

    dots.forEach(dot => {
        dot.classList.remove("active")
        dot[sliderIndex].classList.add("active")
    })
}

function moveSlide(n) {
    sliderIndex += n;
    showSlide()
}

let autoslide = setInterval(() => {
    moveSlide(1);
}, 3000);

showSlide();






