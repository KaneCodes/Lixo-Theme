// DOM Elements
const menuOverlay = document.querySelector('.menu-overlay');
const menuBtn = document.querySelector('.menu-btn');
const menuLine = document.querySelectorAll('.btn-line');

// Default Menu State
let showMenu = false;

// Event Listener for menu button
menuBtn.addEventListener('click', function(){
  displayMenu();
  colorChange();
})

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
