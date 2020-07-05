
  
$(document).ready(function(){
    let cards = document.getElementsByClassName("card");
    let spinners = document.getElementsByClassName("fa-spin");
    let i = 0;
    let thirdPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            cards[i].style.display = "block";
            spinners[i].style.display = "none";
            ++i;
            resolve("Success");
        }, 6000); 
    });

    let secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            cards[i].style.display = "block";
            spinners[i].style.display = "none";
            ++i;
            resolve(thirdPromise);
        }, 4000);
    });

    let firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            cards[i].style.display = "block";
            spinners[i].style.display = "none";
            ++i;
            resolve(secondPromise);
        }, 2000);
    });
    

    firstPromise.then().then().then(() => {
        console.log("Loaded Cards Successfully");
    }).catch();

});