const { Square, Triangle, Circle } = require("./shapes.js");

describe("Square test", () => {
    test("expects a square with yellow background", () => {
        const shapeChoice = new Square();
        shapeChoice.setColor("yellow");
        expect(shapeChoice.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="yellow" />'
        );

    });
});

describe("Triangle test", () => {
    test("expects a triangle with a black background", () => {
        const shapeChoice = new Triangle();
        shapeChoice.setColor("black");
        expect(shapeChoice.render()).toEqual(
            '<polygon points="150, 18 244, 183 56, 182" fill="black" />'
        );

    });
});

describe("Circle test", () => {
    test("expects a circle with a hex #ffffff background", () => {
        const shapeChoice = new Circle();
        shapeChoice.setColor("#ffffff");
        expect(shapeChoice.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="#ffffff" />'
        );

    });
});