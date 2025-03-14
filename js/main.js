// Exibir loading
function toggleloading( {
    let loader = document.querySelector(".loader");
    loader.style.display= loader.style.display == "none" ? "block" : "none";
    }

    // page scroll
    window.addEventlisttener ("scroll",function( {
        const navbar = document.querySelector("navbar");

        if (window.scrolly  50 ) {
            navbar.classlist.ass("scrolled")
        } else {
            navbar.classlist.remover("scrolled")
        }
        {);
            