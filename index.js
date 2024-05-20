function ajouter(caracter){
    window.document.calculatrice.saisie.value= window.document.calculatrice.saisie.value+caracter;
}

function multiplication(ledernier){ //gestionnaire de la multiplicaton     NB je cherche a ecouter le changement d etat du champ SAISIE                 !      
    let decompttext = ledernier.length;
    console.log(ledernier);
   }



let compteur =0;
let Lcost = "(";
let Rcost= ")";


function parenthese(){
    compteur++;
    if(compteur<=1){
        window.document.calculatrice.saisie.value= window.document.calculatrice.saisie.value+Lcost;
    }else if(compteur==2){
        window.document.calculatrice.saisie.value= window.document.calculatrice.saisie.value+Rcost;
        let ledernier = window.document.calculatrice.saisie.value;
        compteur = 0; 
        multiplication(ledernier);
        
    }
        // console.log(compteur);

}





function resultats(){   
    let chain = window.document.calculatrice.saisie.value;
    let checkerX = chain.search('x');
    let checkerDiv = chain.search('÷');

    if(checkerX !==-1 || checkerDiv !== -1){
        let finalChain = chain.replaceAll("x","*");
        if(checkerDiv !==-1){
            finalChain = finalChain.replaceAll("÷","/")
        }
        window.document.calculatrice.resultat.value= eval(finalChain);
    }else{
        window.document.calculatrice.resultat.value= eval(chain);
    }
   let valeur = localStorage;
   valeur.setItem("h1",chain);
   let historique = document.getElementById("fhisto");
    historique.textContent = valeur.getItem("h1");
   
}

function refraich(){
    location.reload();
//     let valeur = localStorage;
//    valeur.setItem("h1",chain);
//    let historique = document.getElementById("fhisto");
    
//     historique.textContent = valeur.getItem("h1");
}


function effacer(){
    let contenu = window.document.calculatrice.saisie.value;
    window.document.calculatrice.saisie.value = contenu.substring(0,contenu.length-1);
}



let lehistorique = document.getElementById("lehistorique");

lehistorique.addEventListener("change", histo);

function histo(even){
    // let lop = document.getElementById('fhisto');
    //  lop.value=window.document.calculatrice.saisie.value;

    // window.document.calculatrice.saisie.value = even.target.value;

    // console.log("coucu")
    window.document.calculatrice.resultat.value=" ";
    // console.log( window.document.calculatrice.saisie.value = e.target.value);

    
}






// =====================================definition des fonction==========================
