let buildings = []
let angle= 0;
let size
let eye;
let bottom;
function setup() {
   createCanvas(displayWidth,720);
   background(52);
   eye = new Eye(50,50);
   for(var i = 0; i < 8; i++){
     size = random(90,200);
     buildings.push(new Building(random((displayWidth/3)-size,displayWidth),random(720-size),size, 'CIRCLE'));
   }
   bottom = createVector(50,670)

}

function draw() {
    background(51);
    for(let building of buildings){
        building.show();
    }
    eye.pos.y += 0.5
    eye.castRays(buildings);
    eye.show();
    if(eye.pos.y > 670) eye.pos.y = 50
}
function mousePressed(){
  size = random(60,200)

  buildings.push(new Building(mouseX, mouseY, size, 'CIRCLE'))
}
