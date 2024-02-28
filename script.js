console.log("Simone x Adriano <3");
window.addEventListener('load', function() {
    // Verifica se la pagina è stata ricaricata
    if (performance.getEntriesByType("navigation")[0].type === "reload") {
        header5.classList.add('visible');
        console.log("ciao");
    }
});
var myButton = document.getElementById('scopri');
myButton.addEventListener('click', function() {
    window.location.href = "pagina2.html";
});
var myButton = document.getElementById('scopri2');
myButton.addEventListener('click', function() {
    window.location.href = "pagina3.html";
});
var myButton = document.getElementById('scopri3');
myButton.addEventListener('click', function() {
    window.location.href = "pagina4.html";
});
var myButton = document.getElementById('scopri4');
myButton.addEventListener('click', function() {
    window.location.href = "pagina5.html";
});
var myButton = document.getElementById('scopri5');
myButton.addEventListener('click', function() {
    window.location.href = "pagina6.html";
});
window.addEventListener('scroll', function() {
    console.log("Luca, Martina non ti vuole")
    var header = document.getElementById('header');
    var header2 = document.getElementById('header2');
    var header3 = document.getElementById('header3');
    var header4 = document.getElementById('header4');
    var header5 = document.getElementById('header5');
    var backgroundContainer = document.getElementById('background-container');
    var backgroundContainer2 = document.getElementById('background-container2');
    var backgroundContainer3 = document.getElementById('background-container3');
    var backgroundContainer4 = document.getElementById('background-container4');
    var headerHeight = header.offsetHeight;
    var header2Height = header2.offsetHeight;
    var header3Height = header3.offsetHeight;
    var header4Height = header4.offsetHeight;
    var scrollPosition = window.scrollY;
    const fadeButton = document.getElementById('fadeButton');
    
    if (scrollPosition > headerHeight+150) {
        header.classList.add('visible');
        backgroundContainer.classList.add('fade-out');
        header5.classList.remove('visible');
        if (scrollPosition > header2Height+960){
            header.classList.remove('visible');
            backgroundContainer.classList.remove('fade-out');
            header2.classList.add('visible');
            backgroundContainer2.classList.add('fade-out');
            if (scrollPosition > header3Height+1600){
                header2.classList.remove('visible');
                backgroundContainer.classList.remove('fade-out');
                header3.classList.add('visible');
                backgroundContainer3.classList.add('fade-out');
                if (scrollPosition > header4Height+2220){
                    header3.classList.remove('visible');
                    backgroundContainer2.classList.remove('fade-out');
                    header4.classList.add('visible');
                    backgroundContainer4.classList.add('fade-out');
                    
                } else {
                    header4.classList.remove('visible');
                    header3.classList.add('visible');
                    backgroundContainer4.classList.remove('fade-out');
                }
            } else {
                header3.classList.remove('visible');
                header2.classList.add('visible');
                backgroundContainer3.classList.remove('fade-out');
            }
        } else {
            header2.classList.remove('visible');
            header.classList.add('visible');
            backgroundContainer2.classList.remove('fade-out');
        }
    } else {
        header5.classList.add('visible');
        header.classList.remove('visible');
        backgroundContainer.classList.remove('fade-out');
    }
});
