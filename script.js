function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skill");
  
    skills.forEach(skill => {
      const rating = skill.getAttribute("data-rating");
      const fill = skill.querySelector(".fill");
      fill.style.width = rating + "%";
    });
  });
  
