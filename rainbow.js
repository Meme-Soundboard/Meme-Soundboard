const colors = ['#ff0000','#f0a51b','#ffff00','#008000','#0000ff','#4b0082','#ee82ee'];
function changeColor(arg) {
    document.getElementById("titleText").setAttribute('style', 'color: '+colors[arg]+'; text-shadow: 0px 0px 15px'+colors[arg]+';');
}

setInterval(() => {
    setTimeout(() => {
        changeColor(0);
    }, 500);
    setTimeout(() => {
        changeColor(1)
    }, 1000);
    setTimeout(() => {
        changeColor(2)
    }, 2000);
    setTimeout(() => {
        changeColor(3)
    }, 3000);
    setTimeout(() => {
        changeColor(4)
    }, 4000);
    setTimeout(() => {
        changeColor(5)
    }, 5000);
    setTimeout(() => {
        changeColor(6)
    }, 6000);
}, 6000)