let paint = document.querySelector("canvas").getContext("2d");
let palabras = ["HOLANDA", "EUROPA", "URUGUAY", "MEXICO", "AMERICA"];
let secreto = "";
let anchura = 400/secreto.length;
let letras = "";

paint.strokeStyle = "blue";

//Colorea el fondo del lienzo, eliminar al finalizar
paint.fillStyle = "lightgrey";
paint.fillRect(0,0,600,500);

//Función que sortea palabra dentro del array
function sortearPalabra (){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    secreto = palabra;
    console.log(secreto);};
    
    sortearPalabra();

//Fórmula para dibujar lineas para palabra
function dibujarLinea(x){
    let sumaX = 0;
    for(let i=0;i<secreto.length;i++){
    paint.moveTo((x+sumaX),300);
    paint.lineTo((x+30+sumaX),300);//+30 para que todad las lineas tengar un largo de 30
    sumaX=sumaX+40;}};//+40 para que se genere un espaciado entre cada linea
    
    dibujarLinea(70);

function evento(e){console.log(e);}

document.addEventListener("keydown",e=>{
    evento(e);})

//Solución profe para comprobar cada letra al interactuar con el teclado
/*
function comprobarLetra(key){
    let estado = falso;
    if(key>= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return estado}else{
            estado = true;
            console.log(key);
            return estado;}}

document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    comprobarLetra(letra);};*/

//Linea Inicial del Juego
paint.moveTo(100,250);
paint.lineTo(300,250);

//Dibujo ahorcado
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

//Finalización
paint.stroke();

//EXTRAS
/*let moveToX = [100,150,150,250,250,250,250,250,250];
let moveToY = [250,250,50,50,120,130,130,170,170];
let lineToX = [300,150,150,250,250,270,230,270,230];
let lineToY = [250,50,50,80,170,150,150,190,190];*/

//Solución del profe para el dibujo en canvas
    /*function  dibujarCanvas(){
        paint.linewidth = 8;
        paint.lineCap = "round";
        paint.lineJoin = "round";
        paint.fillstyle = "#F3F5F6";
        paint.strokeStyle = "#8A3871";
    
        paint.fillRect(0,860);
        paint.beginPath();
        paint.moveTo(650,500);
        paint.stroke();
        paint.closePath();}
    
    function dibujarLinea(){
        paint.linewidth = 6;
        paint.lineCap = "round";
        paint.lineJoin = "round";
        paint.fillstyle = "#F3F5F6";
        paint.strokeStyle = "#8A3871";
    
        let anchura = 400/secreto.length;
        for(let i=0; i<secreto.length; i++){
            paint.moveTo(300 + (anchura*i),640)
            paint.lineTo(350 + (anchura*i),640)}
        paint.stroke();
        paint.closePath();}*/

/*Otra idea de lo anterior para una fórmula que dibuje el ahorcado solo
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
