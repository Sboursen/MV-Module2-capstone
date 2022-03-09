import CarsApi from './cars-api';
import { carRender, fileExists } from './home-utils';

export default class HomeApplication {
  constructor() {
    this.carsData = [];
    this.carsApi = new CarsApi();
    // DOM elements
    this.main = document.querySelector('main');
  }

  initialize = () => this.getANumberOfCars(12);

  getAllCars = () =>
    this.carsApi.getAllCars().then((data) => {
      this.carsData = data.filter((car) =>
        fileExists(car.imgUrl),
      );
      this.#displayCars(this.carsData);
    });

  getANumberOfCars = (number) =>
    this.carsApi.getAllCars().then((data) => {
      const toBeDisplayed = [];

      for (let i = 0; i < data.length; i += 1) {
        const car = data[i];
        if (fileExists(car.imgUrl)) {
          toBeDisplayed.push(car);
        }

        if (toBeDisplayed.length === number) {
          this.#displayCars(toBeDisplayed);
          break;
        }
      }

      return data;
    });

  #clearMain = () => {
    this.main.innerHTML = '';
  };

  #createCarElement = (car) =>
    carRender(car.id, car.imgUrl, car.make, car.model);

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
