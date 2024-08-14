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

  ngOnInit(): void {
   
    document.addEventListener('keydown', (e) => {
      //console.log("Apertou essa porra")
      this.keyHandler(e.key)
    })
  }

  increaseWidth() {
    let numericWidth = parseInt(this.width, 10) + 400;
    this.width = numericWidth + "px"
  }

  keyHandler(key: string) {
    console.log(key)
    switch (key) {
      case 'ArrowUp':
          console.log("Arrow Up");
          break;
      case 'ArrowDown':
          console.log('Arrow Down');
          break;
      case 'ArrowLeft':
          console.log("Arrow Left");
          break;
      case 'ArrowRight':
          console.log("Arrow Right");
          break;
    }
  }
}
