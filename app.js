const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navBar = document.querySelector("nav");
  navBar.classList.toggle("nav-active");
});
