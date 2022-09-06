let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,400,400);

pincel.lineWidth = 2;

pincel.fillStyle = "black";
pincel.moveTo(100,300);
pincel.lineTo(300,300);
pincel.stroke();

pincel.fillStyle = "black";
pincel.moveTo(150,300);
pincel.lineTo(150,100);
pincel.stroke();

pincel.fillStyle = "black";
pincel.moveTo(150,100);
pincel.lineTo(250,100);
pincel.stroke();

pincel.fillStyle = "black";
pincel.moveTo(250,100);
pincel.lineTo(250,130);
pincel.stroke();

pincel.fillStyle = "black";
pincel.arc(250,150,20,-1.2,2*Math.PI);
pincel.stroke();

pincel.fillStyle = "black";
pincel.moveTo(250,170);
pincel.lineTo(250,230);
pincel.stroke();

pincel.fillStyle = "black";
pincel.moveTo(250,180);
pincel.lineTo(270,200);
pincel.stroke();

pincel.fillStyle = "black";
pincel.moveTo(250,180);
pincel.lineTo(230,200);
pincel.stroke();

pincel.fillStyle = "black";
pincel.moveTo(250,230);
pincel.lineTo(270,250);
pincel.stroke();

pincel.fillStyle = "black";
pincel.moveTo(250,230);
pincel.lineTo(230,250);
pincel.stroke();
