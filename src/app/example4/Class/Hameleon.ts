import { Pet } from './Pet';
import { IRun } from '../Interface/IRun';
import { ILaz } from '../Interface/ILaz';

export class Hameleon extends Pet implements IRun, ILaz {
  run() {
    console.log('Я хамелеон і вмію швидко бігати');
  }
  laz() {
    console.log('Я хамелеон і вмію лазити по деревах');
  }
}
