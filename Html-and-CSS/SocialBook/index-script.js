const profilePicContainer = document.getElementById("profile-pic-container");
const toggleMenu = document.getElementById("toggle-menu");

// add a class called 'expanded' which opens (toggles) a menu when the profile pic on the navbar is clicked
profilePicContainer.addEventListener("click", () => {
    if (!toggleMenu.offsetHeight) {
        toggleMenu.classList.add("expanded");
    }
});

// removes the class called 'expanded' which closes the toggle menu when anywhere other than the menu is clicked
document.addEventListener("click", (event) => {
    if (!toggleMenu.contains(event.target) && toggleMenu.offsetHeight) {
        toggleMenu.classList.remove("expanded");
    }
});


const themeToggleContainer = document.getElementById("theme-toggle-container");
const themeToggleButton = themeToggleContainer.querySelector(".theme-toggle-button");

// changes from light to dark or from dark to light theme and positions the themeToggleButton to either left or right
themeToggleContainer.addEventListener("click", () => {
    themeToggleButton.classList.toggle("dark");
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", localStorage.getItem("theme") === "light" ? "dark" : "light");
});


// restores the color theme to last set theme before refresh or close window
if (localStorage.getItem("theme") === "dark") {
    themeToggleButton.classList.add("dark");
    document.body.classList.add("dark-theme");
}


const shortcutsSeeMore = document.getElementById("shortcuts-see-more");

// shows extra elements when 'see more' is clicked and hides the extra elements when 'see less' is clicked
shortcutsSeeMore.addEventListener("click", () => {
    const moreShortcuts = document.querySelectorAll(".shortcuts .extra");
    moreShortcuts.forEach((shortcut) => {
        shortcut.classList.toggle("hide");
    });
    shortcutsSeeMore.innerText = (shortcutsSeeMore.innerText === "See More") ? "See Less" : "See More";
});


