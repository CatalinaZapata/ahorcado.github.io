let paint = document.querySelector("canvas").getContext("2d");
let moveToX = [100,150,150,250,250,250,250,250,250];
let moveToY = [250,250,50,50,120,130,130,170,170];
let lineToX = [300,150,150,250,250,270,230,270,230];
let lineToY = [250,50,50,80,170,150,150,190,190];
    let palabras = ["HOLANDA", "EUROPA", "URUGUAY", "MEXICO", "AMERICA"];
let secreto = "";

    function sortearPalabra (){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    secreto = palabra;
    console.log(secreto);};

    sortearPalabra();

    /*function  dibujarCanvas(){
        paint.linewidth = 8;
        paint.line cap = "round";
        paint.lineJoin = "round";
        paint.fillstyle = "#F3F5F6";
        paint.strokeStyle = "#8A3871";
    
        paint.fillRect(0,01220,860);
        paint.beginPath();
        paint.moveTo(650,500);
        paint.stroke();
        paint.closePath();}
    
    function dibujarLinea(){
        paint.linewidth = 6;
        paint.line cap = "round";
        paint.lineJoin = "round";
        paint.fillstyle = "#F3F5F6";
        paint.strokeStyle = "#8A3871";
    
        let anchura = 600/secreto.length;
        for(let i=0; i<secreto.length; i++){
            paint.moveTo(500 + (anchura),640)
            paint.lineTo(500 + (anchura),640)}
        paint.stroke();
        paint.closePath();}*/


paint.fillStyle = "lightgrey";
paint.fillRect(0,0,600,500);

function dibujarLinea(x){
let sumaX = 0;
for(let i=0;i<5;i++){
paint.strokeStyle = "blue";
paint.moveTo(x+sumaX,400);
paint.lineTo(x+30+sumaX,400);
sumaX=sumaX+40;}}

dibujarLinea(100);

paint.strokeStyle = "red";

paint.moveTo(100,250);
paint.lineTo(300,250);
paint.moveTo(150,250);//delta Y =100 (linea vertical completa)
paint.lineTo(150,50);
paint.moveTo(150,50);//delta X =100
paint.lineTo(250,50);
paint.moveTo(250,50);//delta Y =30
paint.lineTo(250,80);
paint.arc(250,100,20,-1.2,2*Math.PI);
paint.moveTo(250,120);//delta Y =50
paint.lineTo(250,170);
paint.moveTo(250,130);//delta Y =20 d X= 20
paint.lineTo(270,150);
paint.moveTo(250,130);//delta Y =120 d X= -20
paint.lineTo(230,150);
paint.moveTo(250,170);//delta Y =20 d X= 20
paint.lineTo(270,190);
paint.moveTo(250,170);//delta Y =20 d X= -20
paint.lineTo(230,190);

paint.stroke();

/*
function dibujarAhorcado (){
pincel.strokeStyle = "red";
for (let     i=1; i<3; i++){
let Xa = moveToX [i];
let Ya = moveToY [i];
let Xb = lineToX [i];
let Xb = lineToX [i];
pincel.moveTo(Xa,Ya);
pincel.lineTo(Xb,Yb);} break
pincel.stroke();}
*/