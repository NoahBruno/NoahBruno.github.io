function reveal() {
    var reveals = document.querySelectorAll(".me");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animatefadeInRight");
            reveals[i].classList.remove("hide");
        } else {
            reveals[i].classList.remove("animatefadeInRight");
            reveals[i].classList.add("hide");
        }
    }
}

window.addEventListener("scroll", reveal);

function revealTwo() {
    var revealsTwo = document.querySelectorAll(".me2");
    for (var i = 0; i < revealsTwo.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsTwo[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            revealsTwo[i].classList.add("animatefadeInLeft");
            revealsTwo[i].classList.remove("hide");
        } else {
            revealsTwo[i].classList.remove("animatefadeInLeft");
            revealsTwo[i].classList.add("hide");
        }
    }
}

window.addEventListener("scroll", revealTwo);

function revealJack() {
    var revealJack = document.querySelectorAll(".jack");
    for (var i = 0; i < revealJack.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealJack[i].getBoundingClientRect().top;
        var elementVisible = 5;
        if (elementTop < windowHeight - elementVisible) {
            revealJack[i].classList.add("animate__fadeInUp");
            revealJack[i].classList.remove("hide");
        } else {
            revealJack[i].classList.remove("animate__fadeInUp");
            revealJack[i].classList.add("hide");
        }
    }
}

window.addEventListener("scroll", revealJack);

$("#email").hover(function(){
    $(this).append("<span id='emailSpan'>noah.bruno122@gmail.com</span>")
}, function(){
    $(this).find("#emailSpan").last().remove()
})

$("#phone").hover(function(){
    $(this).append("<span id='phoneSpan'>(210)722-4286</span>")
}, function(){
    $(this).find("#phoneSpan").last().remove()
})

$("#linkedin").hover(function(){
    $(this).append("<span id='linkedinSpan'>@NoahBruno</span>")
}, function(){
    $(this).find("#linkedinSpan").last().remove()
})

$("#github").hover(function(){
    $(this).append("<span id='githubSpan'>@NoahBruno</span>")
}, function(){
    $(this).find("#githubSpan").last().remove()
})

setTimeout(function () {
    $("#smallScreen2").removeClass("hide")
}, 1600);

setTimeout(function () {
    $("#smallScreen2").addClass("type")
}, 1601);

setTimeout(function () {
    $("#smallScreen3").removeClass("hide")
}, 2999);

setTimeout(function () {
    $("#smallScreen3").addClass("type")
}, 3000);

function darkMode() {

    let icon = document.querySelectorAll(".material-icons");
    let linkText = document.querySelectorAll(".link-text");
    let nav = document.querySelectorAll(".navbar");
    let front = document.querySelector(".frontPage");
    let about = document.querySelector(".aboutMe");
    let ex = document.querySelector(".experience");
    let work = document.querySelector(".work");
    let typing = document.querySelectorAll(".type");
    let firstTyping = document.querySelector(".type");
    let cardTops = document.querySelector(".forCardTops");
    let cardTopsE = document.querySelector(".forCardTopsE");
    let cardTopsW = document.querySelector(".forCardTopsW");
    let cardTopsW2 = document.querySelector(".forCardTopsW2");
    let text = document.querySelectorAll(".bigText");
    let textSize = document.querySelectorAll(".textSize");

    let exists = front.classList.contains('dark-mode');

    icon.forEach(x => x.classList.toggle('dark-mode-icon'));
    linkText.forEach(x => x.classList.toggle('dark-mode-link'));
    nav.forEach(x => x.classList.toggle('dark-mode-nav'));
    text.forEach(x => x.classList.toggle('dark-mode-text'));
    typing.forEach(x => x.classList.toggle('dark-mode-typing'));



    front.classList.toggle('dark-mode');

    if(exists === false){
        front.style.backgroundColor = "#121212";
        about.style.backgroundColor = "#121212";
        work.style.backgroundColor = "#121212";
        ex.style.backgroundColor = "#121212";
        firstTyping.style.color = "#3e6241";
        cardTops.style.color = "#3e6241";
        cardTopsE.style.color = "#3e6241";
        cardTopsW.style.color = "#3e6241";
        cardTopsW2.style.color = "#3e6241";
        textSize.style.color = "#ECEBF3";

    }else{
        front.style.backgroundColor = "#3e6241";
        about.style.backgroundColor = "#73956F";
        ex.style.backgroundColor = "#7BAE7F";
        work.style.backgroundColor = "#9bc49c";
        firstTyping.style.color = "#121212";
        cardTops.style.color = "#121212";
        cardTopsE.style.color = "#121212";
        cardTopsW.style.color = "#121212";
        cardTopsW2.style.color = "#121212";
        textSize.style.color = "#121212";


    }

}

