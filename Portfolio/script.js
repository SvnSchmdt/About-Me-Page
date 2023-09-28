function toggleDarkMode(){
    // Change background color
    var mainElement = document.getElementsByClassName("main");
    mainElement[0].classList.toggle("dark_mode");

    // change header font color
    var headerElement = document.getElementsByClassName("header");
    headerElement[0].classList.toggle("header_dark");

    // change body font color
    var bodyElement = document.getElementsByClassName("content");
    bodyElement[0].classList.toggle("content_dark");

    // change footer font color
    var footerElement = document.getElementsByClassName("copyright");
    footerElement[0].classList.toggle("copyright_dark");

}

