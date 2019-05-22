let buildings = []
let angle= 0;
let size
let eye;
let intersections = []
function setup() {
   createCanvas(displayWidth,500);
   background(0);
   eye = new Eye(50,50);
   for(var i = 0; i < 8; i++){
     size = random(90,200);
     buildings.push(new Building(random((displayWidth/3)-size,displayWidth),random(500-size),size, 'CIRCLE'));
   }
   bottom = createVector(50,670)
   //rameRate(30)

}

function draw() {
    background(angle);
    for(let building of buildings){
        building.show();
    }
    eye.pos.y += 0.5
    eye.castRays(buildings);

    for(var i = 0; i < intersections.length; i++){
      point(intersections[i].x, intersections[i].y)
    }
    eye.show();

    if(eye.pos.y > 670){
       eye.pos.y = 50;
       intersections = []
       angle = 51;
       //noLoop();
     }
}
function mousePressed(){
  size = random(60,200)

  buildings.push(new Building(mouseX, mouseY, size, 'CIRCLE'))
}
