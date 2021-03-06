// Initialize Plugins
new WOW().init();

// DOM Elements
const menuOverlay = document.querySelector('.menu-overlay');
const menuBtn = document.querySelector('.menu-btn');
const menuLine = document.querySelectorAll('.btn-line');
const menuLines = document.querySelector('.btn-lines');
const menuText = document.querySelector('#menu-text');
const header = document.querySelector('header');

// Default Menu State
let showMenu = false;

// Event Listeners for menu button
menuBtn.addEventListener('click', function(){
  displayMenu();
  colorChange();
})

// Display animation on mouse over
menuLines.onmouseover = function(){
  animate();
}

// Display Navigation Menu
function displayMenu() {
  if(!showMenu) {
    menuOverlay.classList.add('show');
    menuBtn.classList.add('show');
    menuText.style.display = 'none';
    showMenu = true;
  } else {
    menuOverlay.classList.remove('show');
    menuBtn.classList.remove('show');
    menuText.style.display = 'block';
    showMenu = false;
  }
}

// Change menu color
function colorChange() {
  menuLine.forEach(function(line) {
    if(showMenu) {
      line.style.backgroundColor = "#4EA9F5";
    } else {
      line.style.backgroundColor = "white";
    }
  });
}

// Trigger Animation
function animate() {
  menuLines.onmouseover = function() {
    menuLines.classList.add('animated');
    menuLines.classList.add('pulse');
  }
}

// Hide Menu when navigation links clicked
function hide() {
  displayMenu();
  colorChange();
}
