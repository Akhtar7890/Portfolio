// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate skill percentages when skills section is in view
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress-bar');

const animateSkills = () => {
  progressBars.forEach(bar => {
    bar.style.width = '0'; // Reset width
    setTimeout(() => {
      bar.style.width = bar.style.getPropertyValue('--progress');
    }, 100);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
    }
  });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Project carousel with left swipe animation
const projectCards = document.querySelectorAll('.project-card');
let currentProjectIndex = 0;

const showNextProject = () => {
  // Hide current project
  projectCards[currentProjectIndex].classList.add('hidden');
  projectCards[currentProjectIndex].classList.remove('swipe-left');

  // Move to next project
  currentProjectIndex = (currentProjectIndex + 1) % projectCards.length;

  // Show next project with animation
  projectCards[currentProjectIndex].classList.remove('hidden');
  projectCards[currentProjectIndex].classList.add('swipe-left');
};

// Change project every 3 seconds
setInterval(showNextProject, 3000);