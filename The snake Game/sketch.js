var snake = new Snake();
var food = new Food();


function setup() {
    createCanvas(500, 500);
    frameRate(10);
}

function draw() {
    background(175);
    snake.update();
    food.show();
    snake.display();
}

function Food() {
    this.x = 0;
    this.y = 0;
    this.show = function() {
        // noStroke();
        fill(255,0,0);
        rect(this.x, this.y, 10, 10);
    };
    this.changePosition = function() {
        this.x = Math.floor(random(0, 500/10)) * 10;
        this.y = Math.floor(random(0, 500/10)) * 10;
    };
}
// making a constructor Snake() & food()

function Snake() {
    this.tail = [];
    this.x = 0;
    this.y = 0;
    this.dir = "RIGHT";
    this.update = function() {
        if(this.dir === "RIGHT") {
            this.x = this.x + 10;
        } else if(this.dir === "LEFT") {
            this.x = this.x - 10;
        } else if(this.dir=== "UP") {
            this.y = this.y - 10;
        } else {
            this.y = this.y + 10;
        }
//  Compairing wit the frame boundary
        if(this.x >= 500) {
            this.x = 0;
        }
        if(this.x < 0) {
            this.x = 500;
        }
        if(this.y >= 500) {
            this.y = 0;
        }
        if(this.y < 0) {
            this.y = 500;
        }

        // if food is present in the location then the food is eaten
        if(this.x === food.x && this.y === food.y) {
            this.eat();
        }
        // combining of blocks with array
        for(var i=this.tail.length-1; i>=1; i--) {
            this.tail[i] = this.tail[i-1];
        }

        this.tail[0] = [this.x, this.y];

    };
 
    this.eat = function() {
        food.changePosition();
        this.tail.push([this.x, this.y]);
    };

    this.display = function() {
        fill(255, 255, 255);
        // rect(this.x, this.y, 10, 10);
        for(var i=0; i<this.tail.length; i++) {
            rect(this.tail[i][0],this.tail[i][1], 10, 10);
        }
    };
}

// for pressing the key towards different direction

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir = "UP";
  } else if (keyCode === DOWN_ARROW) {
    snake.dir = "DOWN";
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir = "RIGHT";
  } else if (keyCode === LEFT_ARROW) {
    snake.dir = "LEFT";
  }
}
