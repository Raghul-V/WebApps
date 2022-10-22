const personalDetails = document.querySelector(".personal-details");
const dummyHeight = document.querySelector(".dummy-height");
const navbarHeight = document.querySelector("nav").offsetHeight;


// sticks the personalDetails div to the top if the entire height of that div is less than the screen-height
if (navbarHeight + personalDetails.offsetHeight + 30 < innerHeight) {
    personalDetails.style.top = `${navbarHeight + 20}px`;
}
else {
    let prevScrollY = 0;

    document.addEventListener("scroll", () => {
        // if the user scrolls down
        if (scrollY > prevScrollY) {
            // if the user scrolled up just before this scroll down event, then resizes the height of dummyHeight div
            if (personalDetails.style.bottom !== "unset") {
                dummyHeight.style.height = `${personalDetails.offsetTop - 20}px`;
            }
            // lets you scrolls till the end of the personalDetails div and then sticks
            personalDetails.style.bottom = 'unset';
            personalDetails.style.top = `${-(personalDetails.offsetHeight - innerHeight + 20)}px`;
        }
        // if the user scrolls up
        else {
            const headerHeight = document.querySelector("header").offsetHeight;
            // if the header is visible on the screen, then reset all
            if (scrollY + navbarHeight < headerHeight) {
                dummyHeight.style.height = "0px";
                personalDetails.style.bottom = "unset";
            }
            // else if the user scrolled down just before this scroll up event, then sets the height of the dummyHeight div and lets you scrolls till the top of personalDetails and sticks
            else if (personalDetails.style.top !== 'unset') {
                dummyHeight.style.height = `${personalDetails.offsetTop - 20}px`;
                personalDetails.style.top = 'unset';
                personalDetails.style.bottom = `${-(personalDetails.offsetHeight - innerHeight + navbarHeight + 20)}px`;
            }
        }
        prevScrollY = scrollY;
    });
}


