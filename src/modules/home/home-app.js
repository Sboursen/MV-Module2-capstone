import CarsApi from './cars-api';
import { carRender } from './home-utils';
import Car from './car';

export default class HomeApplication {
  constructor() {
    this.carsData = [];
    this.carsApi = new CarsApi();
    // DOM elements
    this.main = document.querySelector('main');
  }

  #clearMain = () => {
    this.main.innerHTML = '';
  };

  #createCarElement = (car) =>
    carRender(car.imgUrl, car.make, car.model);

  #displayCars = (toBeDisplayed) => {
    this.#clearMain();
    const ulContent = toBeDisplayed.reduce(
      (content, userScore) => {
        const score = new Score(
          userScore.user,
          userScore.score,
        );
        const scoreElement = this.#createCarElement(score);
        return `${content}\n${scoreElement}`;
      },
      '',
    );
    this.main.innerHTML = ulContent;
  };
}
