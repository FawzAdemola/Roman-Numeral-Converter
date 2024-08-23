const convertButton = document.getElementById('convert-btn');

function conversion(input){
  const romanNumerals = [
  {value: 1000, numeral: 'M'},
  {value: 900, numeral: 'CM'},
  {value: 500, numeral: 'D'},
  {value: 400, numeral: 'CD'},
  {value: 100, numeral: 'C'},
  {value: 90, numeral: 'XC'},
  {value: 50, numeral: 'L'},
  {value: 40, numeral: 'XL'},
  {value: 10, numeral: 'X'},
  {value: 9, numeral: 'IX'},
  {value: 5, numeral: 'V'},
  {value: 4, numeral: 'IV'},
  {value: 1, numeral: 'I'}
  ];

  var answer = "";

  romanNumerals.forEach((element)=>{
    while(input >= element.value){
      input -= element.value;
      answer += element.numeral;
    }
  
  });
  return answer;
}
  
function checkConvert(){
  const inputField = document.getElementById('number').value;
  const inputVal = parseInt(inputField);
  const result = document.getElementById('output');

    if(inputField === ""){
        alert("Please enter a valid number");
      }
    else if(inputVal <= 1){
        alert("Please enter a number greater than or equal to 1");    
    }
    else if(inputVal >= 4000){
        alert("Please enter a number less than or equal to 3999");
      }
    else{
        result.textContent = conversion(inputVal);
    }
}

convertButton.addEventListener("click", checkConvert);