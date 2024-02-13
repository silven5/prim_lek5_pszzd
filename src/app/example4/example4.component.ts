import { Component } from '@angular/core';
import { Fish } from './Class/Fish';
import { Snake } from './Class/Snake';
import { Parrot } from './Class/Parrot';
import { Cat } from './Class/Cat';
import { Dog } from './Class/Dog';
import { Show_alert } from './Class/Show_alert';
import { Show_console } from './Class/Show_console';

@Component({
  selector: 'app-example4',
  standalone: true,
  imports: [],
  templateUrl: './example4.component.html',
  styleUrl: './example4.component.css',
})
export class Example4Component {
  ras_interface() {
    let show = new Show_console();
    let show_alert = new Show_alert();
    let dog = new Dog('Собака', 'Рада', 'Рижа', new Date(2019, 4, 12), show);

    dog.run();
    dog.speak();
    dog.bringToy('Кістка');
    dog.guard();
    let cat = new Cat('Кішка', 'Мурка', 'Рижа', new Date(2017, 2, 2), show);

    cat.run();
    cat.speak();
    cat.bringMouse();
    let parrot = new Parrot(
      'Папуга',
      'Попка',
      'Зелений',
      new Date(1996, 2, 2),
      show
    );

    parrot.fly();
    parrot.speak();
    let fish = new Fish('Рибка', 'Дорі', 'Золота', new Date(2020, 2, 2), show);

    fish.swim();
    // !Додано на лекцыъ
    let snake = new Snake(
      'Змія',
      'Дорі',
      'Золота',
      new Date(2020, 2, 2),
      show_alert
    );
    snake.speak();
    snake.polz();
  }
}
