document.addEventListener("DOMContentLoaded", function() {
    //ex.1
    var nextPicture = document.querySelector(".nextPicture");
    var prevPicture = document.querySelector(".prevPicture");
    //pobieramy wszystkie li
    var allImg = document.querySelector("div.slider").childern;
    //indeks biezącego widoku obrazka
    var currentImg = 0;
    //dodajemy do 1-go obrazka (pojedynczy element)
    //klasę visible
    allImg[currentImg].classList.add("visible");

    nextPicture.addEventListener("click", function() {
        console.log("kliknięto NEXT");
        allImg[currentImg].classList.remove("visible");
        currentImg++
        if (currentImg >= allImg.length) {

            currentImg=0;
        }
        allImg[currentImg].classList.add("visible");
    })
    prevPicture.addEventListener("click", function() {
        console.log("kliknięto PREV");
        allImg[currentImg].classList.remove("visible");
        currentImg--;
        if (currentImg < 0) {
            // currentImg = 0;
            currentImg = allImg.length - 1
        }
        allImg[currentImg].classList.add("visible")
    })
});
