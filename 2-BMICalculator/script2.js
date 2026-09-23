const form = document.querySelector('form');

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height < 0 || height === ' ') {
    results.innerHTML = "Please enter a valid height.";
  }else if (isNaN(weight) || weight < 0 || weight === ' ') {
    results.innerHTML = "Please enter a valid weight.";
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> Your BMI is : ${bmi}</span>`;
  }
});