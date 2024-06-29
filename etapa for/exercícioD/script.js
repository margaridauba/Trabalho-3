alert("Bem-vindo!");
//apresentar no final o somatório dos valores pares existente entre 1 a 500
let somaPares = 0;
for (let i = 1; i<= 500; i++){
  if(i % 2 == 0){
        somaPares=somaPares+i;
  }
   
}
   
alert(somaPares);