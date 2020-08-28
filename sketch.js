var ball,position, dataBase;

function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballRef = dataBase.ref("ball/position")
    ballRef.on("value",readData, checkE);
}

function readData(Data) {
  position = Data.val();
  ball.x = position.x;
  ball.y = position.y;
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    dataBase.ref("ball/position").set({
        "x": position.x+x,
        "y": position.y+y,
    })
}

function checkE () {
    console.log("unable to read values");
}