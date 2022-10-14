const navMenu = document.getElementById('navmenu')
const navLinks = navMenu.querySelectorAll("a");

// when a link is clicked the expanded navMenu collapses
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});


const newletterEmailInput = document.getElementById("newsletter-email-input");

// shows validation only if the input field is not blank
newletterEmailInput.addEventListener("input", () => {
    let newsletterForm = document.getElementById("newsletter-form");

    if (newletterEmailInput.value !== "") {
        newsletterForm.classList.add("was-validated");
    }
    else {
        newsletterForm.classList.remove("was-validated");
    }
});


const navbarHeight = document.querySelector('nav').offsetHeight;

// when navlinks are used to navigate, this scrolls to the content and positions them after (next to) the fixed navbar
document.querySelectorAll(".navbar-nav a").forEach((el) => {
    el.addEventListener('click', (event) => {
        if (el.hash !== "") {
            event.preventDefault();

            let targetId = el.hash.slice(1);
            let targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight + 1,
                behavior: 'smooth'
            });
        }
    });
});


const backToTopBtn = document.getElementById("backtotop-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    }
    else {
        backToTopBtn.style.display = "none";
    }
})

