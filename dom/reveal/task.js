document.addEventListener('DOMContentLoaded', function () {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function scroll() {
        var revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('reveal_active');
            }
        });
    }

    window.addEventListener('scroll', scroll);

    scroll();
});
