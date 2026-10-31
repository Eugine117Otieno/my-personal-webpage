
// 1. Store favorite activities in an array
const activities = [
    "Coding and Web Development",
    "Playing Football",
    "Learning New Technology",
    "Listening to Music"
];

// 2. Display activities on the webpage
const activityList = document.getElementById("activities");

activities.forEach(function(activity) {
    const item = document.createElement("li");
    item.textContent = activity;
    activityList.appendChild(item);
});

// 3. Show More About Me
const moreBtn = document.getElementById("moreBtn");
const moreInfo = document.getElementById("moreInfo");

function showMore() {

    // if...else statement
    if (moreInfo.classList.contains("hidden")) {

        moreInfo.classList.remove("hidden");
        moreBtn.textContent = "Hide Information";

    } else {

        moreInfo.classList.add("hidden");
        moreBtn.textContent = "Show More About Me";

    }
}

moreBtn.addEventListener("click", showMore);

// 4. Change Background Colour
const backgroundBtn = document.getElementById("backgroundBtn");

let backgroundChanged = false;

function changeBackground() {

    if (backgroundChanged === false) {

        document.body.style.background =
            "linear-gradient(135deg, #ff9966, #ff5e62)";

        backgroundChanged = true;

    } else {

        document.body.style.background =
            "linear-gradient(135deg, #667eea, #764ba2)";

        backgroundChanged = false;
    }
}

backgroundBtn.addEventListener("click", changeBackground);

// 5. Greet the Visitor
const greetBtn = document.getElementById("greetBtn");

function greetVisitor() {

    let visitorName = prompt("Please enter your name:");

    if (visitorName !== null && visitorName.trim() !== "") {

        document.getElementById("greeting").textContent =
            "Hello, " + visitorName.trim() +
            "! Welcome to my profile.";

    } else {

        document.getElementById("greeting").textContent =
            "Hello! Welcome to my profile.";
    }
}

greetBtn.addEventListener("click", greetVisitor);

// 6. Change Heading Text Colour
const textBtn = document.getElementById("textBtn");

const heading = document.getElementById("heading");

const colors = ["red", "blue", "green", "purple", "orange"];

let colorIndex = 0;

function changeTextColor() {

    heading.style.color = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
}

textBtn.addEventListener("click", changeTextColor);
