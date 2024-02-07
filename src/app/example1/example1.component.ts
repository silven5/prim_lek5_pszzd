import { Component } from '@angular/core';
import { Figure2D } from './Class/figure2D';
import { Triangle } from './Class/triangle';
import { Right_Triangle } from './Class/right_triangle';
import { Paralelogram } from './Class/paralelogram';
import { Square } from './Class/square';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.css',
})
export class Example1Component {
  tr: any;
  r_tr: any;
  par: any;
  sq: any;
  visible = false;
  ras(aa: any, hh: any) {
    try {
      let a = parseInt(aa);
      let h = parseInt(hh);
      if (isNaN(a) || isNaN(h)) {
        throw new Error('Parameter is not a number!');
      }
      if (a <= 0 || h <= 0) {
        throw new Error('Parameter less than 0');
      }
      this.tr = new Triangle(a, h);
      this.r_tr = new Right_Triangle(a, h);
      this.par = new Paralelogram(a, h);
      this.sq = new Square(a);
    } catch (e) {
      console.error(e);
    }
    this.visible = true;
  }
}
