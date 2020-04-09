let ciel = null;
let opacity = 0.1;

window.onload = function(){
    ciel = document.getElementById('ciel');
};

function deleteMessage(idMessage) {
    let message = document.getElementById(idMessage);
    message.className = "d-none";
    opacity += 0.1;
    ciel.style.opacity = opacity;
}