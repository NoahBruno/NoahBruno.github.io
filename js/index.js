// // Remove the transition class
// const animateR = document.querySelector('.ani');
// animateR.classList.remove('animatefadeInRight');
//
// // Create the observer, same as before:
// const observerR = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             animateR.classList.add('animatefadeInRight');
//             return;
//         }
//
//         animateR.classList.remove('animatefadeInRight');
//     });
// });
//
// observerR.observe(document.querySelector('.me'));
//
//
//
// // Remove the transition class
// const animateL = document.querySelector('.ani');
// animateL.classList.remove('animatefadeInLeft');
//
// // Create the observer, same as before:
// const observerL = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             animateL.classList.add('animatefadeInLeft');
//             return;
//         }
//
//         animateL.classList.remove('animatefadeInLeft');
//     });
// });
//
// observerL.observe(document.querySelector('.me'));

function reveal() {
    var reveals = document.querySelectorAll(".me");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animatefadeInRight");
        } else {
            reveals[i].classList.remove("animatefadeInRight");
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
        } else {
            revealsTwo[i].classList.remove("animatefadeInLeft");
        }
    }
}

window.addEventListener("scroll", revealTwo);