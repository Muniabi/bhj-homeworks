const number = setInterval(function () {
    const output = document.getElementById('timer');
    output.textContent -= 1;
    output.textContent === '0' && (alert('Вы победили в конкурсе!'), clearInterval(number));
}, 1000)