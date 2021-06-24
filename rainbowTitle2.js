function changeColor(arg) {
    document.getElementById("titleText").setAttribute('style', 'color: '+colors[arg]+';');
}

const colors = ['#fffff','#ff0000','#6600ff','#66ff66','#cc00ff','#00ffff']; 

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
}, 6000);