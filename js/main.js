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
    $("#smallScreen2").addClass("type")
}, 1500);

setTimeout(function () {
    $("#smallScreen2").removeClass("hide")
}, 1499);

setTimeout(function () {
    $("#smallScreen3").addClass("type")
}, 3000);

setTimeout(function () {
    $("#smallScreen3").removeClass("hide")
}, 2999);