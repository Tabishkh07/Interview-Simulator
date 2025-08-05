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


