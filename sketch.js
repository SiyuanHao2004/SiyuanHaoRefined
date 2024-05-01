var mode = 0;

let audioStarted = false;
let whiteKeyWidth = 60; 
let whiteKeyHeight = 280; 
let whiteKeyDepth = 20; 
let whiteKeyY = -100; 
let initialZ = 40; 
let clickedZ = 20; 
let isClicked1 = false; 
let isClicked2 = false; 
let isClicked3 = false; 
let isClicked4 = false; 
let isClicked5 = false; 
let isClicked6 = false; 
let isClicked7 = false; 
let isClicked8 = false;



let blackKeyWidth = 40; 
let blackKeyHeight = 200; 
let blackKeyDepth = 20; 
let blackKeyY = -100; 
let blackKeyZ = 30; 
let isClickedBlack1 = false; 
let isClickedBlack2 = false; 
let isClickedBlack3 = false; 
let isClickedBlack4 = false; 
let isClickedBlack5 = false;

let oscillators = {}; 

function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
 splash = new Splash();
  

  
 // createCanvas(1000, 400, WEBGL); 
  createOscillators(); 
}

function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  
  if (mode == 1) {
    splash.hide();
    
createCanvas(windowWidth, windowHeight, WEBGL);


 rotateX(PI / 3); 
  rotateZ(-PI / 8); 


  
  

  // 绘制白键
  // 绘制第一个白键
  push(); 
  translate(-270, whiteKeyY, 0); 
  fill(255); 
  if (isClicked1) {
    box(whiteKeyWidth, whiteKeyHeight, clickedZ); 
    playChord('C', 'E', 'G');
  } else {
    box(whiteKeyWidth, whiteKeyHeight, initialZ); 
  }
  pop(); 

  // 绘制第二个白键
  push(); 
  translate(-210, whiteKeyY, 0); 
  fill(255); 
  if (isClicked2) {
    box(whiteKeyWidth, whiteKeyHeight, clickedZ); 
    playChord('D', 'F#', 'A');
  } else {
    box(whiteKeyWidth, whiteKeyHeight, initialZ); 
  }
  pop(); 

  // 绘制第三个白键
  push(); 
  translate(-150, whiteKeyY, 0); 
  fill(255); 
  if (isClicked3) {
    box(whiteKeyWidth, whiteKeyHeight, clickedZ); 
    playChord('E', 'G#', 'B');
  } else {
    box(whiteKeyWidth, whiteKeyHeight, initialZ); 
  }
  pop(); 

  // 绘制第四个白键
  push(); 
  translate(-90, whiteKeyY, 0); 
  fill(255); 
  if (isClicked4) {
    box(whiteKeyWidth, whiteKeyHeight, clickedZ); 
    playChord('F', 'A', 'C2');
  } else {
    box(whiteKeyWidth, whiteKeyHeight, initialZ); 
  }
  pop(); 

  // 绘制第五个白键
  push(); 
  translate(-30, whiteKeyY, 0); 
  fill(255); 
  if (isClicked5) {
    box(whiteKeyWidth, whiteKeyHeight, clickedZ); 
    playChord('G', 'B', 'D#2');
  } else {
    box(whiteKeyWidth, whiteKeyHeight, initialZ); 
  }
  pop(); 

  // 绘制第六个白键
  push(); 
  translate(30, whiteKeyY, 0); 
  fill(255); 
  if (isClicked6) {
    box(whiteKeyWidth, whiteKeyHeight, clickedZ); 
    playChord('A', 'C2', 'E2');
  } else {
    box(whiteKeyWidth, whiteKeyHeight, initialZ); 
  }
  pop(); 

  // 绘制第七个白键
  push(); 
  translate(90, whiteKeyY, 0); 
  fill(255); 
  if (isClicked7) {
    box(whiteKeyWidth, whiteKeyHeight, clickedZ); 
    playChord('B', 'D2', 'F2');
  } else {
    box(whiteKeyWidth, whiteKeyHeight, initialZ); 
  }
  pop(); 

  // 绘制第八个白键
  push(); 
  translate(150, whiteKeyY, 0); 
  fill(255); 
  if (isClicked8) {
    box(whiteKeyWidth, whiteKeyHeight, clickedZ); 
    playChord('C3', 'E2', 'G2');
  } else {
    box(whiteKeyWidth, whiteKeyHeight, initialZ); 
  }
  pop(); 

  // 绘制黑键
  // 绘制第一个黑键
  push(); 
  translate(-225, blackKeyY, blackKeyZ); 
  fill(0); 
  if (isClickedBlack1) {
    box(blackKeyWidth, blackKeyHeight, blackKeyDepth); 
    playChord('C#', 'F', 'G#');
  } else {
    box(blackKeyWidth, blackKeyHeight, blackKeyZ); 
  }
  pop(); 

  // 绘制第二个黑键
  push(); 
  translate(-165, blackKeyY, blackKeyZ); 
  fill(0); 
  if (isClickedBlack2) {
    box(blackKeyWidth, blackKeyHeight, blackKeyDepth); 
    playChord('D#', 'F#', 'A#');
  } else {
    box(blackKeyWidth, blackKeyHeight, blackKeyZ); 
  }
  pop(); 

  // 绘制第三个黑键
  push(); 
  translate(-75, blackKeyY, blackKeyZ); 
  fill(0); 
  if (isClickedBlack3) {
    box(blackKeyWidth, blackKeyHeight, blackKeyDepth); 
    playChord('F#', 'A#', 'C3');
  } else {
    box(blackKeyWidth, blackKeyHeight, blackKeyZ); 
  }
  pop(); 

  // 绘制第四个黑键
  push(); 
  translate(-15, blackKeyY, blackKeyZ); 
  fill(0); 
  if (isClickedBlack4) {
    box(blackKeyWidth, blackKeyHeight, blackKeyDepth); 
    playChord('G#', 'C2', 'D#2');
  } else {
    box(blackKeyWidth, blackKeyHeight, blackKeyZ); 
  }
  pop(); 

  // 绘制第五个黑键
  push(); 
  translate(45, blackKeyY, blackKeyZ); 
  fill(0); 
  if (isClickedBlack5) {
    box(blackKeyWidth, blackKeyHeight, blackKeyDepth); 
    playChord('A#', 'D2', 'F2');
  } else {
    box(blackKeyWidth, blackKeyHeight, blackKeyZ); 
  }
  pop(); 
}


}

