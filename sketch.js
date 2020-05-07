let about, final, sketchbook, credit, canvas;
let resize = false;
//sherrieMain
let t, amt, startColor, newColor;
//sherrieFinal
let al, alc;
//ani
let meil, love, idiot, stupid;
//cher
let img, img2;
//cloe
let bullet, KittyImg, MrMeowster;
//harri
let amp, song, button;
let volhistory = [];
//jeff
let place, move;
//lauren
let speed = 0.5;
let scale = 50;
//minky
let assaults = ['pretty', 'hot', 'is she legal for me?', 'is she a virgin?', 'would totally go down', 'too thin for my taste', 'too ugly'];
let assault, femstu, eye;
//os
let x;
//ravi
let brushsize;
//rong
let speed1, speed2;
//sanding
let inconsolata;
//winnie
let c, d, toasty, toast, pb, banana;
let finalProjectCanvas=false;
let aboutCanvas=false;



function preload() {
  song = loadSound('assets/harri.mp3');
  inconsolata = loadFont('assets/Inconsolata.otf');
  toast = loadImage('assets/toast.png');
  pb = loadImage('assets/peanutbutter.png');
  banana = loadImage('assets/slicedbanana.png');
  al = loadImage('assets/al.png');
  alc = loadImage('assets/al-cl.png');
}

//Student data
let students = [
  {
    name: "sherrie",
    show: true,
    drawFunc: sherrieMain,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      harriButton = createButton('Click to Play/Pause/Repeat');
      harriButton.hide();
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      background(255);
      t = 0;
      stroke(0, 0.9);
      noFill();
    }
  },
  {
    name: "sherrieFinal",
    show: false,
    drawFunc: sherrieSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();  
    }
  },
  {
    name: "ani",
    show: false,
    drawFunc: aniSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      love = random(0, 400);
      idiot = random(0, 400);
      miel = random(0, 400);
      stupid = random(0, 400);
    }
  },
  {
    name: "yana",
    show: false,
    drawFunc: yanaSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight, WEBGL);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      detailX = createSlider(3, 24, 3);
      detailX.position(200, height + 5);
      detailX.style('width', '180px');
      fill(255);
    }
  },
  {
    name: "cathy",
    show: false,
    drawFunc: cathySketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight, WEBGL);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
    }
  },
  {
    name: "cher",
    show: false,
    drawFunc: cherSketch,
    setup: function () {
      img = loadImage('assets/cher-scan.png');
      img2 = loadImage('assets/cher-scan.png');
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
    }
  },
  {
    name: "chloe",
    show: false,
    drawFunc: chloeSketch,
    setup: function () {
      kittyImage = loadImage('assets/chloe-gun.gif');
      bulletImage = loadImage('assets/chloe-bullet.png');
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      MrMeowster = createSprite(150, height - 400);
      MrMeowster.addAnimation('normal', 'assets/Mr.Meowsters-Minigun-Enlarged-1.png', 'assets/Mr.Meowsters-Minigun-Enlarged-1.png', 'assets/Mr.Meowsters-Minigun-Enlarged-1.png', 'assets/Mr.Meowsters-Minigun-Enlarged-1.png', 'assets/Mr.Meowsters-Minigun-Enlarged-2.png', 'assets/Mr.Meowsters-Minigun-Enlarged-2.png', 'assets/Mr.Meowsters-Minigun-Enlarged-2.png', 'assets/Mr.Meowsters-Minigun-Enlarged-2.png');
      bullets = new Group();
    }
  },
  {
    name: "harri",
    show: false,
    drawFunc: harriSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      let col = color(255);
      harriButton.show();
      harriButton.style('z-index', '1');
      harriButton.style('color', col);
      harriButton.position((width / 2) - 50, (height / 2) - 100);
      harriButton.mousePressed(toggleSong);
      song.play();
      amp = new p5.Amplitude();
    }
  },
  {
    name: "jeff",
    show: false,
    drawFunc: jeffSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      place = 255;
      move = 1;
    }
  },

  {
    name: "jingzhou",
    show: false,
    drawFunc: jingzhouSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      fill(255);
    }
  },

  {
    name: "lauren",
    show: false,
    drawFunc: laurenSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      fill(255);
    }
  },
  {
    name: "lucas",
    show: false,
    drawFunc: lucasSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      background(127);
    }
  },
  {
    name: "minky",
    show: false,
    drawFunc: minkySketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      femstu = loadImage("assets/femstu.jpg");
      eye = loadImage("assets/eye.png");
    }
  },
  {
    name: "os",
    show: false,
    drawFunc: osSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight, WEBGL);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
    }
  },
  {
    name: "ravi",
    show: false,
    drawFunc: raviSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      blendMode(DIFFERENCE);
      background(255);
    }
  },
  {
    name: "rong",
    show: false,
    drawFunc: rongSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      speed1 = 0;
      speed2 = 0;
    }
  },
  {
    name: "russell",
    show: false,
    drawFunc: russellSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
    }
  },
  {
    name: "sanding",
    show: false,
    drawFunc: sandingSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight, WEBGL);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      textFont(inconsolata);
    }
  },
  {
    name: "sarah",
    show: false,
    drawFunc: sarahSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      background(127);
      capture = createCapture(VIDEO);
      capture.size(width, height);
      capture.hide();
    }
  },
  {
    name: "tim",
    show: false,
    drawFunc: timSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
    }
  },
  {
    name: "winnie",
    show: false,
    drawFunc: winnieSketch,
    setup: function () {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      harriButton.hide();
      toasty = true;
    }
  },
]


