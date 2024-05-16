let menuButton = document.querySelector(".menu-button")
let gallery = document.querySelector('.gallery')
function displayMenu() {
    const nav = document.querySelector("nav")
    nav.classList.toggle("hide")
}

function handleResize() {
    const nav = document.querySelector("nav")
    if (window.innerWidth > 1000) {
        nav.classList.remove("hide")
    }
    else {
        nav.classList.add("hide")
    }
 }

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const src = clickedElement.getAttribute("src");
    const srcParts = src.split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newSrc = srcParts[0] + "-full.jpeg";
	// insert the viewerTemplate into the top of the body element
    const viewerTemplate = `
    <div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${newSrc}" alt="Full Image">
    </div>
    `;
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate);
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}


gallery.addEventListener("click", viewHandler)
window.addEventListener("resize", handleResize)
menuButton.addEventListener("click", displayMenu)


