var pauser = 5000; //laver et delay på 5000 millisekunder
var img; //billederne som skal køres i slideren
var imgID = 0; //antal billeder i slideren
var imgsrc; //placeringen af billederne
var fadeOut = 500; //hastigheden billedet fader ud i millisekunder
var fadeIn = 900; //hastigheden billedet fader ind i millisekunder

function loadimg(imgs) { //loader billederne ind i slideren
    img = imgs.split(","); //angiver billederne i et array* udfra navn opdelt af komma
    imgID = Math.round(Math.random() * (img.length - 1)); // udregner hvor mange billeder der er i arrayet
    rotator(); //køre funktionen rotator
}
function rotator() {  //Roterer mellem billerne
    imgsrc = 'hjemmeside/images/forside/slider/resized/' + img[imgID]; //vælger billedet ud fra navnet

    if (imgID == img.length - 1) { //tjekker om slideren er nået til sidste billede i arrayet
        imgID = 0; // hvis slideren er nået til sidste billede i arrayet starter den forfra
    } else { // hvis ikke den er nået til sidste billede går den videre til næste
        imgID++;
    }
    $('.slider').fadeTo(fadeOut, 0, function () { //funktionen til at fade billedet ud
        $('.sliderImg').attr('src', imgsrc); //vælger hvor på siden at billedet skal vises ud fra det billede som er blevet angivet på HTML siden
        $('.slider').fadeTo(fadeIn, 1); // funktion til at fade det nye billede ind
    });
    setTimeout('rotator()', pauser); //laver et delay for funktionen rotator på tiden angivet i variablen pauser
}

//* Et array er en liste over objekter, forskellen på et array og en liste er at et array er objekt orinteret hvilket en liste ikke er