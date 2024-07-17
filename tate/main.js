import { pictures } from './tate.mjs';
import { openModal, closeModal } from './modal.js';

window.openModal = openModal;
window.closeModal = closeModal;

function getRandomPicture(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateTemplate(picture) {
    return `
        <div class="picture-container">
            <img class="pic" src="${picture.image}" alt="${picture.title}" onclick="openModal(this)">
            <p class="paragraph"><strong>${picture.title}</strong><br>
            ${picture.year}, ${picture.dimensions}, ${picture.medium},<br>
            ${picture.description}</p>
        </div>
    `;
}

function displayRandomPicture(picture) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = generateTemplate(picture); 
}


const randomPicture = getRandomPicture(pictures);
displayRandomPicture(randomPicture);

