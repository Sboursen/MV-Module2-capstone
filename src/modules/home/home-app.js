import CarsApi from './cars-api';
import { carRender } from './home-utils';

export default class HomeApplication {
  constructor() {
    this.carsApi = new CarsApi();

    // DOM elements
    this.main = document.querySelector('main');
  }

  initialize = () => this.getAllCars();

  getAllCars = () =>
    this.carsApi.getAllCars().then((data) => {
      this.#displayCars(data);
      return data;
    });

  getANumberOfCars = (number) =>
    this.carsApi.getAllCars().then((data) => {
      const toBeDisplayed = data.slice(number);

      this.#displayCars(toBeDisplayed);

      return data;
    });

  #clearMain = () => {
    this.main.innerHTML = '';
  };

  #createCarElement = (car) =>
    carRender(car.id, car.imgUrl, car.make, car.model);

  #displayCars = (toBeDisplayed) => {
    this.#clearMain();
    console.log('to be disp', toBeDisplayed);
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
