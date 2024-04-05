function getResponse(){
    var welcomeContainerVal = document.getElementById("welcomeContainer");
    var cardContainer = document.getElementById("cardContainer");

    if(welcomeContainerVal.style.display === "none"){
        welcomeContainerVal.style.display= "none";
        cardContainer.style.display= "block";
    }
    else{
        cardContainer.style.display = "none"
        welcomeContainerVal.style.display= "block";
    }

}

function getRating(value){
   
    document.getElementById("display").innerHTML = value;
   
}

