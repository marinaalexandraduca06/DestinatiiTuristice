onload = function(){
    let n = document.getElementById('next');
    n.addEventListener('click', nextTown);
}

function previousTown() {
    let ec = document.getElementById('oras');
    ec.src='Paris/ParisHTML.html';
    let n = document.getElementById('next');
    n.addEventListener('click', nextTown);
    let p = document.getElementById('previous');
    p.removeEventListener('click', previousTown);
}

function nextTown() {
    let ec = document.getElementById('oras');
    ec.src='Londra/LondraHTML.html';
    let n = document.getElementById('next');
    n.removeEventListener('click', nextTown);
    let p = document.getElementById('previous');
    p.addEventListener('click', previousTown);
}