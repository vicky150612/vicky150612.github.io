let clicks = 0;
let click1 = 0;
let click2 = 0;
let click3 = 0;
let click4 = 0;
let click5 = 0;
let click6 = 0;
let click7 = 0;
let click8 = 0;
let click9 = 0;
let val = 0;
let obj = 'x';
let gameboard = ['', '', '', '', '', '', '', '', ''];

function reset() {
    clicks = 0;
    click1 = 0;
    click2 = 0;
    click3 = 0;
    click4 = 0;
    click5 = 0;
    click6 = 0;
    click7 = 0;
    click8 = 0;
    click9 = 0;
    val = 0;
    obj = 'x';
    gameboard = ['', '', '', '', '', '', '', '', ''];
    document.getElementById("c1").textContent = '';
    document.getElementById("c2").textContent = '';
    document.getElementById("c3").textContent = '';
    document.getElementById("c4").textContent = '';
    document.getElementById("c5").textContent = '';
    document.getElementById("c6").textContent = '';
    document.getElementById("c7").textContent = '';
    document.getElementById("c8").textContent = '';
    document.getElementById("c9").textContent = '';
}

function xoro() {
    if (val == 0) {
        obj = 'x';
    } else {
        obj = 'o';
    }
}
function b1() {
    if (click1 == 0) {
        xoro();
        document.getElementById("c1").textContent = obj;
        gameboard[0] = obj;
        clicks++;
        click1++;
        val = !val;
        winner();
    }
}
function b2() {
    if (click2 == 0) {
        xoro();
        document.getElementById("c2").textContent = obj;
        gameboard[1] = obj;
        clicks++;
        click2++;
        val = !val;
        winner();
    }
}
function b3() {
    if (click3 == 0) {
        xoro();
        document.getElementById("c3").textContent = obj;
        gameboard[2] = obj;
        clicks++;
        click3++;
        val = !val;
        winner();
    }
}
function b4() {
    if (click4 == 0) {
        xoro();
        document.getElementById("c4").textContent = obj;
        gameboard[3] = obj;
        clicks++;
        click4++;
        val = !val;
        winner();
    }
}
function b5() {
    if (click5 == 0) {
        xoro();
        document.getElementById("c5").textContent = obj;
        gameboard[4] = obj;
        clicks++;
        click5++;
        val = !val;
        winner();
    }
}
function b6() {
    if (click6 == 0) {
        xoro();
        document.getElementById("c6").textContent = obj;
        gameboard[5] = obj;
        clicks++;
        click6++;
        val = !val;
        winner();
    }
}
function b7() {
    if (click7 == 0) {
        xoro();
        document.getElementById("c7").textContent = obj;
        gameboard[6] = obj;
        clicks++;
        click7++;
        val = !val;
        winner();
    }
}
function b8() {
    if (click8 == 0) {
        xoro();
        document.getElementById("c8").textContent = obj;
        gameboard[7] = obj;
        clicks++;
        click8++;
        val = !val;
        winner();
    }
}
function b9() {
    if (click9 == 0) {
        xoro();
        document.getElementById("c9").textContent = obj;
        gameboard[8] = obj;
        clicks++;
        click9++;
        val = !val;
        winner();
    }
}

async function winner() {
    let winnerDelay = null;

    if (gameboard[0] === obj && gameboard[1] === obj && gameboard[2] === obj) {
        winnerDelay = new Promise(resolve => setTimeout(resolve, 350));
    } else if (gameboard[3] === obj && gameboard[4] === obj && gameboard[5] === obj) {
        winnerDelay = new Promise(resolve => setTimeout(resolve, 350));
    } else if (gameboard[6] === obj && gameboard[7] === obj && gameboard[8] === obj) {
        winnerDelay = new Promise(resolve => setTimeout(resolve, 350));
    }

    else if (gameboard[0] === obj && gameboard[3] === obj && gameboard[6] === obj) {
        winnerDelay = new Promise(resolve => setTimeout(resolve, 350));
    } else if (gameboard[1] === obj && gameboard[4] === obj && gameboard[7] === obj) {
        winnerDelay = new Promise(resolve => setTimeout(resolve, 350));
    } else if (gameboard[2] === obj && gameboard[5] === obj && gameboard[8] === obj) {
        winnerDelay = new Promise(resolve => setTimeout(resolve, 350));
    }

    else if (gameboard[0] === obj && gameboard[4] === obj && gameboard[8] === obj) {
        winnerDelay = new Promise(resolve => setTimeout(resolve, 350));
    } else if (gameboard[2] === obj && gameboard[4] === obj && gameboard[6] === obj) {
        winnerDelay = new Promise(resolve => setTimeout(resolve, 350));
    }

    if (winnerDelay) {
        await winnerDelay;
        alert(obj + " wins!");
        reset();
    } else {
        if (clicks === 9) {
            await new Promise(resolve => setTimeout(resolve, 100));
            alert("It's a draw!");
            reset();
        }
    }
}
