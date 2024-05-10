document.addEventListener('DOMContentLoaded', function () {
    let rotatorElements = document.querySelectorAll('.rotator');

    rotatorElements.forEach(function (rotator) {
        let cases = rotator.querySelectorAll('.rotator__case');

        let currentIndex = 0;
        let speed = parseInt(cases[currentIndex].dataset.speed) || 1000;

        function rotate() {
            cases[currentIndex].classList.remove('rotator__case_active');
            currentIndex = (currentIndex + 1) % cases.length;
            cases[currentIndex].classList.add('rotator__case_active');
            speed = parseInt(cases[currentIndex].dataset.speed) || 1000;
            setTimeout(rotate, speed);
        }
        setTimeout(rotate, speed);
    });
});
