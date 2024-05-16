function ajouter(caracter){
    window.document.calculatrice.saisie.value= window.document.calculatrice.saisie.value+caracter;
}

function multiplication(ledernier){ //gestionnaire de la multiplicaton     NB je cherche a ecouter le changement d etat du champ SAISIE                 !      
    let decompttext = ledernier.length;
    console.log(ledernier);
    // console.log(decompttext);
    // let multiple ="*";
    // let put = document.getElementById("saisie");
    // let tab =['(',')','.','0','1','2','3','4','5','6','7','8','9'];
    // put.addEventListener("change",(even)=>{
    //     console.log("changer")
    //     let latouche = even.target.value;
       
    //     let i =0;

    //     for(i==0; i<tab.length; i++){
    //         if(tab[i] == latouche){
    //             window.document.calculatrice.saisie.value = window.document.calculatrice.saisie.value+multiple;
    //         }
    //     }
        
    // })

    // console.log("tu y es");   


    // window.document.calculatrice.saisie.value= window.document.calculatrice.saisie.value+multiple;
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
    
   
}

function refraich(){
    location.reload();
}


function effacer(){
    let contenu = window.document.calculatrice.saisie.value;
    window.document.calculatrice.saisie.value = contenu.substring(0,contenu.length-1);
}









// =====================================definition des fonction==========================
