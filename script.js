let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
let moveToX = [100,150,150,250,250,250,250,250,250];
let moveToY = [250,250,50,50,120,130,130,170,170];
let lineToX = [300,150,150,250,250,270,230,270,230];
let lineToY = [250,50,50,80,170,150,150,190,190];

pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,500);

function dibujarLinea(x){
let sumaX = 0;
for(let i=0;i<5;i++){
pincel.strokeStyle = "red";
pincel.moveTo(x+sumaX,400);
pincel.lineTo(x+30+sumaX,400);
sumaX=sumaX+40;}}

dibujarLinea(100);

pincel.strokeStyle = "red";

pincel.moveTo(100,250);
pincel.lineTo(300,250);
pincel.moveTo(150,250);//delta Y =100 (linea vertical completa)
pincel.lineTo(150,50);
pincel.moveTo(150,50);//delta X =100
pincel.lineTo(250,50);
pincel.moveTo(250,50);//delta Y =30
pincel.lineTo(250,80);
pincel.arc(250,100,20,-1.2,2*Math.PI);
pincel.moveTo(250,120);//delta Y =50
pincel.lineTo(250,170);
pincel.moveTo(250,130);//delta Y =20 d X= 20
pincel.lineTo(270,150);
pincel.moveTo(250,130);//delta Y =120 d X= -20
pincel.lineTo(230,150);
pincel.moveTo(250,170);//delta Y =20 d X= 20
pincel.lineTo(270,190);
pincel.moveTo(250,170);//delta Y =20 d X= -20
pincel.lineTo(230,190);

pincel.stroke();

/*
function dibujarAhorcado (){
pincel.strokeStyle = "red";
for (let i=1; i<3; i++){
let Xa = moveToX [i];
let Ya = moveToY [i];
let Xb = lineToX [i];
let Xb = lineToX [i];
pincel.moveTo(Xa,Ya);
pincel.lineTo(Xb,Yb);} break
pincel.stroke();}

*/