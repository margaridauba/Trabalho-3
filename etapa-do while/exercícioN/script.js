alert("Bem-vindo!");
let v=0, a=-1, s=0 ,m=0;
do{
v=parseInt(prompt("Informe o valor"))
a++
if(v>0){
s=s+v
}
m=s/a
  
}while(v>0);


document.body.innerHTML+= `<p> o somatorio é: ${s} <b>
A Média é; ${m}<br>
O A quantidade de números digitados é: ${a}
  </P>` 
