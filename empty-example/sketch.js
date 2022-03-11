let fontsize, dictionary;
let letter;
let score = 0;
const up = [];
const down = [];
const left = [];
const right = [];
const letters = ["A", "A", "A", "A", "A", "A", "A", "A", "A", 
               "B", "B",
              "C", "C",
              "D", "D", "D", "D",
              "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", 
              "F", "F",
              "G", "G",
              "H", "H",
              "I", "I", "I", "I", "I", "I", "I", "I", "I", 
              "J", "K",
              "L", "L", "L", "L",
              "M", "M",
              "N", "N","N","N","N","N",
              "O", "O", "O", "O", "O", "O", "O", "O", 
              "P", "P",
              "Q",
              "R", "R", "R", "R", "R", "R", 
              "S", "S", "S", "S", 
              "T", "T", "T", "T", "T", "T", 
              "U", "U", "U", "U",
              "W", "W",
              "X",
              "Y", "Y",
              "Z"
            ];


function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //font = loadFont('assets/SourceSansPro-Regular.otf');
  dictionary = loadStrings('assets/sorted_words.txt');

}

function setup() {
  createCanvas(800, 800);

  // Set text characteristics
  //textFont(font);
  if (height < width)
  {
    fontsize = height/19;
  }
  else
  {
    fontsize = width/19;
  }

  textSize(fontsize);
  textAlign(CENTER, CENTER);
  letter = random(letters);
}

function draw() {
  background(160);

  // Set the gap between letters and the left and top margin
  let gap = fontsize;
  let margin = fontsize/2;
  translate(margin, margin);

  fill(0);
  textSize(fontsize+10);
  text(letter, fontsize*9, fontsize*9);
  textSize(fontsize);
  fill(255);
  for (let i = 0; i < 8; i++){
    text(up[i], fontsize*9, (8-up.length+i)*fontsize);
    text(left[i], (8-left.length+i)*fontsize, fontsize*9);
    text(down[i], fontsize*9, (11+i)*fontsize);
    text(right[i], (11+i)*fontsize, fontsize*9);
  }

  //textAlign(RIGHT);
  text("score ", fontsize*17, fontsize*16);
  text(score, fontsize*17, fontsize*17);
  //textAlign(CENTER, CENTER);
  //text(key, 10, 10);

  // Set the counter to start at the character you want
  // in this case 35, which is the # symbol
  // let counter = 35;

  // // Loop as long as there is space on the canvas
  // for (let y = 0; y < height - gap; y += gap) {
  //   for (let x = 0; x < width - gap; x += gap) {
  //     // Use the counter to retrieve individual letters by their Unicode number
  //     let letter = char(counter);

  //     // Add different color to the vowels and other characters
  //     if (
  //       letter === 'A' ||
  //       letter === 'E' ||
  //       letter === 'I' ||
  //       letter === 'O' ||
  //       letter === 'U'
  //     ) {
  //       fill('#ed225d');
  //     } else {
  //       fill(255);
  //     }

  //     // Draw the letter to the screen
  //     text(letter, x, y);

  //     // Increment the counter
  //     counter++;
  //   }
  // }
}

function keyPressed() {
  let validKey = false;
  if (key === "ArrowUp"){
    up.push(letter);
    validKey = true;
  }
  else if (key == "ArrowLeft"){
    left.push(letter);
    validKey = true;
  }
  else if (key === "ArrowRight"){
    right.unshift(letter);
    validKey = true;
  }
  else if (key === "ArrowDown"){
    down.unshift(letter);
    validKey = true;
  }
  else if (key === " "){
    checkWords(up);
    checkWords(down);
    checkWords(left);
    checkWords(right);
  }
  if (validKey === true){
   letter = random(letters);
  }
  console.log(key);
}

function checkWords(arr) {
  let s = arr.join("")
  for (let i = 0; i < dictionary.length; i++){
    let w = dictionary[i];
    if (w.length <= s.length){
      let idx = s.indexOf(w);
      if (idx != -1){
        arr.splice(idx, w.length);
        score = score + w.length*w.length;
        return;
      }
    }
  }
}