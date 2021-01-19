var serial; 
var portName = "COM3";
var options = { baudrate: 9600 };
var incomingData;
var boxData;
var rowData;
var sceneData;
var boxes = [];
var player;
var scene;
var currentScene;
var previousScene;
var visiblerows = [1,2,3];
var showgame = false;
var playerPositionX = 100;
var playerPositionY = 250;
var prevX = -0.9;
var prevY = 0;
var killfire = false;
var killfireagain = false;
var airblow = 512;
var bg;
var gameover = false;
var gameoverscene;
var narration = true;
var myfont;
var myfont1;
function preload() {
  boxData = loadJSON('./gamerule/boxes.json');
  rowData = loadJSON('./gamerule/rows.json');
  sceneData = loadJSON('./gamerule/scene.json');
  bg = loadImage('assets/background1.png');
  myfont = loadFont('assets/freckleface.ttf');
  myfont1 = loadFont('assets/montserratmedium.ttf');
}
function setup() {
  // put setup code here
  serial = new p5.SerialPort();
  serial.on('list',printList);
  serial.on('connected', serverConnected); 
  serial.on('open', portOpen);        
  serial.on('data', serialEvent);     
  serial.on('error', serialError);
  serial.on('close', portClose); 
  serial.list();
  serial.open(portName, options);
  const c = createCanvas(window.screen.width, window.screen.height);
  scene = new Scene(sceneData[2]);
  player = new Bird(playerPositionX,playerPositionY,50);
  gameoverscene = new Gameover(width/2,height/2);
  narration = new Narrationscene();
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + portList[i]);
  }
}

function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
 
function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  var inString = serial.readStringUntil('\r\n');
  //console.log('inString',inString)
  //check to see that there's actually a string there:
  if (inString.length > 0 ) {
    var sensors = split(inString, ',');            // split the string on the commas
    console.log('receiving sensor data',sensors);
    if (sensors.length > 2) {                      // if there are three elements
      locV = map(sensors[0], -0.98,0.98 , -10, 10); 
      locH = map(sensors[1], -0.98, 0.98, -10, 10);
      airblow = sensors[2];
      //move vertical
      //console.log('locV',prevY,locV,Math.abs(locV - prevY))
      let diff = Math.abs(locV - prevY);
      if(diff > 0.5) {
        if(prevY < locV ) {
          player.down(Math.ceil(diff/6))
        }
        if(prevY > locV ) {
          player.up(Math.ceil(diff/2))
        }
      } else {
        //console.log('NO CHANGE')
      }
      console.log('CHECK X',locH,prevX)
      if(narration && locH < 0 && locH < prevX && Math.abs(prevX-locH) > 0.7) {
        console.log('FLIPPP')
        narration.flipscene()
      }
      prevX = locH;
      prevY = locV;
    }
  }
}
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}
function keyPressed() {
  if(keyCode === RIGHT_ARROW ) {
    showgame = true;
    playerPositionX = playerPositionX+40;
  }
  if(keyCode === UP_ARROW ) {
    showgame = true;
    killfire = true;
    player.up();
  }
  if(keyCode === DOWN_ARROW ) {
    killfireagain = true;
    showgame = true;
    player.down();
  }
}
function draw() {
  // put drawing code here
  //set background by scene
  background(bg);
  player.update();
  player.show(playerPositionX,playerPositionY);
  if(showgame) {
    scene.show();
    setScene();
  }
  else if(gameover) {
    gameoverscene.show();
  } else if(narration) {
    narration.show()
  }
}
//helpers
function setScene() {
  console.log('SET SCENE',currentScene,previousScene);
  //dispatch to scene to class to create or move
  if(currentScene != previousScene) {
    scene = new Scene(sceneData[currentScene]);
  }
  previousScene = currentScene;
}
