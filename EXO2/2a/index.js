//  Imagine qu’un parc d’attractions propose une réduction pour les enfants de (6 ans et moins) ou les seniors (65 ans et plus).
//Crée une variable age et attribue lui un age par déffaut.
//Crée une une condition qui vérifie si la personne a droit à une réduction. Si c’est le cas, affiche 'Réduction' dans la console. Sinon, affiche 'Pas de Réduction' dans la console.
// solution
let age = prompt(`Donnez votre age svp`)
// la condition
if (age <= 6 || age >=65){
    alert(`Vous avez droit a vous reduction`)
} 
else{
    alert(`vous n'avez pas droit à la reduction`)
}