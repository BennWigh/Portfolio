function sendmessage() { //Funktion kaldet sendmessage
    var sName = $('input[name=navn]').val(); //Variable som indholder afsenders navn
    var sKontaktEmail = $('input[name=email_kontakt]').val(); //Variable til afsenders email
    var sMessage = $('textarea[name=besked]').val(); //Variable til teskt beskeden som skal sendes
    if (/.+@[^.]+(\.[^.]+)+/.test(sKontaktEmail) && sName.length > 0 && sMessage.length > 0) { //tjekker om alle krav er opfyldt
        window.location.href = 'kontaktbesked.html'; //Hvis alle krav er opfyldt = sender dig til html siden kontakt beskedd
    } else {
        alert('Udfyld venligst alle felter'); //Hvis ikke alle krav er opfyldt
    }
    return false; //retunere functionen falsk for at forhindre et forsøg på at få serveren til at sende mailen (hvilket ikke ville være muligt da siden ikke er sat op til det)
}
