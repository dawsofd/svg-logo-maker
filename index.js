// imports
const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle } = require("./lib/shapes");

// write to file 
function writeToFile(fileName, userInput) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${userInput.logoShape}`;
}

// render shapes
let chooseShape;
if (userInput.logoShape === "Square") {
    chooseShape = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${userInput.shapeBackgroundColor}"/>`;
} else if (userInput.logoShape === "Triangle") {
    chooseShape = new Triangle();
    svgString += `<polygon points= "150, 18 244, 182 56, 182" fill="${userInput.shapeBackgroundColor}"/>`;
} else {
    chooseShape = new Circle(); 
    svgString += `<circle cx="150" cy="115" r="80" fill="${userInput.shapeBackgroundColor}"/>`;
}

// user input
function promptInput() {
    inquirer.prompt([
        {
            type: "input",
            message: "What text would you like your logo to display? (Max 3 characters)",
            name: "logoText",
        },

        {
            type: "input",
            message: "Choose a color (by keyword or hex value) for the text.",
            name: "logoTextColor",
        },

        {
            type: "list",
            message: "What shape would you like to display your logo?",
            choices: ["Square", "Triangle", "Circle"],
            name: "logoShape",
        },

        {
            type: "input",
            message: "Choose a background color (by keyword or hex value) for the shape.",
            name: "shapeBackgroundColor",
        },
    ])
    .then((userInput) => {
        if (userInput.text.length > 3) {
            console.log("Error: logo text cannot exceed 3 characters in length");
            promptInput();
        } else {
            writeToFile("logo.svg", userInput);
        }
    });
}

promptInput();

