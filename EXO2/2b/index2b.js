// En continuant depuis l’exercice 2a, imaginons que la réduction n’est disponible que si ce n’est pas un jour férié. Crée une variable : const férié = true;
//Mets à jour le code pour que, pour obtenir une réduction, la personne doive répondre à la condition d’âge et que ce ne soit pas un jour férié.
//MiSe a jour
let age = prompt(`Donnez votre age`)
const ferie = true
//condition
if ((age <=6 && ferie !== true) || (age >=65 && ferie !== true)){
    alert(`vous avez la reduction`)
}
else {
    alert(`Pas de reduction`)
}