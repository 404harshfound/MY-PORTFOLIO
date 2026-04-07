// ===== Typing Effect =====
const text = "Aspiring Software Engineer | AI & Data Science Enthusiast";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();


// ===== Reveal on Scroll =====
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);


// ===== Copy Email =====
document.getElementById("email").addEventListener("click", () => {
    navigator.clipboard.writeText("authenticharsh@gmail.com");
    alert("Email copied!");
});