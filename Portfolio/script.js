function toggleDarkMode(){
    var element = document.getElementsByClassName("main");
    console.log(element[0].classList);
    element[0].classList.toggle("dark_mode");

}

