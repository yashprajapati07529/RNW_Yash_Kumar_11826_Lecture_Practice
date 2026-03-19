let slides = ["./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
    "./images/image4.jpg",
    "./images/image5.jpg"
];

const imagestab1 = document.getElementById("1");
const imagestab2 = document.getElementById("2");
const imagestab3 = document.getElementById("3");
const imagestab4 = document.getElementById("4");
const imagestab5 = document.getElementById("5");


imagestab1.src = slides[0];
imagestab2.src = slides[1];
imagestab3.src = slides[2];
imagestab4.src = slides[3];
imagestab5.src = slides[4];

let current = 0;

let box = document.getElementById("slide");
let counter = document.getElementById("counter");

const slidershow = () => {
    box.style.backgroundImage = `url('${slides[current]}')`;
    box.style.backgroundSize = "cover";
    box.style.backgroundPosition = "center";

    counter.textContent = (current + 1) + " / " + slides.length;
}


document.getElementById("next").addEventListener("click", () => {
    current = current + 1;
    if (current >= slides.length) {
        current = 0;
    }
    slidershow()
})

document.getElementById("prev").addEventListener("click", () => {
    current = current - 1;
    if (current < 0) {
        current = slides.length - 1;
    }
    slidershow()
})

slidershow()