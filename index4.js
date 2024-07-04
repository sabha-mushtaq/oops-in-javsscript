// Develop a set of classes in JavaScript for calculating the area and perimeter of various shapes. Begin with a base class Shape that provides default methods for area and perimeter calculation and includes subclasses like Circle, Rectangle, and Triangle. Each subclass should inherit from Shape and override the area and perimeter calculation methods to provide accurate results for their respective shapes.̉
class Shape {
    constructor() {}

    getArea() {
        throw new Error('Method getArea() must be implemented.');
    }

    getPerimeter() {
        throw new Error('Method getPerimeter() must be implemented.');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        if (typeof this.radius === 'number') {
            return Math.PI * this.radius * this.radius;
        } else {
            throw new Error('Invalid input');
        }
    }

    getPerimeter() {
        if (typeof this.radius === 'number') {
            return 2 * Math.PI * this.radius;
        } else {
            throw new Error('Invalid input');
        }
    }
}

class Rectangle extends Shape {
    constructor(length, breadth) {
        super();
        this.length = length;
        this.breadth = breadth;
    }

    getArea() {
        if (typeof this.length === 'number' && typeof this.breadth === 'number') {
            return this.length * this.breadth;
        } else {
            throw new Error('Invalid inputs');
        }
    }

    getPerimeter() {
        if (typeof this.length === 'number' && typeof this.breadth === 'number') {
            return 2 * (this.length + this.breadth);
        } else {
            throw new Error('Invalid inputs');
        }
    }
}

class Triangle extends Shape {
    constructor(base, height, side1, side2, side3) {
        super();
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getArea() {
        if (typeof this.base === 'number' && typeof this.height === 'number') {
            return 0.5 * this.base * this.height;
        } else {
            throw new Error('Invalid inputs');
        }
    }

    getPerimeter() {
        if (typeof this.side1 === 'number' && typeof this.side2 === 'number' && typeof this.side3 === 'number') {
            return this.side1 + this.side2 + this.side3;
        } else {
            throw new Error('Invalid inputs');
        }
    }
}

// Example usage:
const circle = new Circle(5);
console.log(circle.getArea()); // 78.53981633974483
console.log(circle.getPerimeter()); // 31.41592653589793

const rectangle = new Rectangle(4, 7);
console.log(rectangle.getArea()); // 28
console.log(rectangle.getPerimeter()); // 22

const triangle = new Triangle(3, 4, 3, 4, 5);
console.log(triangle.getArea()); // 6
console.log(triangle.getPerimeter()); // 12

