document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarUl = document.querySelector(".navbar ul");

  menuToggle.addEventListener("click", function () {
    navbarUl.classList.toggle("active");
  });
});
