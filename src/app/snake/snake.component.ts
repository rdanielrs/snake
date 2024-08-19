import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snake',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss'
})
export class SnakeComponent {
  /*rightWidth: string = "100px";
  leftWidth: string = "0px";
  topLeftHeight: string = "0px";
  topRightHeight: string = "0px";
  bottomLeftHeight: string = "0px";
  bottomRightHeight: string = "0px";*/
  middleWidth: string = "100px";
  topHeight: string = "0px";
  bottomHeight: string = "0px";
  totalLength: number = 100;
  /*top: string = "50px";
  left: string = "50px";*/
  topY: string = "100px";
  topX: string = "100px";
  middleY: string = "100px;"
  middleX: string = "100px";
  bottomY: string = "100px";
  bottomX: string = "100px";
  prevKey: string = "none";
  currentKey: string = "none";
  direction: string = "right";
  penultimateIndex: number = 0;
  lastIndex: number = 0;
  snakes: Array<any> = [
    {
      id: 0,
      direction: "forward",
      width: "100px",
      height: "15px",
      top: "100px",
      left: "100px",
      textDirection: "rtl"
    }
  ]
  ngOnInit(): void {
    document.addEventListener('keydown', (e) => {
      this.keyHandler(e.key)
    })

    console.log(`Snake: ${this.snakes[0]}`)

    //this.calcStringValues("500px");
    //this.goRight();
    /*setTimeout(() => {
      let newSnake = {
        id: 2,
        direction: "upward",
        height: "100px",
        width: "15px",
        top: "100px",
        left: "200px"
      }
      this.snakes.push(newSnake)
    }, 1000)

    setTimeout(() => {
      let newSnake = {
        id: 2,
        direction: "forward",
        height: "15px",
        width: "100px",
        top: "200px",
        left: "200px"
      }
      this.snakes.push(newSnake);
    }, 2000)*/

    setTimeout(() => {
      this.goDownAnim();
    }, 1000)
  }

  increaseWidth() {
    /*let numericWidth = parseInt(this.width, 10) + 400;
    this.width = numericWidth + "px"*/
    /*this.totalLength = parseInt(this.width, 10) + 20;
    this.width = this.totalLength + "px";*/
    console.log("increaseWidth")
  }

  snakeAnim() {
    
  }

  goLeft() {
    this.direction = "left";
    let leftInterval = setInterval(() => {
      if (this.direction != "left") {
        clearInterval(leftInterval);
      }
      let numericLeft = parseInt(this.middleY, 10) - 10;
      this.middleX = numericLeft + "px";
    }, 1000)
    console.log("Go left");
  }

  goRight() {
    this.direction = "right";
    let rightInterval = setInterval(() => {
      if (this.direction != "right") {
        clearInterval(rightInterval);
      }
      let numericRight = parseInt(this.middleX, 10) + 10;
      this.middleX = numericRight + "px";
    }, 1000)
    console.log("Go right");
  }

  goUp() {
    this.direction = "up";
    let upInterval = setInterval(() => {
      if (this.direction != "up") {
        clearInterval (upInterval);
      }
      let numericTop = parseInt(this.middleY, 10) - 10;
      this.middleX = numericTop + "px";
    }, 1000)
    console.log("Go up");
  }

  goDown() {
    this.direction = "down";
    let downInterval = setInterval(() => {
      if (this.direction != "down") {
        clearInterval(downInterval); 
      }
      let numericTop = parseInt(this.middleY, 10) + 10;
      this.middleY = numericTop + "px";
    }, 1000)
  }

  goDownAnim() {
    let newSnake = {
      id: this.snakes.length,
      direction: "downward",
      width: "15px",
      //height: "100px",
      height: "0px",
      top: this.snakes[this.lastIndex].top,
      left: this.calcStringValues(this.snakes[this.lastIndex].width)
    }
    this.snakes.push(newSnake);
    this.updateLastIndex();

    //this.snakes[this.lastIndex].height = this.increaseHeight()
    this.increaseHeight();

  }


  increaseHeight() {
    let previousSnakeDir = parseInt(this.snakes[this.penultimateIndex].left)
    let previousSnakeWidth = parseInt(this.snakes[this.penultimateIndex].width);
    let currentSnakeHeight = 0;
    //console.log(`Last Index: ${this.lastIndex}`)
    let heightAnim = setInterval(() => {
      if (currentSnakeHeight < this.totalLength) {
        previousSnakeWidth -= 20;
        previousSnakeDir += 20;
        currentSnakeHeight += 20;
        this.snakes[this.penultimateIndex].width = previousSnakeWidth + "px";
        this.snakes[this.penultimateIndex].left = previousSnakeDir + "px";
        this.snakes[this.lastIndex].height = currentSnakeHeight + "px"
        console.log("Testing")
      } else {
        console.log("Cleared")
        clearInterval(heightAnim);
      }
    }, 1000)

  }

  calcStringValues(value: string) {
    let numericValue = parseInt(value, 10) + this.totalLength
    console.log(`Numeric value: ${numericValue + "px"}`)
    return numericValue + "px";
  }

  updateLastIndex() {
    console.log("lastIndex called")
    if (this.snakes.length > 1) {
      this.penultimateIndex = this.snakes.length - 2;
    }
    this.lastIndex = this.snakes.length - 1;
    //console.log(`Last Index: ${this.lastIndex}`)

  }

  showKeys() {
    console.log(`Prev key: ${this.prevKey}`);
    console.log(`Current key: ${this.currentKey}`);
  }

  keyHandler(key: string) {
    switch (key) {
      case 'ArrowUp':
          console.log("Arrow Up");
          if (this.direction != "down" && this.direction != "up") {
            this.goUp();
          }
          break;
      case 'ArrowDown':
          console.log('Arrow Down');
          if (this.direction != "up" && this.direction != "down") {
            this.goDown()
          }
          break;
      case 'ArrowLeft':
          console.log("Arrow Left");
          if (this.direction != "right" && this.direction != "left") {
            this.goLeft();
          }
          break;
      case 'ArrowRight':
          if (this.direction != "left" && this.direction != "right") {
            this.goRight();
          }
          break;
    }
   
    this.prevKey = this.currentKey;
    this.currentKey = key;
    this.showKeys();
  }
}
