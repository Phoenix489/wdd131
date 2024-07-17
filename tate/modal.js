
export function openModal(imgElement) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    
 
    if (imgElement.naturalWidth > imgElement.naturalHeight) {
        
        modalImg.classList.add("wide-modal-content");
        modalImg.classList.remove("modal-content");
    } else {
       
        modalImg.classList.add("modal-content");
        modalImg.classList.remove("wide-modal-content");
    }
    
    modalImg.src = imgElement.src;
}

export function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}


window.openModal = openModal;
window.closeModal = closeModal;