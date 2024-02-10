const kill = function () {
    let dead = document.getElementById("dead");
    let lost = document.getElementById("lost");
    let deadCount = Number(dead.textContent);
    let lostCounter = Number(lost.textContent);

    let win = 10;
    getHole = index => document.getElementById(`hole${index}`);

    for (let i = 1; i < 10; i++) {
        let hole = getHole(i);
        hole.onclick = function () {
            if (hole.classList.contains("hole_has-mole")) {
                deadCount++;
                dead.textContent = deadCount;
            } else {
                lostCounter++;
                lost.textContent = lostCounter;
            }
            if (deadCount === win) {
                alert("Вы победили!");
                restartGame();
            } else if (lostCounter === 5) {
                alert("Вы проиграли!");
                restartGame();
            }
        };
    }

    function restartGame() {
        dead.textContent = 0;
        lost.textContent = 0;
        deadCount = 0;
        lostCounter = 0;
    }
}

kill();
