var bullet;
var wall;
var speed,weight,damage;
var thickness;
function setup() {
  createCanvas(800,400);
  thickness = Math.round(random(22,83));
  //createSprite(400, 200, 50, 50);
  wall = createSprite(600,200,thickness,250);
  wall.shapeColor = "white";
  bullet = createSprite(100,200,30,10);
  bullet.shapeColor = "white";
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  bullet.velocityX = speed/5;
}

function draw() {
  background("black");
  bullet.depth = wall.depth+1;
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  collision()
  drawSprites();
  //console.log(damage);
}
function collision(){
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    if(damage>100){
      bullet.shapeColor = "red";
    }
   
    if(damage<=100){
      bullet.shapeColor = "green";
    }
  }
}