function mousePressed() {
  checkWhiteKeys();
  checkBlackKeys();
}

function checkWhiteKeys() {
  let mouseXAdjusted = mouseX - width / 2;
  let mouseYAdjusted = mouseY - height / 2 - whiteKeyY;

  if (abs(mouseYAdjusted) < whiteKeyHeight / 2) {
    if (abs(mouseXAdjusted + 270) < whiteKeyWidth / 2) {
      isClicked1 = !isClicked1;
      resetWhiteKeys(1);
    } else if (abs(mouseXAdjusted + 210) < whiteKeyWidth / 2) {
      isClicked2 = !isClicked2;
      resetWhiteKeys(2);
    } else if (abs(mouseXAdjusted + 150) < whiteKeyWidth / 2) {
      isClicked3 = !isClicked3;
      resetWhiteKeys(3);
    } else if (abs(mouseXAdjusted + 90) < whiteKeyWidth / 2) {
      isClicked4 = !isClicked4;
      resetWhiteKeys(4);
    } else if (abs(mouseXAdjusted + 30) < whiteKeyWidth / 2) {
      isClicked5 = !isClicked5;
      resetWhiteKeys(5);
    } else if (abs(mouseXAdjusted - 30) < whiteKeyWidth / 2) {
      isClicked6 = !isClicked6;
      resetWhiteKeys(6);
    } else if (abs(mouseXAdjusted - 90) < whiteKeyWidth / 2) {
      isClicked7 = !isClicked7;
      resetWhiteKeys(7);
    } else if (abs(mouseXAdjusted - 150) < whiteKeyWidth / 2) {
      isClicked8 = !isClicked8;
      resetWhiteKeys(8);
    }
  }
}

function checkBlackKeys() {
  let mouseXAdjusted = mouseX - width / 2;
  let mouseYAdjusted = mouseY - height / 2;

  if (mouseYAdjusted > blackKeyY - blackKeyHeight / 2 && mouseYAdjusted < blackKeyY + blackKeyHeight / 2) {
    if (mouseXAdjusted > -295 && mouseXAdjusted < -185) {
      isClickedBlack1 = !isClickedBlack1;
      resetWhiteKeys();
    } else if (mouseXAdjusted > -235 && mouseXAdjusted < -125) {
      isClickedBlack2 = !isClickedBlack2;
      resetWhiteKeys();
    } else if (mouseXAdjusted > -145 && mouseXAdjusted < -65) {
      isClickedBlack3 = !isClickedBlack3;
      resetWhiteKeys();
    } else if (mouseXAdjusted > -85 && mouseXAdjusted < 5) {
      isClickedBlack4 = !isClickedBlack4;
      resetWhiteKeys();
    } else if (mouseXAdjusted > 5 && mouseXAdjusted < 95) {
      isClickedBlack5 = !isClickedBlack5;
      resetWhiteKeys();
    }
  }
}

