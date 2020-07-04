var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(0,200,50,50);

}

function draw() {
  background(20); 
  bullet.velocityX = speed;
    if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
      
    
      if(damage>10){
        bullet.shapeColor = "red";
      }
  
      if(damage<10){
        bullet.shapeColor = "green";
      }




    }
     
      
  
  




  drawSprites();
  text(Math.round(damage),200,300);
}
function hasCollided(nbullet,nwall){
    if(nbullet.x-nwall.x<=nbullet.width/2+nbullet.width/2 &&
      nwall.x-nbullet.x<=nbullet.width/2+nbullet.width/2){
        return true;
    }

      return false;





  }



