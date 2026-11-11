let studentName = "Dorothy Otieno";
let registrationNumber = "com/b/01-00205/2025";
let academicProgramme = "Bachelor of Information Technology";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);

function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 60 && score < 70) {
        return "B";
    } else if (score >= 50 && score < 60) {
        return "C";
    } else if (score >= 40 && score < 50) {
        return "D";
    } else if (score >= 0 && score < 40) {
        return "E";
    } else {
        return "Invalid Score"; // Handles scores outside 0-100 range
    }
}

let scoreToTest = 75;
let resultGrade = calculateGrade(scoreToTest);

alert("The grade for a score of " + scoreToTest + " is: " + resultGrade);

const studentForm = document.querySelector('form'); 

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const studentNameVal = document.getElementById('fullname').value.trim();
    const regNumberVal = document.getElementById('regnumber').value.trim();
    const emailVal = document.getElementById('email').value.trim();

    let outputContainer = document.getElementById('student-output');
    if (!outputContainer) {
        outputContainer = document.createElement('div');
        outputContainer.id = 'student-output';
        outputContainer.style.marginTop = '1.5rem';
        outputContainer.style.padding = '1rem';
        outputContainer.style.backgroundColor = '#f1f5f9';
        outputContainer.style.borderRadius = '6px';
        studentForm.appendChild(outputContainer);
    }

    let successMessage = document.getElementById('success-message');
    if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.id = 'success-message';
        successMessage.style.marginTop = '1rem';
        successMessage.style.fontWeight = 'bold';
        studentForm.appendChild(successMessage);
    }


    if (studentNameVal === "" || regNumberVal === "") {
        successMessage.style.color = "#d32f2f";
        successMessage.textContent = "Error: Full Name and Registration Number cannot be empty!";
        outputContainer.innerHTML = "";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailVal)) {
        successMessage.style.color = "#d32f2f";
        successMessage.textContent = "Error: Please enter a valid email address format!";
        outputContainer.innerHTML = "";
        return;
    }

    successMessage.style.color = "#2e7d32";
    successMessage.textContent = "Registration submitted successfully!";

    outputContainer.innerHTML = `
        <h4>Submitted Student Information:</h4>
        <p><strong>Name:</strong> ${studentNameVal}</p>
        <p><strong>Registration Number:</strong> ${regNumberVal}</p>
        <p><strong>Email Address:</strong> ${emailVal}</p>
    `;
});