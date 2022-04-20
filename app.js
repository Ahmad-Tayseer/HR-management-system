"use strict";

// constructor:

function Employee(emplyeeID, fullName, department, level, imageURL, salary) {
    this.emplyeeID = emplyeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
}

Employee.prototype.salary = function () {
    if (this.level == "Senior") {
        this.salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    } else if (this.level == "Mid-Senior") {
        this.salary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
    } else {
        this.salary = Math.floor(Math.random() * (1000 - 500)) + 500;
    }   
    console.log(this.salary*0.925);
};

Employee.prototype.render = function () {

    document.write(`<h1>The Employee ${this.fullName} have a ${this.salary}$ salary. </h1>`)
}

let ghazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior");
let lana = new Employee("1001", "Lana Ali", "Finance", "Senior");
let tamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior");
let safi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior");
let omar = new Employee("1004", "Omar Zaid", "Development", "Senior");
let rana = new Employee("1005", "Rana Saleh", "Development", "Junior");
let hadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior");

let employees = [ghazi, lana, tamara, safi, omar, rana, hadi];


for (let i = 0; i < employees.length; i++) {
    this.salary = employees[i].salary();
}

for (let i = 0; i < employees.length; i++) {
    employees[i].render();
}




// ghazi.salary();
// lana.salary();
// tamara.salary();
// safi.salary();
// omar.salary();
// rana.salary();
// hadi.salary();

// ghazi.render();
// lana.render();
// tamara.render();
// safi.render();
// omar.render();
// rana.render();
// hadi.render();






