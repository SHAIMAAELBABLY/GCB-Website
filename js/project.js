// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

closeMenu.addEventListener('click', function() {
    navLinks.classList.remove('active');
});

// Form Submission with Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // Optionally, you could send the data to a server here
    } else {
        alert('Please fill in all fields.');
    }
});

// Array of background images for #home section
const backgrounds = [
    'url("imgs/gcb21.png")',
    'url("imgs/ISO3.svg")',
    'url("imgs/ISO4.svg")',
    'url("imgs/ISO5.svg")',
    'url("imgs/ISO6.svg")',
];

let currentBackground = 0;

// Function to change background image
 function changeBackground() {
//     const homeSection = document.getElementById('home');
//     homeSection.style.backgroundImage = backgrounds[currentBackground];
//     currentBackground = (currentBackground + 1) % backgrounds.length;
 }
// Initial background set
changeBackground();

 // Change background every 5 seconds
 setInterval(changeBackground, 5000);

// Scroll-to-top button functionality
const upArrow = document.getElementById('upArrow');

upArrow.addEventListener("click", getToTheTop);

function getToTheTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Scroll animation for the contact section
document.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contact');
    if (isInViewport(contactSection)) {
        contactSection.classList.add('animate');
    }
});

// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from closing the submenu
            this.classList.toggle('active'); // Toggle the dropdown active state
        });
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active'); // Remove active class from all dropdowns
        });
    });
});

// Array of image sources
const imageSources = [
    'imgs/ISO3.svg',
    'imgs/ISO4.svg',
    'imgs/ISO5.svg',
    'imgs/ISO6.svg' // Ensure these paths are correct
];

// Current image index
let currentImageIndex = 0;

// Get the image element
const mainImg = document.querySelector('.main-img img');

// Function to change the image
function changeImage() {
    // Update the image src to the next image in the array
    mainImg.src = imageSources[currentImageIndex];

    // Increment the index to get the next image
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
}

// Change the image every 5 seconds (5000 ms)
setInterval(changeImage, 5000);