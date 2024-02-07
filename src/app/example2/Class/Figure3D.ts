export abstract class Figure3D {
  naz: string = '';
  h: number = 1;
  pl: number = 0;
  parameter: number = 0;
  constructor() {}
  show() {
    return (
      'Назва=' +
      this.naz +
      ' ' +
      ' Висота=' +
      this.h.toFixed(2) +
      ' Площа=' +
      this.pl.toFixed(2)
    );
  }
  abstract S(): void;
}
