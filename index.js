document.querySelector("#copyright-year").innerText = new Date().getFullYear();

$("#scroll-icon").click(() => {
    $('html, body').animate({
        scrollTop: $(".furniture-row").offset().top,
    })
})
const mobileNav = document.querySelector(".mobile-navigation ul");

document.querySelector(".mobile-navigation i").addEventListener("click", () => {
  mobileNav.classList.contains("show")
    ? mobileNav.classList.remove("show")
    : mobileNav.classList.add("show");
  console.log(mobileNav);
});

ScrollReveal().reveal(".furniture-row");
