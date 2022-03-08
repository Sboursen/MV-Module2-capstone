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

  initialize = () => {
    this.getAllCars();
  };

  getAllCars = () =>
    this.carsApi.getAllCars().then((data) => {
      this.carsData = data;
      const toBeDisplayed = this.carsData.slice(0, 12);
      this.#displayCars(toBeDisplayed);
    });

  #clearMain = () => {
    this.main.innerHTML = '';
  };

  #createCarElement = (car) =>
    carRender(car.imgUrl, car.make, car.model);

  #displayCars = (toBeDisplayed) => {
    this.#clearMain();
    const mainContent = toBeDisplayed.reduce(
      (content, car) => {
        const carElement = this.#createCarElement(car);
        return `${content}\n${carElement}`;
      },
      '',
    );
    this.main.innerHTML = mainContent;
  };
}
