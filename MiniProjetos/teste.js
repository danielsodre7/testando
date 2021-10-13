
/*
let validarBin = /^[0-1]{8}$/;

function binDec () {
    const convert_bin = 010101;
    const valido = validarBin.exec(convert_bin.value)

    if (!valido){
        return;
    } else {
        alert("Só incerir 0 ou 1");
    }
    
    parseInt(convert_bin, 2);

    return true;
}
 

console.log(binDec);



function binDec (binario) {
    
    var validarBin = new RegExp(/^[0-1]{8}$/);
    
    return validarBin.test(binario)       
    
}


console.log(binDec('01010101'));
*/

/*
function validbin (binario) {
            
    var validarBin = new RegExp(/^[0-1]{0,8}$/);

    return validarBin.test(binario)       

}

function binDec (convertBin) {
    

if (validbin !== convertBin) {
    return parseInt(convertBin, 2);            
} else {
    return false;  
}

}

console.log(binDec('323232'));
console.log(binDec('010101'));
*/
/*
function validPhone (phone) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(phone);
}


console.log(validPhone('(31)3534-2323'))
*/



/*

function alterarBordas (numero) {
    const borda1 = document.getElementById("r1").value;
    const borda2 = document.getElementById("r2").value;
    const borda3 = document.getElementById("r3").value;
    const borda4 = document.getElementById("r4").value;



    for (element of numero) {

        element.addEventListener((e)=>{
            e.target.style.borderradius = borda1, borda2, borda3, borda4;
        })
        

    }


}
*/

/*
let numeroBorda = document.querySelector(`#s_${numero}`);
let keyElement = document.querySelector(`div[data-key="${numero}"]`);


let bodyPrincipal = document.querySelectorAll('.div-filho');


if(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
}

for (element of bodyPrincipal){
    element.addEventListener('input', (e)=>{
    
        e.target.style.height = "90px";
        e.target.style.width = "200px";
        e.target.style.backgroundColor = "#e8b4fa";

}, false);

}
}

],
*/

/*
function alterarBordas () {
    let borda1 = 15;
    let borda2 = 50;
    let borda3 = 5;
    let borda4 = 80;


let bordas = (`${borda1}px ${borda2}px ${borda3}px ${borda4}px`);

return bordas;

}

console.log(alterarBordas())
*/

//https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md

function caucValor(caucula,simb,caucula2) {

    var validarBin1 = new RegExp(/^(\d{0,9})?(\,\d{0,2})?$/);
    var validarSimb = new RegExp(/^([+]{1})?([-]{1})?([*]{1})?([/]{1})$/);
    var validarBin2 = new RegExp(/^(\d{0,9})?(\,\d{0,2})?$/);
    return validarBin1.test(caucula);
    return validarSimb.test(simb);
    return validarBin2.match(caucula2);
    } //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    

console.log(caucValor('0,22','*', '8,11'));