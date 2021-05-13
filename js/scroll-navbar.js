const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const navbar = document.getElementById("navbar");

window.onload = () => {
    if (this.scrollY < vh - 200) {
        navbar.classList.remove("scrolled");
    }
    else {
        navbar.classList.add("scrolled");
    }
}

window.onscroll = () => {
    if (this.scrollY < vh - 200) {
        navbar.classList.remove("scrolled");
    }
    else {
        navbar.classList.add("scrolled");
    }
};