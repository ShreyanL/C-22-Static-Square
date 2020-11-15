const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup()
{
    var canvas = createCanvas(400, 400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    var ground_options =
    {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
    World.add(myWorld, ground);

    console.log(ground);

    //Make ball bounce to max. using restitution
    var options =  { restitution:1.0 }
    ball = Bodies.circle(200, 100, 20, options);
    World.add(myWorld, ball)
}

function draw()
{
   
    background(0);
    Engine.update(myEngine);

    //Show the ground
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    
    //Show the ball
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    
}