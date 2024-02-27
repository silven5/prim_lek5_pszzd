import { Conus } from './Conus';
//обгортка

describe('Тести для класу Conus', () => {
  let conus: Conus;

  //Перед виконанням усіх тестів створимо екземляр класу конус
  beforeEach(() => {
    conus = new Conus('Conus', 5, 10);
  });
  //тестуємо чи створили екземпляр класу
  it('Створення екземляру класу', () => {
    expect(conus).toBeTruthy();
  });
  //тестуємо метод обрахунку площини
  it('Розрахунок площини конуса з радіусом 10 та висотою 5', () => {
    conus.S();
    let s = conus.pl;
    let p = Math.PI * Math.sqrt(5 * 5 + 10 * 10) * 10;
    expect(s.toFixed(2)).toBe(p.toFixed(2));
  });
  it('Розрахунок площини конуса з радіусом 0 та висотою 0 результат 0', () => {
    let c1 = new Conus('Conus', 0, 0);
    c1.S();
    let s = c1.pl;
    let p = 0;
    expect(s.toFixed(2)).toBe(p.toFixed(2));
  });
});
