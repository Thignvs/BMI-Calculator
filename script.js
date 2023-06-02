window.addEventListener("load", function() {

    const optionElement = document.getElementById("option1");
    if (optionElement) {
    optionElement.checked = true;
    }

    let inputs = document.querySelectorAll("input[type='number']");    
    inputs.forEach(function(input) {
    input.value = 0;
    });

});

const metric = document.getElementById("option1");
const imperial = document.getElementById("option2");
const inputGroup1 = document.getElementById("inputGroup1");
const inputGroup2 = document.getElementById("inputGroup2");

option1.addEventListener("change", function () {
    if (metric.checked) {
    inputGroup1.style.display = "block";
    inputGroup2.style.display = "none";
    }
});

option2.addEventListener("change", function () {
    if (imperial.checked) {
    inputGroup1.style.display = "none";
    inputGroup2.style.display = "block";
    }
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weightt").value);
    const height = parseFloat(document.getElementById("heightt").value) / 100;

    if (weight && height) {
    const bmi = weight / (height * height);
    const bmiFormatted = bmi.toFixed(1);
    let category = "";
    
    const weightMin = 18.5 * (height * height);
    const weigthMax = 24.9 * (height * height);


    if (bmi < 18.5) {
        category = "Underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Healthy weight.";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight.";
    } else {
        category = "Obese.";
    }
    

    document.getElementById("submit-btn").innerHTML = `<p>Your BMI is...</p> <h2>${bmiFormatted}</h2> Your BMI suggests you're a <strong>${category}</strong>
    Your ideal weight is between <strong>${weightMin.toFixed(1)}kgs - ${weigthMax.toFixed(1)}kgs.</strong>`;
    } else {
    document.getElementById("submit-btn").innerHTML =
    "Please enter your Height and Weight";
    }
}

function calculateBMIIMP(){
    const heightFT = parseInt(document.getElementById("heightt-ft").value)
    const heightIN = parseInt(document.getElementById("heightt-in").value)
    const weightST = parseInt(document.getElementById("weightt-st").value)
    const weightLB = parseInt(document.getElementById("weightt-lbs").value)

    const totalWeight = (weightST * 14) + weightLB;
    const totalHeight = (heightFT * 12) + heightIN;

    const heightMeters = ((heightFT * 12) + heightIN) * 0.0254;
    const lowerWeight = (18.5 * heightMeters * heightMeters).toFixed(1);
    const upperWeight = (24.9 * heightMeters * heightMeters).toFixed(1);
    const lowerWeightSt = Math.floor(lowerWeight * 0.157473);
    const lowerWeightLb = Math.floor((lowerWeight * 0.157473 - lowerWeightSt) * 14);
    const upperWeightSt = Math.floor(upperWeight * 0.157473);
    const upperWeightLb = Math.floor((upperWeight * 0.157473 - upperWeightSt) * 14);

    if (totalWeight && totalHeight){
    const BMI = (totalWeight / (totalHeight * totalHeight)) * 703

    if (BMI < 18.5) {
        category = "Underweight.";
    } else if (BMI >= 18.5 && BMI < 25) {
        category = "Healthy weight.";
    } else if (BMI >= 25 && BMI < 30) {
        category = "Overweight.";
    } else {
        category = "Obese.";
    }
    const result = document.getElementById("submit-btn-imp")
    result.innerHTML = `<p>Your BMI is... </p><h2>${BMI.toFixed(1)}</h2> Your BMI suggests you're a <strong>${category}</strong>
    Your ideal weight is between <strong>${lowerWeightSt.toFixed(0)}st ${lowerWeightLb.toFixed(0)}lbs - ${upperWeightSt.toFixed(0)}st ${upperWeightLb.toFixed(0)}lbs.</strong>`;
    }
    else {
        document.getElementById("submit-btn-imp").innerHTML =
        "Please enter your Height and Weight";
    }
}
