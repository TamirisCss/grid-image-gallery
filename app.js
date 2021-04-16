const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () =>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle"); //to animate burger menu, styled in css
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle"); //burger change color to black
    })
})