const wrapper = document.querySelector(".wrapper"); // Corrected the selector to match the HTML class
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn"); // Corrected the selector to match the HTML class
const noBtn = document.querySelector(".no-btn"); // Corrected the selector to match the HTML class

yesBtn.addEventListener("click", () => { // Changed "()" to "()" in the arrow function
    question.innerHTML = "Aaaaa, I like you too"; // Corrected the typo in "Aaaaa"
    gif.src = "https://raw.githubusercontent.com/DzareDeveloper/img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => { // Changed "()" to "()" in the arrow function
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width; // Corrected the typo in "Width"
    const maxY = window.innerHeight - noBtnRect.height; // Corrected the typo in "Height"

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
