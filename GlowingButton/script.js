// Select the toggle switch
const toggle = document.getElementById('toggle');

// Add a click event listener to toggle the ON/OFF state
toggle.classList.add('off'); // Default state

toggle.addEventListener('click', () => {
  toggle.classList.toggle('on');
  toggle.classList.toggle('off');
});
