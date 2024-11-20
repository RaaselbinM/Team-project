<script>
// JavaScript for toggling sections
function showSection(sectionId) {
// Hide all sections
const sections = document.querySelectorAll('.content-section');
sections.forEach(section => section.classList.remove('active'));

// Show the selected section
const targetSection = document.getElementById(sectionId);
if (targetSection) {
targetSection.classList.add('active');
}
}

// Initialize by showing the first section (Home)
document.addEventListener('DOMContentLoaded', () => {
showSection('home');
});

// Handle form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
contactForm.addEventListener('submit', function (event) {
event.preventDefault();
const name = document.getElementById('name').value;
alert(`Thank you, ${name}! Your message has been sent.`);
contactForm.reset();
});
}
</script>