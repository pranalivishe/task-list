class Car {
    constructor(brand, model, priceUSD) {
        this.brand = brand;
        this.model = model;
        // Convert USD to INR (1 USD = 85 INR)
        this.priceINR = priceUSD * 85; 
    }

    // This method generates the plain text matching the requested output structure
    displayDetails(carNumber) {
        // toLocaleString('en-IN') adds Indian-style formatting (e.g., 22,10,000)
        const formattedPrice = this.priceINR.toLocaleString('en-IN');

        return `--- Car ${carNumber} Details ---\n` +
               `Brand: ${this.brand}\n` +
               `Model: ${this.model}\n` +
               `Price: ₹${formattedPrice}\n`;
    }
}

// Creating the 3 car objects
const car1 = new Car("Toyota", "Camry", 26000);
const car2 = new Car("Honda", "Civic", 24000);
const car3 = new Car("Tesla", "Model 3", 42000);

// Combine and print the results to the console
console.log(car1.displayDetails(1));
console.log(car2.displayDetails(2));
console.log(car3.displayDetails(3));
