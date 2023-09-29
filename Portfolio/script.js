function toggleDarkMode(checkbox){

    var mainElement = document.getElementsByClassName("main");
    var headerElement = document.getElementsByClassName("header");
    var bodyElement = document.getElementsByClassName("content");
    var footerElement = document.getElementsByClassName("copyright");
    var switchDescription = document.getElementsByClassName("switchDescription");
    var linkedInLogo = document.getElementById("linkedIn");
    var applicationLetterLogo = document.getElementById("applicationLetter");
    var github = document.getElementById("github")
    var contact = document.getElementById("contact");

    // Change background color
    if(checkbox.checked == true){

        mainElement[0].classList.toggle("dark_mode");


        // change header font color
        headerElement[0].classList.toggle("header_dark");

        // change body font color
        bodyElement[0].classList.toggle("content_dark");

        // change footer font color
        footerElement[0].classList.toggle("copyright_dark");

        switchDescription[0].innerHTML = "Dark Mode";
        switchDescription[0].classList.toggle("switchDescription_dark");
        
        linkedInLogo.src = "pictures/light/linkedin.png";
        applicationLetterLogo.src = "pictures/light/mail.png";
        github.src = "pictures/light/github.png";
        contact.src = "pictures/light/phone.png";

    }
    if(checkbox.checked == false){

        mainElement[0].classList.replace("dark_mode", "main");

        // change header font color
        headerElement[0].classList.replace("header_dark", "header");

        // change body font color
        bodyElement[0].classList.replace("content_dark", "content");

        // change footer font color
        footerElement[0].classList.replace("copyright_dark", "copyright");

        switchDescription[0].innerHTML = "Light Mode";
        switchDescription[0].classList.replace("switchDescription_dark", "switchDescription");

        linkedInLogo.src = "pictures/dark/linkedin_dark.png";
        applicationLetterLogo.src = "pictures/dark/mail_dark.png";
        github.src = "pictures/dark/github_dark.png";
        contact.src = "pictures/dark/phone_dark.png";

    }
}

function contactFormSubmit(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("subject").value;

    if(fname == "" || lname == "" || mail == "" || message == ""){
        alert("Please fill in all fields");
    }
    else{
        console.log("Vorname: " + fname);
        console.log("Nachname: " + lname);
        console.log("E-Mail: " + mail);
        console.log("Land: " + country);
        console.log("Nachricht: " + message);
        alert("Thank you for your Message, ill response asap");


    }
}


