const specialElementButtons = document.querySelectorAll("[id='js-calculator-button']")
specialElementButtons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    document.getElementById('js-input-field').value += button.innerText;
  })
})
function add(value1, value2){
  return Number(value1) + Number(value2);
}
function subtract(value1, value2){
  return Number(value1) - Number(value2);
}
function divide(value1, value2){
  return Number(value1) / Number(value2);
}

function multiply(value1, value2){
  return Number(value1) * Number(value2);
}
let firstVal;
let operator;
let secondVal;
function selectOperator(operator){
 if(operator=== '+'){return add(firstVal,secondVal)}
 if(operator=== '-'){return subtract(firstVal,secondVal)}
 if(operator=== '*'){return multiply(firstVal,secondVal)}
 if(operator=== '/'){ return divide(firstVal,secondVal)}
}
/*function evaluate(){
let elements= document.getElementById('js-input-field').value
elements = elements.split(/\s*(\+|\-|\*|\/)\s**/
document.querySelector(".js-evaluate-button").addEventListener('click', async ()=>{
  const result= await evaluateInOrder();
  document.querySelector(".js-answer").innerText = result;
})

async function evaluateInOrder(){
  let elements= document.getElementById('js-input-field').value
  elements = elements.split(/\s*(\+|\-|\*|\/)\s*/);
 await selectElementOperator();
async function selectElementOperator(){
for(let i=0; i <= elements.length; i++){
  console.log(elements[i])
  if(elements[i]=== '/'){
    let result=divide(elements[i-1], elements[i+1])
    elements.splice(i,2)
    elements[i - 1] = result
    console.log('division',elements)
    }}
    console.log('multiplication',elements)
    for(let i=0; i <= elements.length; i++){
     if(elements[i]=== '*'){
      let result=multiply(elements[i-1], elements[i+1])
      elements.splice(i,2)
      elements[i - 1] = result
      console.log('multiplication',elements)
      }}
      for(let i=0; i <= elements.length; i++){
 if(elements[i]=== '+'){
        let result=add(elements[i-1], elements[i+1])
        elements.splice(i,2)
        elements[i-1] = result
        console.log('addition',elements)
        }}
        for(let i=0; i <= elements.length; i++){
  if(elements[i]=== '-'){
          let result= subtract (elements[i-1], elements[i+1])
          elements.splice(i,2)
          elements[i - 1] = result
        console.log('subtraction',elements)

            }
}} 
return elements[0];
console.log(elements)
}


