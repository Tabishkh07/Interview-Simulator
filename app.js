// dark mode of all pages
let btn = document.getElementById("Switch");
let label = document.getElementById("modeLabel");

// Restore theme on page load
if (localStorage.getItem("theme") === "dark") {
    btn.checked = true; // Corrected assignment
    document.body.classList.add("dark-mode");
    label.innerText = "Dark Mode";
} else {
    btn.checked = false;
    document.body.classList.remove("dark-mode");
    label.innerText = "Light Mode";
}

// Toggle theme
btn.addEventListener("change", function () {
    if (btn.checked) {
        document.body.classList.add("dark-mode");
        label.innerText = "Dark Mode";
        localStorage.setItem("theme", "dark"); // Save choice
    } else {
        document.body.classList.remove("dark-mode");
        label.innerText = "Light Mode";
        localStorage.setItem("theme", "light"); // Save choice
    }
});

// making question avalable .
let btnS = document.getElementById("Start");
let select = document.getElementById("categorySelect");

btnS.addEventListener("click", function () {
    let selectedValue = select.value;

    if (selectedValue === "") {
        alert("Please select a category before starting the simulation.");
    } else {
        document.getElementById("questionBox").style.display = "block";
        document.getElementById("Start").style.display = "none";
        document.getElementById("categorySelect").style.display = "none";
        document.getElementById("categorySelect1").style.display = "none";
        document.querySelector(".end-button-container").style.display = "block";

        // Here’s where you’d load questions based on selectedValue
        // like: loadQuestions(selectedValue);
    }
});



