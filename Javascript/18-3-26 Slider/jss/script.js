
let slides = ["🌴", "🌸", "🌻", "🌿", "🍁"]

let colors = ["#40f428", "rgba(234, 60, 153, 0.93)", "#e6ea30", "#1fef3e", "#f4971dd0"]

let current = 0;

let box = document.getElementById("slide")
let counter = document.getElementById("counter")

const BtnColorChange = () => {
    for (let i = 0; i < 2; i++) {
        let btn = document.getElementsByClassName("btn")[i]
        btn.style.backgroundColor = colors[current]
    }
}

const SliderShow = () => {
    box.textContent = slides[current]
    box.style.backgroundColor = colors[current]
    counter.textContent = (current + 1) + "/" + slides.length
}

document.getElementById("next").addEventListener("click", () => {
    current = current + 1
    if (current >= slides.length) {
        current = 0;
    }
    SliderShow();
    BtnColorChange();
})

document.getElementById("prev").addEventListener("click", () => {
    current = current - 1
    if (current < 0) {
        current = slides.length - 1;
    }
    SliderShow();
    BtnColorChange();
})



setInterval(() => {
    current = current + 1
    if (current >= slides.length) {
        current = 0
    }
    SliderShow();
    BtnColorChange();
}, 3000)

SliderShow();
BtnColorChange();