function resetWhiteKeys(clickedKey) {
  if (clickedKey !== 1) isClicked1 = false;
  if (clickedKey !== 2) isClicked2 = false;
  if (clickedKey !== 3) isClicked3 = false;
  if (clickedKey !== 4) isClicked4 = false;
  if (clickedKey !== 5) isClicked5 = false;
  if (clickedKey !== 6) isClicked6 = false;
  if (clickedKey !== 7) isClicked7 = false;
  if (clickedKey !== 8) isClicked8 = false;
}

function createOscillators() {
  oscillators['C'] = new p5.Oscillator();
  oscillators['C'].setType('sine');
  oscillators['C'].freq(261.63); // C

  oscillators['C#'] = new p5.Oscillator();
  oscillators['C#'].setType('sine');
  oscillators['C#'].freq(277.18); // C#

  oscillators['D'] = new p5.Oscillator();
  oscillators['D'].setType('sine');
  oscillators['D'].freq(293.66); // D

  oscillators['D#'] = new p5.Oscillator();
  oscillators['D#'].setType('sine');
  oscillators['D#'].freq(311.13); // D#

  oscillators['E'] = new p5.Oscillator();
  oscillators['E'].setType('sine');
  oscillators['E'].freq(329.63); // E

  oscillators['F'] = new p5.Oscillator();
  oscillators['F'].setType('sine');
  oscillators['F'].freq(349.23); // F

  oscillators['F#'] = new p5.Oscillator();
  oscillators['F#'].setType('sine');
  oscillators['F#'].freq(369.99); // F#

  oscillators['G'] = new p5.Oscillator();
  oscillators['G'].setType('sine');
  oscillators['G'].freq(392); // G

  oscillators['G#'] = new p5.Oscillator();
  oscillators['G#'].setType('sine');
  oscillators['G#'].freq(415.3); // G#

  oscillators['A'] = new p5.Oscillator();
  oscillators['A'].setType('sine');
  oscillators['A'].freq(440); // A

  oscillators['A#'] = new p5.Oscillator();
  oscillators['A#'].setType('sine');
  oscillators['A#'].freq(466.16); // A#

  oscillators['B'] = new p5.Oscillator();
  oscillators['B'].setType('sine');
  oscillators['B'].freq(493.88); // B

  oscillators['C2'] = new p5.Oscillator();
  oscillators['C2'].setType('sine');
  oscillators['C2'].freq(523.25); // C2

  oscillators['C3'] = new p5.Oscillator();
  oscillators['C3'].setType('sine');
  oscillators['C3'].freq(554.37); // C3
  
  oscillators['C#2'] = new p5.Oscillator();
oscillators['C#2'].setType('sine');
oscillators['C#2'].freq(554.37); // C#2

oscillators['D2'] = new p5.Oscillator();
oscillators['D2'].setType('sine');
oscillators['D2'].freq(587.33); // D2

oscillators['D#2'] = new p5.Oscillator();
oscillators['D#2'].setType('sine');
oscillators['D#2'].freq(622.25); // D#2

oscillators['E2'] = new p5.Oscillator();
oscillators['E2'].setType('sine');
oscillators['E2'].freq(659.26); // E2

oscillators['F2'] = new p5.Oscillator();
oscillators['F2'].setType('sine');
oscillators['F2'].freq(698.46); // F2

oscillators['F#2'] = new p5.Oscillator();
oscillators['F#2'].setType('sine');
oscillators['F#2'].freq(739.99); // F#2

oscillators['G2'] = new p5.Oscillator();
oscillators['G2'].setType('sine');
oscillators['G2'].freq(783.99); // G2

oscillators['G#2'] = new p5.Oscillator();
oscillators['G#2'].setType('sine');
oscillators['G#2'].freq(830.61); // G#2

oscillators['A2'] = new p5.Oscillator();
oscillators['A2'].setType('sine');
oscillators['A2'].freq(880); // A2

oscillators['A#2'] = new p5.Oscillator();
oscillators['A#2'].setType('sine');
oscillators['A#2'].freq(932.33); // A#2

oscillators['B2'] = new p5.Oscillator();
oscillators['B2'].setType('sine');
oscillators['B2'].freq(987.77); // B2

  // 启动所有振荡器
  for (let oscillator in oscillators) {
    oscillators[oscillator].start();
    oscillators[oscillator].amp(0);
  }
}

function playChord(note1, note2, note3) {
  oscillators[note1].amp(0.5, 0.05);
  oscillators[note2].amp(0.5, 0.05);
  oscillators[note3].amp(0.5, 0.05);

  setTimeout(() => {
    oscillators[note1].amp(0, 0.5);
    oscillators[note2].amp(0, 0.5);
    oscillators[note3].amp(0, 0.5);
  }, 500);
}


  

