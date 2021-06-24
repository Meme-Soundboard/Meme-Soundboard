let truefalse;

setInterval(() => {
    if (!document.getElementById('profanitiesInput').checked) {
        document.getElementById('ahShtHereWeGoAgain').parentNode.removeChild(document.getElementById('ahShtHereWeGoAgain'));
        document.getElementById("heFckedUp").parentNode.removeChild(document.getElementById("heFckedUp"));
        document.getElementById("surpriseMotherFcker").parentNode.removeChild(document.getElementById("surpriseMotherFcker"));
        document.getElementById("thugLife").parentNode.removeChild(document.getElementById("thugLife"));
    }
}, 125);