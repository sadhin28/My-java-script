// function calculateBMI() {
//     const weight = parseFloat(document.getElementById('weight').value);
//     const height = parseFloat(document.getElementById('height').value);
    
//     // Check if inputs are valid
//     if (!weight || !height || height <= 0) {
//       document.getElementById('result').innerHTML = 'Please enter valid weight and height values.';
//       return;
//     }
    
//     // Calculate BMI: weight (kg) / (height (m))^2
//     const bmi = weight/height*height;
//     let interpretation = '';
    
//     // Interpret the BMI result
//     if (bmi < 18.5) {
//       interpretation = 'Underweight';
//     } else if (bmi < 24.9) {
//       interpretation = 'Normal weight';
//     } else if (bmi < 29.9) {
//       interpretation = 'Overweight';
//     } else {
//       interpretation = 'Obesity';
//     }
    
//     document.getElementById('result').innerHTML = 
//       'Your BMI is ' + bmi.toFixed(2) + ' (' + interpretation + ').';
//   }
function calculateBmi(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height=parseFloat(document.getElementById('height').value);
    if(!weight || !height || height <= 0){
        document.getElementById('result').innerHTML='Place enter valid weight and height.';
    }
    const bmi=weight / (height * height);
    let interpretation= '';
    
    if(bmi <18.5){
        interpretation='Underweight';
    }
    else if(bmi > 24.9){
        interpretation='Normal Weight';
    }
    else if(bmi>29.9){
        interpretation='Overweight';
    }
    else{
        interpretation='Obesity'
    }
    document.getElementById('result').innerHTML='Your MBI is' + bmi.toFixed(2) + ' (' + interpretation +').';
}