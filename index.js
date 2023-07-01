"use strict";

const image = document.getElementById('image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

const images = ['images/1.webp', 'images/2.webp', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];

let currentImageIndex = 0;


function updateImage() {
    image.src = images[currentImageIndex];

    if (currentImageIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (currentImageIndex === images.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

prevButton.addEventListener('click', function () {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage();
    }
});

nextButton.addEventListener('click', function () {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateImage();
    }
});

updateImage();