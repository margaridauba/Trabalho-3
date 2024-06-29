alert("Bem-vindo!");
let termo = 1;
let anterior = 0; //inicial
let posterior = 1;   // próximo
let resultado = 1;
while(termo<16){
document.body.innerHTML+= `<span>${resultado}, </span>`
//0+1 =1
resltado=(posterior + anterior ); //1

anterior=posterior;//1
posterior=resultado;
 

termo++
}