let shuffle = (tab) => {
    for (let i = 0; i < tab.length; i++) {
        let aleatoire = Math.floor(Math.random() * (tab.length - 1));
        let tmp = tab[i];
        tab[i] = tab[aleatoire];
        tab[aleatoire] = tmp;
    }
}


// let shuffle = function(tab) {
//     for(let i=0; i < tab.length; i++) {
//         let aleatoire = Math.floor(Math.random()*(tab.length-1));
//         let tmp = tab[i];
//         tab[i] = tab[aleatoire];
//         tab[aleatoire] = tmp;
//     }
// }

let start = document.querySelector('.start');
let jeu = document.querySelector('.jeu');
let chaineWinner = "ABCDEFGH#";
let findEmptyCase = () => {
    let c = jeu.querySelector('.vide');
    let position = { i: '', j: '' };
    position.i = c.getAttribute("data-i");
    position.j = c.getAttribute("data-j");
    return position;
}

let TestWinner = ()=> {
    let chaine ="";
    let cases = jeu.querySelectorAll(".col-4");
    for(let c of cases) {
        if(c.innerText == ""){
            chaine += "#";
        }
        else{
            chaine += c.innerText;
        }
    }
    if(chaine == chaineWinner) {
        return true;
    }
    else {
        return false;
    }
}
let permutationPossible = (position1, position2) => {
    if ((position1.i == position2.i && Math.abs(position1.j - position2.j) == 1) || (position1.j == position2.j && Math.abs(position1.i - position2.i) == 1)) {
        return true;
    }
    else {
        return false;
    }
}
start.addEventListener('click', function (e) {
    jeu.innerHTML = "";
    let tab = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    shuffle(tab);
    let k = 0;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (k < tab.length)
                jeu.innerHTML += "<div class='col-4' data-i='" + i + "' data-j='" + j + "'>" + tab[k] + "</div>";
            k++;
        }
    }
    jeu.innerHTML += "<div class='col-4 vide' data-i='3' data-j='3'></div>";
}, false)
jeu.addEventListener('click', function (e) {
    let contenu = e.target.innerText;
    let position = { i: e.target.getAttribute('data-i'), j: e.target.getAttribute('data-j') };
    let positionVide = findEmptyCase();
    console.log("Contenu : " + contenu + " I: " + position.i + " J: " + position.j);
    console.log("vide I: " + positionVide.i + " J: " + positionVide.j);
    console.log(permutationPossible(position, positionVide))
    if (permutationPossible(position, positionVide)) {
        let vide = document.querySelector('.vide');
        vide.innerText = contenu;
        vide.classList.remove('vide');
        e.target.classList.add('vide');
        e.target.innerText = '';
        if(TestWinner()) {
            alert("Vous avez gagné");
        }
    }
}, false)
// function shuffle(tab) {
//     for (let i = 0; i < tab.length; i++) {
//         let aleatoire = Math.floor(Math.random() * (tab.length - 1));
//         let tmp = tab[i];
//         tab[i] = tab[aleatoire];
//         tab[aleatoire] = tmp;
//     }
// }