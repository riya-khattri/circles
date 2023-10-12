// move the cursor on the canvas to see a trail of concentric circles that fade away as the cursor is moved further 
var xpos = [];
var ypos = [];

var arrayMax = 50;
    
  
function setup() {
  createCanvas(400, 400);  
  }
 
function draw() {
     background(200);
     fill (0,0,0);
     textSize(16);
     //textAlign(LEFT);
     text('Move the cursor on the canvas',10, 30);
    

  for (var i=0;i<200;i++){
    var a = map (i,0,xpos.length,30,100);
    var b = map (i,0,xpos.length,100,200);
    var d = map (i,0,xpos.length,20,50);
    noStroke();
    
    fill(111,50,b,a);
    // fill(200,0,0,160);
    ellipse(xpos[i],ypos[i],50);
  }
  xpos.push(mouseX);
  ypos.push(mouseY);
  
  if (xpos.length>arrayMax){
    // xpos.splice(0,1); //use either splice or shift
    // ypos.splice(0,1);
    
    xpos.shift();
    ypos.shift();
    
    //xpos.splice(0,1);
  }
 }

