// Toggle Dark Mode
function toggleDarkMode() {
  const root = document.documentElement;
  root.classList.toggle('dark');
}

// Event Listener for Dark Mode Toggle Button
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);