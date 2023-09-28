function toggleDarkMode(checkbox){
    console.log(checkbox.checked);
    // Change background color
    if(checkbox.checked == true){
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

        var switchDescription = document.getElementsByClassName("switchDescription");
        switchDescription[0].innerHTML = "Dark Mode";
    }
    if(checkbox.checked == false){
        var mainElement = document.getElementsByClassName("main dark_mode");
        mainElement[0].classList.replace("dark_mode", "main");

        // change header font color
        var headerElement = document.getElementsByClassName("header header_dark");
        headerElement[0].classList.replace("header_dark", "header");

        // change body font color
        var bodyElement = document.getElementsByClassName("content content_dark");
        bodyElement[0].classList.replace("content_dark", "content");

        // change footer font color
        var footerElement = document.getElementsByClassName("copyright copyright_dark");
        footerElement[0].classList.replace("copyright_dark", "copyright");

        var switchDescription = document.getElementsByClassName("switchDescription");
        switchDescription[0].innerHTML = "Light Mode";
    }
}
