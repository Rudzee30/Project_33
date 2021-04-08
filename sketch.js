const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState="play";
var engine, world;
var g,g1,g2,g4;
var plinkos=[];
var divs=[];
var part;
var divisionHeight=300;
var score=0;
var count=0;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,800);
    g4=createSprite(240,450,480,10);
    g4.shapeColor="LightGreen";
    engine = Engine.create();
    world = engine.world;
    
    g= new Ground(240,785,480,30);
    g1= new Ground(5,400,12,800);
    g2= new Ground(240,5,480,10);
    g3= new Ground(475,400,10,800);
    for(var k=20;k<=width;k=k+89){
        divs.push(new Div(k,height-divisionHeight/2,10,divisionHeight));
    }
    for(var j=40;j<=width;j+=50){
        plinkos.push(new Plinko(j,75,10));
    }
    for(var j=40;j<=width;j+=50){
        plinkos.push(new Plinko(j-17,175,10));
    }
    for(var j=40;j<=width;j+=50){
        plinkos.push(new Plinko(j,375,10));
    }
    for(var j=40;j<=width;j+=50){
        plinkos.push(new Plinko(j+17,275,10));
    }
    
    
    
}

function draw(){
    background(0);
    
    noStroke();
    textSize(35);
    fill("white");
    text("Score : " + score, width-300, 50);
    noStroke();
    textSize(30);
    fill("Magenta");
    text("500", 40,770);
    text("500", 400,770);
    text("200", 130,770);
    text("100", 220,770);
    text("200", 305,770);

    Engine.update(engine);
    
    
    mousePressed();
    drawSprites();
    fill("Red");
    g.display();
    g1.display();
    g2.display();
    g3.display();
    
    for (var k=0;k<divs.length;k++){
        divs[k].display();
    }
    for (var k=0;k<plinkos.length;k++){
        plinkos[k].display();
    }
    if(part!=null){
        part.display();
        if (this.body.position.y>450){
            if(this.body.position.x<92||this.body.position.x>368){
              score+=500;
              
            }
            else if(this.body.position.x<184||this.body.position.x<276){
              score+=200;
              
            }
            else{
              score+=100;
              
            }
            part=null
        }
        if(count=5){
            gameState="end";
        }
    }
    
}
function mousePressed(){
    if(gameState!=="end"){
        
        part=new Particle(mouseX,10,10);
        count++

    }
}
