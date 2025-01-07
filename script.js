const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Toggle menu on hamburger button click
menuBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click event from propagating to the document
  menu.classList.toggle('hidden');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target)) {
    menu.classList.add('hidden');
  }
});
