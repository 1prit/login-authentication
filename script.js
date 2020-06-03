function signin(){
   
    document.getElementById("sign-in").style.display="initial";
    document.getElementById("sign-up").style.display="none";
    document.getElementById("signin-label").style.borderBottom = "2px solid orange";
    document.getElementById("signup-label").style.borderBottom = "0px solid orange";
};

function signup(){
    document.getElementById("sign-up").style.display="initial";
    document.getElementById("sign-in").style.display="none";
    document.getElementById("signin-label").style.borderBottom = "0px solid orange";
    document.getElementById("signup-label").style.borderBottom = "2px solid orange";
};


