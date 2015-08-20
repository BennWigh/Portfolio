var antalbilleder = 70; //angiv antal billeder i galleriet +1
var sThumbnails = 'hjemmeside/images/grafik/thumbnails/'; //angiv placeringen af thumbnails
var sPictures = 'hjemmeside/images/grafik/fullsize/' //angiv placeringen af de originale billeder
$(document).ready(function () {
    galleri()
});
function galleri() {
    for (current = 1; current < antalbilleder; current++) { //forløkke som køre koden for hvergang at current er mindre end antalbilleder og tæller op
        // en forløkke er den mest præcise slags løkke da den kun køre det antal gange man har specificeret
        document.getElementById('imagegallery').innerHTML += '<a href="'+sPictures + current + '.jpg" class="galleri"  rel=gallery><img src='+sThumbnails + current + '.jpg alt="' + current + '.jpg"/></a>';
    }
   
        $('a[rel=gallery]').fancybox({
            'openEffect': 'elastic',
            'closeEffect': 'elastic',
            'openSpeed': 800,
            'closeSpeed': 300,
            'margin': 50,
            'loop': true
        
    });
}
