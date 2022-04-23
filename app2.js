"use strict";

function Employee(emplyeeID, fullName, department, level, imageURL, salary) {
    this.emplyeeID = emplyeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
Employee.prototype.salary = function () {
    if (this.level == "Senior") {
        this.salary = (getRndInteger(1500, 2000)*(1-7.5/100)).toFixed(2);
    } else if (this.level == "Mid-Senior") {
        this.salary = (getRndInteger(1000, 1500)*(1-7.5/100)).toFixed(2);
    } else {
        this.salary = (getRndInteger(500, 1000)*(1-7.5/100)).toFixed(2);
    }   
    console.log(this.salary);
};

Employee.prototype.render = function () {
    document.write(`<h2>The Employee ${this.fullName} have a ${this.salary}$ salary. </h2>`);
}

let ghazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let lana = new Employee("1001", "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let tamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let safi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let omar = new Employee("1004", "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let rana = new Employee("1005", "Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
let hadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");


let employees = [ghazi, lana, tamara, safi, omar, rana, hadi];


for (let i = 0; i < employees.length; i++) {
    this.salary = employees[i].salary();
}

for (let i = 0; i < employees.length; i++) {
    employees[i].render();
}
