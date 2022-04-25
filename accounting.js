'use strict';

let tableEl = document.getElementById("tableID");

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

Employee.prototype.renderTable = function () {
    let tr = document.createElement('tr');
    tableEl.appendChild(tr);

    let departmentTd = document.createElement('td');
    departmentTd.textContent = departmentIndication();
    tr.appendChild(departmentTd);


}

let ghazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let lana = new Employee("1001", "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let tamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let safi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let omar = new Employee("1004", "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let rana = new Employee("1005", "Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
let hadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");


for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].renderTable();
}

// function departmentIndication() {
//     let administrationRaw = 0;
//     let financeRaw = 0;
//     let marketingRaw = 0;
//     let developmentRaw = 0;
//     for (let i = 0; i < allEmployees.length; i++) {
//         if (allEmployees[i].this.department == 'Administration') {
//             administrationRaw = administrationRaw +1;
//         } else if (allEmployees[i].this.department == 'Finance') {
//             financeRaw = financeRaw +1;
//         } else if (allEmployees[i].this.department == 'Marketing') {
//             marketingRaw = marketingRaw +1;
//         } else if (allEmployees[i].this.department == 'Development') {
//             developmentRaw = developmentRaw +1;
//         }
//     }
// }


