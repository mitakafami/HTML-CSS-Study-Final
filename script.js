let burger = document.querySelector(".burger");
let xMark = document.querySelector(".mark");
let mobileMenu = document.querySelector(".header_nav");
let currencyLanguage = document.querySelector(".currency_language")

burger.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    currencyLanguage.classList.add("show_currency")
    burger.style.display = "none";
    xMark.style.display = "block";
} )

xMark.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    currencyLanguage.classList.remove("show_currency")
    burger.style.display = "block";
    xMark.style.display = "none";
  }

);

