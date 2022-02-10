function reveal() {
    var reveals = document.querySelectorAll(".me");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animatefadeInRight");
            reveals[i].classList.remove("hide")
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
            revealsTwo[i].classList.remove("hide")
        } else {
            revealsTwo[i].classList.remove("animatefadeInLeft");
            revealsTwo[i].classList.add("hide");
        }
    }
}

window.addEventListener("scroll", revealTwo);