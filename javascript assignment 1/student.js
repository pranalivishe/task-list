class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    // This method generates the plain text matching the requested output structure
    displayDetails(studentNumber) {
        return `--- Student ${studentNumber} Details ---\n` +
               `Name: ${this.name}\n` +
               `Age: ${this.age}\n` +
               `Marks: ${this.marks}\n`;
    }
}

// Creating only 1 student object
const student1 = new Student("Alex Smith", 20, 88.5);

// Print the result to the console
console.log(student1.displayDetails(1));
