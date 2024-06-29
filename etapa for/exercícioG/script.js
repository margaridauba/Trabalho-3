alert("Bem-vindo!");
 
let num=3
  
for(let i = 0;i<=15;i++){
   document.body.innerHTML+=`<p>${num}<sup>${i}</sup> = ${num**i} </p>`
 }