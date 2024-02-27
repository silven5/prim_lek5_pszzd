import { Component } from '@angular/core';
import { Parrot } from './Class/Parrot';
import { Sparrow } from './Class/Sparrow';
import { Duck } from './Class/Duck';
import { ISeries } from './Interface/ISeries';
import { Dog } from './Class/Dog';
import { Cat } from './Class/Cat';
import { DogShelter } from './Class/DogShelter';
import { IPersonInfo } from './Interface/IPersonInfo';

@Component({
  selector: 'app-example3',
  standalone: true,
  imports: [],
  templateUrl: './example3.component.html',
  styleUrl: './example3.component.css',
})
export class Example3Component {
  //приклад1
  ras_type() {
    let parrot: Parrot = new Sparrow(); // Працює
    let sparrow: Sparrow = new Parrot(); // Працює
    let parrotTwo: Parrot = new Duck(); // Працює
    // var duck1: Duck = new Parrot(); // Помилка
    let duck: Duck = new Duck();
    console.log(
      'Папуга говорить ' +
        parrot.sound +
        ' горобець говорить ' +
        sparrow.sound +
        ' друга попуга говорить ' +
        parrotTwo.sound
    );
    alert('A duck says ' + parrotTwo.sound);
    duck.swim();
    parrot.fly();
    sparrow.fly();
    parrotTwo.fly();
    duck.fly();
  }
  // приклад2
  ras_function(a0: any, h: any, n: any) {
    console.log(
      'Арфіметична прогресія =' +
        arif(a0, h, n) +
        ' Геометрична прогресія' +
        geom(a0, h, n) +
        ' Add = ' +
        add(a0, h, n) +
        ' Mul = ' +
        mult(a0, h, n) +
        ' SrArif = ' +
        srAr(a0, h, n)
    );
  }
  //приклад3
  ras() {
    let dog = new Dog('Рада', 'Рижа', new Date(2019, 4, 12));
    dog.show();
    dog.run();
    dog.speak();
    dog.bringToy('Кістка');
    dog.guard();
    let cat = new Cat('Мурка', 'Рижа', new Date(2017, 2, 2));
    cat.show();
    cat.run();
    cat.speak();
    cat.bringMouse();
  }
  //Приклад4
  ras_array() {
    let taxa = new Dog('Рада', 'Рижа', new Date(2019, 4, 12));
    let mops = new Dog('Семік', 'Бежевий', new Date(2017, 5, 12));
    //let cat = new Cat('Мурка', 'Рижа', new Date(2017, 2, 2));
    const shetler = new DogShelter(taxa, mops);
    shetler.forEach((dog) => {
      dog.show();
    });
  }
  //приклад5
  ras_gibrid() {
    let tom = personBuilder();
    tom('Tom', 'Simpson');
    tom.password = 'qwerty';
    tom.authenticate();
  }
}
//Арифметична прогресія
let arif: ISeries = (a0: number, h: number, n: number): number => {
  let ai = a0;
  for (let i = 0; i < n; i++) {
    ai = ai + h;
  }
  return ai;
};
//Геометрична прогресія
let geom: ISeries = (a0: number, h: number, n: number): number => {
  return a0 * Math.pow(h, n - 1);
};
// А це приклад зроьлений на лекції для того шоб показати що функція може робити будь що
// головне щоб мала вірну сигнатуру
let add: ISeries = (a0: number, h: number, n: number): number => {
  return Number(a0) + Number(h) + Number(n);
};
let mult: ISeries = (a1: number, a2: number, a3: number): number => {
  return Number(a1) * Number(a2) * Number(a3);
};
let srAr: ISeries = (a1: number, a2: number, a3: number): number => {
  return (Number(a1) + Number(a2) + Number(a3)) / 3;
};
//Приклда5
function personBuilder(): IPersonInfo {
  let person = <IPersonInfo>function (name: string, surname: string): void {
    person.fullName = name + ' ' + surname;
  };
  person.authenticate = function () {
    console.log(person.fullName + ' пароль ' + person.password);
  };
  return person;
}
