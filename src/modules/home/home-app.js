import CarsApi from './cars-api';
import { carRender } from './home-utils';
import InvolvementApi from './involvement-api';

export default class HomeApplication {
  constructor() {
    this.carsApi = new CarsApi();

    // DOM elements
    this.main = document.querySelector('main');

    this.involvementApi = new InvolvementApi();
  }

  initialize = () =>
    this.getAllCars().then(() => this.#updateLikes());

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
    const mainContent = toBeDisplayed.reduce(
      (content, car) => {
        const carElement = this.#createCarElement(car);
        return `${content}\n${carElement}`;
      },
      '',
    );
    this.main.innerHTML = mainContent;
  };

  #updateLikes = () => {
    this.involvementApi.getLikesData().then((data) => {
      console.log(data);
      const likesElements =
        document.querySelectorAll('.likes');

      likesElements.forEach((like) => {
        const id =
          like.parentNode.parentNode.parentNode.parentNode
            .id;
        let numberOfLikes = data.find(
          (e) => Number(e.item_id) === Number(id),
        );
        if (numberOfLikes === undefined) {
          numberOfLikes = 0;
        } else {
          numberOfLikes = numberOfLikes.likes;
        }
        like.textContent = numberOfLikes;
      });
    });
  };
}
