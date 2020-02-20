const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const navbar = document.getElementById("navbar");

window.onscroll = () => {
    if (this.scrollY < vh - 200) {
        navbar.classList.remove("scrolled");
    }
    else {
        navbar.classList.add("scrolled");
    }
};

window.onload = () => {
    if (window.scrollY) navbar.classList.add("scrolled");
}