///////////////////////

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resize = true;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  about = document.getElementById("about");
  sketchbook = document.getElementById("sketchbook");
  final = document.getElementById("final");

  //sherrieMain
  startColor = color(255, 255, 255);
  //   change color here!
  newColor = color(random(200, 255), random(200, 255), random(200, 255), 0.8);
  amt = 0;
  background(startColor);
  stroke(0, 0.8);
  noFill();
  t = 0;
  showStudent('sherrie');
}



// Runs all the time
function draw() {

  let activeStudent = students.find(function (student) {
    return student.show == true;
  })
  activeStudent.drawFunc();

  if (finalProjectCanvas === true){
    background(255);
  }

  if (aboutCanvas === true){
    background(255, 100);
  }

}

function showAbout() {
  about.style.display = 'block';
  sketchbook.style.display = 'none';
  final.style.display = 'none';
  harriButton.hide();
  finalProjectCanvas = false;
  aboutCanvas = true;
}

function showSketchbook() {
  sketchbook.style.display = 'block';
  about.style.display = 'none';
  final.style.display = 'none';
  harriButton.hide();
  finalProjectCanvas = false;
  aboutCanvas = false;
}

function showFinal() {
  final.style.display = 'block';
  about.style.display = 'none';
  sketchbook.style.display = 'none';
  harriButton.hide();
  aboutCanvas = false;
  background(255);
  finalProjectCanvas=true;
}


function showStudent(name) {
  console.log('trying to show student', name)
  var artistCredit = document.getElementById(name + '_credit');

  // Hide all students
  for (let index = 0; index < students.length; index++) {
    const student = students[index];
    student.show = false;
    let student_credit = document.getElementById(student['name'] + '_credit')
    student_credit.style.display = 'none';
  }
  // Setup the student
  if (finalProjectCanvas== false){  let student = students.find(s => s.name == name)
  student.setup()
  student.show = true;
  artistCredit.style.display = 'block';}else{
    student.show = false;
  artistCredit.style.display = 'none';
  }

}

function showFinalProject(name) {
  finalProjectCanvas=true;
 // console.log('trying to display final from', name)
  var finalDivs = document.getElementById(name + '_final');
  // Hide all finals
  for (let index = 0; index < students.length; index++) {
    const student = students[index];
    let student_final = document.getElementById(student['name'] + '_final')
    let student_credit = document.getElementById(student['name'] + '_credit')
    student_credit.style.display = 'none';
    student_final.style.display = 'none';
  }
  // display div
  if (finalDivs.style.display == 'none'){
    finalDivs.style.display = 'block';
  }else{
    finalDivs.style.display = 'none';
  }
  
}