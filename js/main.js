// global stuff
"use strict"

let reviewBox = document.querySelector(".product-rate__review");
let reviewForm = document.querySelector(".review-form-wrapper");
let reviewButtons = document.querySelector(".review-buttons");
let reviewHeading = document.querySelector(".review-heading");

window.onload = function () {
    loadForm();
}

function loadForm() {
    gsap.to(reviewBox, { opacity: 1, y: -20, duration: .6, ease: "power.in" });
}

async function prepareForm() {
    let answear = event.target.value;
    if (answear == "like") {
        answear = 'What did you like?';
    }
    if (answear == "dislike") {
        answear = 'What you did not like?';
    }

    let responseToUser = `  
        <form class="form form-review-comment" method="post">
            <textarea name="comment" placeholder="${answear}"></textarea> 
            <button class="form-submit-button" type="submit" onclick="submitAnswear(); return false">Send</button>
        </form>
    `;

    setTimeout(function () {
        reviewButtons.style.display = "none";
        gsap.to(reviewHeading, { opacity: 0, duration: 0.2, ease: "power1.out" });
        reviewHeading.style.display = "none";

        reviewForm.innerHTML = responseToUser;
        gsap.fromTo(reviewForm, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power1.out" });
    }, 100);
}

async function submitAnswear() {
    let responseToUser = `  
        <button onclick="closeForm(); return false" class="btn-link">Luk vinduet</button>
    `;

    setTimeout(function () {
        reviewForm.innerHTML = responseToUser;

        reviewHeading.innerHTML = "Tak for din tid";
        reviewHeading.style.display = "block";
        gsap.to(reviewHeading, { opacity: 1, duration: 0.6, ease: "power1.out" });
    }, 500);
}

async function closeForm() {
    var tl = new TimelineMax({ onComplete: hideForm });
    tl.to(reviewBox, 0.4, { opacity: 0, y: 10, ease: "power1.out" });
}

function hideForm() {
    reviewBox.style.display = "none";
}