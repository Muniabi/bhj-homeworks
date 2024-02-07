const cookieClicker = function () {
    const image = document.getElementById("cookie");
    const score = document.getElementById("clicker__counter");

    let clickCount = 0;

    image.onclick = function () {
        image.width = 250;
        clickCount++;
        if (clickCount % 2 === 0) image.width = 200;
        score.textContent = clickCount;
    }
}

cookieClicker();

