/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Get the button and modal elements
const openChatBtn = document.getElementById('openChatBtn');
const chatModal = document.getElementById('chatModal');
const closeModal = chatModal.querySelector('.close');

// Function to open the chat modal
function openChat() {
    chatModal.style.display = 'block';
}

// Function to close the chat modal
function closeChat() {
    chatModal.style.display = 'none';
}

// Event listeners
openChatBtn.addEventListener('click', openChat);
closeModal.addEventListener('click', closeChat);

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target == chatModal) {
        closeChat();
    }
});


/*===============  SWIPER  popular ===============*/
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

/*Testominial*/

