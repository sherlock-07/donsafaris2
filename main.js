const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

document.addEventListener('DOMContentLoaded', function () {
  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  
});

document.addEventListener('DOMContentLoaded', function () {
  const backBtns = document.querySelectorAll('.back-btn');

  backBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
          e.preventDefault();
          window.history.back();
      });
  });
});


const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

/*DESTINATION CARDS */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.querySelector('.card-content').style.background = 'rgba(0, 0, 0, 0.8)';
  });

  card.addEventListener('mouseleave', function() {
      this.querySelector('.card-content').style.background = 'rgba(0, 0, 0, 0.6)';
  });
});


ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".text h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".text p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
