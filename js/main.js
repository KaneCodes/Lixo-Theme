init();
// DOM Elements
const menuOverlay = document.querySelector('.menu-overlay');
const menuBtn = document.querySelector('.menu-btn');
const menuLine = document.querySelectorAll('.btn-line');
const menuLines = document.querySelector('.btn-lines');

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

// Functions //

// Initialize Plugins
 function init() {
   $('#fakeLoader').fakeLoader({
     timeToHide: 1900,
     zIndex: '9999',
     spinner: 'spinner3',
     bgColor: 'white'
   });
   new WOW().init();
 }

// Display Navigation Menu
function displayMenu() {
  if(!showMenu) {
    menuOverlay.classList.add('show');
    menuBtn.classList.add('show');
    showMenu = true;
  } else {
    menuOverlay.classList.remove('show');
    menuBtn.classList.remove('show');
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
