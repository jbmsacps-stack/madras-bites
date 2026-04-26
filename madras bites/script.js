let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
});