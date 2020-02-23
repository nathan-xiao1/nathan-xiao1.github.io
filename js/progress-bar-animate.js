$(window).on('scroll.animateBar', function () {
    if (IsInViewport(document.getElementById("exp-container"))) {
        console.log("Animating")
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        $(window).off('scroll.animateBar');
    }
});

function IsInViewport(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}