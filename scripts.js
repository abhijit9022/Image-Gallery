let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = "block";
    modalImage.src = images[index].src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('modal-image').src = images[currentIndex].src;
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

