"use strict";

// constructor:

let sectionEl = document.getElementById("cardSection");
// let administrationEl = document.getElementById("administrationSection");
// let marketingEl = document.getElementById("marketingSection");
// let develomentEl = document.getElementById("developmentSection");
// let financeEl = document.getElementById("financeSection");
let formEl = document.getElementById("formSection");
// console.log(sectionEl);
let allEmployees = [];

function Employee(emplyeeID, fullName, department, level, imageURL, salary) {
    this.emplyeeID = emplyeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;

    allEmployees.push(this);
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
    
    let image = document.createElement('img');
    image.src = this.imageURL;
    sectionEl.appendChild(image);
    image.style.width = '10rem';

    let name = document.createElement('h3');
    name.textContent = `Name: ${this.fullName}`;
    sectionEl.appendChild(name);

    let emplyeeId = document.createElement('h3');
    emplyeeId.textContent = `ID: ${this.emplyeeID}`;
    sectionEl.appendChild(emplyeeId);    

    let departmentEl = document.createElement('h3');
    departmentEl.textContent = `Department: ${this.department}`;
    sectionEl.appendChild(departmentEl);

    let levelEl = document.createElement('h3');
    levelEl.textContent = `Level: ${this.level}`;
    sectionEl.appendChild(levelEl);
}

let ghazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let lana = new Employee("1001", "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let tamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let safi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let omar = new Employee("1004", "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let rana = new Employee("1005", "Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
let hadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");


// let employees = [ghazi, lana, tamara, safi, omar, rana, hadi];


// for (let i = 0; i < allEmployees.length; i++) {
//     this.salary = allEmployees[i].salary();
// }

function renderAll() {
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].render();
    }
}

function idNumberGenerator() {
    let idNumber = '';
    for (let i = 0; i < 4; i++) {
     idNumber = idNumber + getRndInteger(0, 9);
    }
    return idNumber;
}

// let header = document.getElementById('headerID');

// let image = document.createElement('img');

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log("form event", event);

    let fullName = event.target.fname.value;
    let idNumber = idNumberGenerator();
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imageURL = event.target.imgUrl.value;

    // console.log("Image:" + imageURL);
    // console.log(`Name: ${fullName} - "ID:" ${idNumber}`);
    // console.log(`Department: ${department} - Level: ${level}`);

    let newEmployee = new Employee(idNumber, fullName, department, level, imageURL);
    // console.log(newEmployee);
    newEmployee.render();
    // renderAll();
    saveData([newEmployee]);
}

function saveData(data) {
    let stringifyData = JSON.stringify(data);
    localStorage.setItem('employees', stringifyData);
}

function getData() {
    let retrievedData = localStorage.getItem('employees');
    let arrayData = JSON.parse(retrievedData);
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            new Employee(arrayData[i].emplyeeID, arrayData[i].fullName, arrayData[i].department, arrayData[i].level, arrayData[i].imageURL);
        }
    } 
    renderAll();
}

getData(); 






