let angle=0;
function setup(){
    
    createCanvas(400,400,WEBGL);//WebGl used for 3D rendering
    
    }
function draw(){
    background(0);
    rectMode(CENTER);
    noStroke();
    fill(175);
    //translating it with the help of the mouse
    translate(mouseX-(width/2),mouseY-(height/2));
    // rotating in all x,y,z direction
    rotateX(angle);
    rotateY(angle*0.4);
    rotateZ(angle*0.04);
    rect(0,0,100,100);
    angle=angle+0.07;
}