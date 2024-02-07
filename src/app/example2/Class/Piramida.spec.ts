import { Piramid } from './Piramid';
//обгортка

describe('Тестування класу Piramid', () => {
  let piramid: Piramid;
  //Перед виконанням усіх тестів створимо екземляр класу конус
  beforeEach(() => {
    piramid = new Piramid('Piramid', 2, 3);
  });
  //тестуємо чи створили екземпляр класу
  it('Створення екземляру класу', () => {
    expect(piramid).toBeTruthy();
  });
  //тестуємо метод обрахунку площини
  it('Розрахунок площини піраміди з параметрами 2 та 3 очікуваний результат 21', () => {
    piramid.S();
    let s = piramid.pl;
    let s4, s0;
    s4 = 0.5 * 3 * 2;
    s0 = 3 * 3;
    let p = 4 * s4 + s0;
    expect(s.toFixed(2)).toBe(p.toFixed(2));
  });
});
