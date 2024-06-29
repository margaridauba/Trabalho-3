alert("Bem-vindo!");
//laço dentro de laço
let =i=0, somatorio=0;
while(i<15){
let valor= parseInt(prompt("informe um valor;"));
let fatorial=1
while(valor>0){
fatorial= fatorial*valor
valor--;
}
 somatorio=somatorio+fatorial
 
i++
}
document.body. innerHTML+=`${somatorio}`