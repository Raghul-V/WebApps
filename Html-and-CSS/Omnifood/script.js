// toggles navbar on clicking the three-bars icon which is visible only on small screens
const navMoreBar = document.querySelector("nav i.fa-bars");
const navLinksCont = document.querySelector("nav ul");

navMoreBar.addEventListener("click", () => {
    navLinksCont.classList.add("show");
});

navLinksCont.querySelectorAll("li").forEach((el) => {
    el.addEventListener("click", () => {
        navLinksCont.classList.remove("show");
    });
});


// makes the navbar fixed (visible) on the screen top after scrolling below the header section
const header = document.querySelector("header");
const navbar = document.querySelector("nav");

document.addEventListener("scroll", () => {
    if (scrollY > header.offsetTop + header.offsetHeight - navbar.offsetHeight) {
        navbar.classList.add("fixed");
    }
    else {
        navbar.classList.remove("fixed");
    }
});


// adds smooth scroll functionality when navigating to sections by clicking any anchor tag
// and stops the scroll to the target element just below the navbar
const links = document.querySelectorAll("a");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const href = link.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop - navbar.offsetHeight,
            behavior: "smooth"
        });
    });
});
