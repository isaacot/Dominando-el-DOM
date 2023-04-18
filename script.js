const h1 = document.querySelector(`h1`);
const form = document.querySelector(`#form`);
const input1 = document.querySelector(`#Calculo1`);
const input2 = document.querySelector(`#Calculo2`);
const btn = document.querySelector(`#btnCalcular`);
const pResault = document.querySelector(`#resault`);

btn.addEventListener(`click`, sumarInputsValues);

function sumarInputsValues(event){
    //console.log({event});
    //event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResault.innerText = "Resultado:" + sumaInputs; 
}
