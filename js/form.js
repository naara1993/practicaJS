/*

calcular el valor de las horas de un vehiculo si los valores de las horas no se 
sobreponen y tiene la siguiente tabla

<= 1 -> 4500
> 1 y <= 3 -> 3800
> 3 y <= 5 -> 3000
>5 y <= 8 -> 2500

si el carro dura mas de 24 horas se cobra una tarifa unica por dia de 7500
si el carro dura mas de 30 dias se cobra una tarifa unica de 125000 y se solicita que retire el carro
un carro no puede estar mas de 31 dias
*/


/*
const btn=document.getElementById('btn');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let horas=document.getElementById('txtHoras').value;
    let dias=document.getElementById('txtDias').value;
    let p=calcularPresupuesto(horas,dias);
   document.getElementById('txtResultado').value=" Presupuesto "+p;
})
function calcularPresupuesto(horas,dias){
let presupuesto;
let convertirDiasAhoras = dias * 24;
if(horas>=24){
    presupuesto=7500;
}else if(horas==1){
    presupuesto=4500;
}else if(horas>1 && horas<=3 ){
    presupuesto=4500*1 + 3800*(horas-1);
}else if(horas >3 && horas<=5){
    presupuesto=4500*1+3800*2+3000*(horas-3);
}else if(horas>5 && horas<=8){
    presupuesto=4500*1+3800*2+3000*2+2500*(horas-5);
} else if(convertirDiasAhoras >= 720){
    let horasTotal=convertirDiasAhoras + horas;
    presupuesto=12500;
    console.log("presupuesto por mas de 30 dias y se solicita que saque el carro");
}  
if(convertirDiasAhoras >= 744){
    let horasTotal=convertirDiasAhoras + horas;
    console.log("El carro es removido");
    presupuesto="pasaron mas de 31 dias, el carro es removido del lugar";
}
    return presupuesto;
}
*/

const btn=document.getElementById('btn');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let horas=document.getElementById('txtHoras').value;
    let dias=document.getElementById('txtDias').value;
    let arrayHoras = new Array();
    arrayHoras.push(
        {horas1:1,presupuesto1:4500},
        {horas2:2,horas3:3,presupuesto2:3800},
        {horas4:4,horas5:5,presupuesto3:3000},
        {horas6:6,horas7:7,horas8:8,presupuesto4:2500},
        {horas9:24}
     );
  let resultado =   calcularPresupuesto(dias,horas,arrayHoras);
  document.getElementById('txtResultado').value="El resultado de la operación es :  "+resultado;
})
function calcularPresupuesto(dias,horas,arrayHoras) {
    let presupuestoFinal;
    let diasHora= dias * 24;
     arrayHoras.forEach(element =>{
         if(element.horas1==horas){
             presupuestoFinal =element.presupuesto1;
         }
         if( element.horas2== horas  ||  element.horas3== horas){
             presupuestoFinal=4500+element.presupuesto2*(horas-1);
         }  
        if(element.horas4 == horas || element.horas5==horas){
             presupuestoFinal=4500+3800*2+ element.presupuesto3*(horas-3);
         }   
        if(element.horas6 == horas || element.horas7==horas || element.horas8==horas){
            presupuestoFinal=4500+3800*2+3000*2+element.presupuesto4*(horas-5);
         }
         if(horas>=element.horas9){
            presupuestoFinal=7500;
        }
        if(diasHora>=720){
            presupuestoFinal=12500 + " se pide que retire el carro al pasar mas de 30 dias ";
        }
        if(diasHora>=744){
            presupuestoFinal=" pasaron mas de 31 dias y  se remueve el carro del lugar";

        }
     })
     return presupuestoFinal;
}