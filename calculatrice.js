// Recupération des elements du DOM (button)

const touches = [...document.querySelectorAll('.numero')];
const listeCle = touches.map(element => element.dataset.cle);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {

    const valeur = e.keyCode.toString();
    calcul(valeur);
    
    
})

document.addEventListener('click', (e) => {

    const valeur = e.target.dataset.cle;
    calcul(valeur);
})
/*
const calcul = (valeur) => {

    if(listeCle.includes(valeur)){
        switch(valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calculer = eval(ecran.textContent);
                ecran.textContent = calculer;
                break;

            default:
                const indexCle = listeCle.indexOf(valeur);
                const touche = touches[indexCle];
                ecran.textContent +=  touche.innerHTML;
        
        }
}
 } */

 function calcul(valeur){

    if(listeCle.includes(valeur)){
        switch(valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calculer = eval(ecran.textContent);
                ecran.textContent = calculer;
                break;

            default:
                const indexCle = listeCle.indexOf(valeur);
                const touche = touches[indexCle];
                ecran.textContent +=  touche.innerHTML;
        
        }
}
 }