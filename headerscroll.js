function headerScroll() {
  const header = document.querySelector(".header-nav-container");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
// const header = document.getElementById("header");

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 0) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

// window.addEventListener("scroll", function () {
//   const header = document.getElementById("header");
//   if (window.scrollY > 0) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

// const header = document.getElementById("header");
// header.addEventListener("scroll", function () {
//   if (window.scrollY > 0) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });
