const button = document.querySelector(".Bars");
const nav = document.querySelector(".HeaderNav");

button.addEventListener("click", () => {
    nav.classList.toggle("isActive");
    button.classList.toggle('TransformBars');
});