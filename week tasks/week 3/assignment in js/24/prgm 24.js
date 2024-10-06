class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }

    square(side) {
        return side * side;
    }

    rectangle(length, breadth) {
        return length * breadth;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        const choice = prompt(`Enter your choice:
1. Circle
2. Square
3. Rectangle
4. Triangle`);

        switch (parseInt(choice)) {
            case 1:
                this.circle();
                break;
            case 2:
                this.square();
                break;
            case 3:
                this.rectangle();
                break;
            case 4:
                this.triangle();
                break;
            default:
                console.log("Invalid choice");
        }
    }

    circle() {
        const radius = parseFloat(prompt("Enter the radius"));
        const area = super.circle(radius);
        console.log(`Area of the circle is: ${area.toFixed(2)}`);
    }

    square() {
        const side = parseFloat(prompt("Enter the length of the side"));
        const area = super.square(side);
        console.log(`Area of the square is: ${area}`);
    }

    rectangle() {
        const length = parseFloat(prompt("Enter the length"));
        const breadth = parseFloat(prompt("Enter the breadth"));
        const area = super.rectangle(length, breadth);
        console.log(`Area of the rectangle is: ${area}`);
    }

    triangle() {
        const base = parseFloat(prompt("Enter the base"));
        const height = parseFloat(prompt("Enter the height"));
        const area = super.triangle(base, height);
        console.log(`Area of the triangle is: ${area}`);
    }
}

const myClassInstance = new MyClass();
myClassInstance.main();
