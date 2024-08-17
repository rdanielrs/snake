import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-snake',
  standalone: true,
  imports: [],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss'
})
export class SnakeComponent {
  width: string = "100px";
  top: string = "50px";
  left: string = "50px";
  prevKey: string = "none";
  currentKey: string = "none";
  /*right: boolean = true;
  left: boolean = false;
  down: boolean = false;
  up: boolean = false;*/
  direction: string = "right";
  ngOnInit(): void {
    document.addEventListener('keydown', (e) => {
      this.keyHandler(e.key)
    })
    this.goRight();
  }

  increaseWidth() {
    let numericWidth = parseInt(this.width, 10) + 400;
    this.width = numericWidth + "px"
  }

  goLeft() {
    this.direction = "left";
    let leftInterval = setInterval(() => {
      if (this.direction != "left") {
        clearInterval(leftInterval);
      }
      let numericLeft = parseInt(this.top, 10) - 10;
      this.left = numericLeft + "px";
    }, 1000)
    console.log("Go left");
  }

  goRight() {
    this.direction = "right";
    let rightInterval = setInterval(() => {
      if (this.direction != "right") {
        clearInterval(rightInterval);
      }
      let numericRight = parseInt(this.left, 10) + 10;
      this.left = numericRight + "px";
    }, 1000)
    console.log("Go right");
  }

  goUp() {
    this.direction = "up";
    let upInterval = setInterval(() => {
      if (this.direction != "up") {
        clearInterval (upInterval);
      }
      let numericTop = parseInt(this.top, 10) - 10;
      this.top = numericTop + "px";
    }, 1000)
    console.log("Go up");
  }

  goDown() {
    this.direction = "down";
    let downInterval = setInterval(() => {
      if (this.direction != "down") {
        clearInterval(downInterval); 
      }
      let numericTop = parseInt(this.top, 10) + 10;
      this.top = numericTop + "px";
    }, 1000)
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
