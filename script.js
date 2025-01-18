document.addEventListener("DOMContentLoaded", function() {
    // Typing Effect
    const typingText = document.querySelector(".typing-text");
    const words = ["a Web Developer.", "a Designer.", "a Problem Solver."];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[index];
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex--);
        } else {
            typingText.textContent = currentWord.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }

    typeEffect();

    // GSAP Dynamic Background Words Movement
    gsap.to("#developer", {
        x: "random(-500, 500)",  // Move across the X axis
        y: "random(-300, 300)",  // Move across the Y axis
        opacity: 0.2,             // Slightly fade in/out
        rotation: "random(0, 360)", // Random rotation
        duration: 5,              // Animation duration
        repeat: -1,               // Repeat infinitely
        yoyo: true,               // Reverse the animation on alternate cycles
        ease: "power1.inOut",     // Ease function
        stagger: 1                // Stagger the animation with a slight delay
    });

    gsap.to("#designer", {
        x: "random(-500, 500)",
        y: "random(-300, 300)",
        opacity: 0.2,
        rotation: "random(0, 360)",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 1
    });

    gsap.to("#innovator", {
        x: "random(-500, 500)",
        y: "random(-300, 300)",
        opacity: 0.2,
        rotation: "random(0, 360)",
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 1
    });

    // Add typing text dynamically to the home section
    const typingTextElement = document.createElement("span");
    typingTextElement.classList.add("typing-text");
    typingTextElement.style.position = "absolute";
    typingTextElement.style.top = "50%";
    typingTextElement.style.left = "50%";
    typingTextElement.style.transform = "translate(-50%, -50%)";
    typingTextElement.style.fontSize = "2rem";
    typingTextElement.style.fontWeight = "bold";
    typingTextElement.style.color = "white";
    document.querySelector("#home").appendChild(typingTextElement);
});
