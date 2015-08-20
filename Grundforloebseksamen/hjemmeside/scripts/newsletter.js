$(document).ready(function () { //funktioner der kaldet så snart siden er loadet
    $('input[name=signup]').click(function () { //funktion der køres når der bliver trykket på knappen med navnet signup
        newsletter(true); //køre funktionen newsletter med meddelsen om at bSignup er sand
    });
    $('input[name=signout]').click(function () {//funktion der køres når der bliver trykket på knappen med navnet signout
        newsletter(false); //køre funktionen newsletter med meddelsen om at bSignup er falsk
    });
});


function newsletter(bSignup) { //funktionen newsletter 
  
    var sEmail = $('input[name=email]').val(); //string variablen email som består af den mail adresse som der er blevet tastet ind
    if (/.+@[^.]+(\.[^.]+)+/.test(sEmail)) { //tjekker om det er en rigtig email der er blevet tastet ind
        if (bSignup) { // hvis det er en rigtig email der er blevet intastet og der er blevet trykket på signup knappen
            window.location.href = 'tilmeld.html'; //sender dig til html siden tilmeld
        } else {
            window.location.href = 'afmeld.html'; //sender dig til html siden afmeld
        }
    } else {
        alert('udfyld venligst din email adresse'); //hvis ikke email adressen er udfyldt rigtigt kommer der en alert
    }
}







