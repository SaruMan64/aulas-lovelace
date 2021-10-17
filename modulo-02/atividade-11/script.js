var ctx = document.getElementById('canvas').getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.translate(canvas.width / 2, canvas.height / 2);
if ( canvas.width <= canvas.height){
    len = canvas.width * 0.65;    
}
else{
    len = canvas.height * 0.65;
}

ctx.lineWidth = 1;

var gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, len*.7);
gradient.addColorStop(0, 'black');
gradient.addColorStop(0.5, 'white');
gradient.addColorStop(1, 'black');
ctx.fillStyle = gradient;


function Square(len, number, ang){
    ctx.rotate(ang);
    ctx.fillRect(-len*number, -len*number, 2*len*number, 2*len*number);
    ctx.strokeRect(-len*number, -len*number, 2*len*number, 2*len*number);
}

function rect(len){
    Square(len/2, 1, 0);
    Square(len/2, 1, Math.PI /4);
    Square(len/2, Math.sqrt(2)/2, 0);
    Square(len/2, Math.sqrt(2)/2, Math.PI /4);
    len=len/2;
    if (len > 5){
        rect(len);
    } 
}
rect(len);