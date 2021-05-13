function IsInViewport(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function animateProgressBar() {
    if (IsInViewport(document.getElementById("exp-container"))) {
        console.log("Animating")
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        $(window).off('scroll.animateBar');
    }
}

// Animate if in viewpoint when scrolling
$(window).on('scroll.animateBar', function () {
    animateProgressBar()
});

// Animate if in viewpoint when loaded
$( document ).ready(() => {
    animateProgressBar()
})