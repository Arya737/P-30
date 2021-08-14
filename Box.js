class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':0.0003
    }
    this.Visiblity = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("boxpic.png");
  

    
    
    
    World.add(world, this.body);
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 5){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      //strokeWeight(4);
      //stroke("maroon");
      //fill(1, 24, 67);
      //rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      pop();
    }
    
  }
};