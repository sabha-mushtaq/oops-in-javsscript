// Create a Temperature class in JavaScript that manages both Celsius and Fahrenheit temperatures with getters and setters for each unit, allowing for automatic conversion between the two scales. The class should have an initial state of 0°C and 32°F, and it should validate input values for temperature updates, ensuring they are numeric. When setting the temperature in either Celsius or Fahrenheit, the class should correctly update the corresponding value in the other scale. For example, setting the Celsius temperature to 25°C should automatically update the Fahrenheit temperature to 77°F. Your challenge is to implement the Temperature class following the provided code structure and requirements while ensuring that it handles conversions and input validation accurately.

class Temperature {
    constructor() {
        this.initailcelsiustemperature = 0;
        this.initialfarenhitetemperature = 32;
    }

    set setcelius(temperature) {
        if (typeof temperature === 'number') {
            this.initailcelsiustemperature = temperature;
            this.initialfarenhitetemperature = (temperature * 9/5) + 32;
        }
    }

    get getcelcius() {
        console.log(`Celsius temperature is ${this.initailcelsiustemperature}°C`);
        console.log(`Fahrenheit temperature is ${this.initialfarenhitetemperature}°F`);
    }
}

const temperature = new Temperature();
temperature.setcelius = 230;
temperature.getcelcius; 
