import CarsApi from './cars-api';
import {
  carRender,
  likeClass,
  unlikeClass,
} from './home-utils';
import InvolvementApi from './involvement-api';

export class HomeApplication {
  constructor() {
    this.carsApi = new CarsApi();

    // DOM elements
    this.main = document.querySelector('main');

    this.involvementApi = new InvolvementApi();
  }

  initialize = () => this.getANumberOfCars(24).then(() => this.#updateLikes());

  getAllCars = () => this.carsApi.getAllCars().then((data) => {
    this.#displayCars(data);
    return data;
  });

  getANumberOfCars = (number) => this.carsApi.getAllCars().then((data) => {
    const toBeDisplayed = data.slice(0, number);

    this.#displayCars(toBeDisplayed);

    return data;
  });

  #clearMain = () => {
    this.main.innerHTML = '';
  };

  #createCarElement = (car) => carRender(car.id, car.imgUrl, car.make, car.model);

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

  toggleHeart = (e) => {
    if (e.currentTarget.classList.contains('heart')) {
      const heartButton = e.currentTarget;
      const heartCount = heartButton.nextSibling.nextSibling.firstChild;
      const { id } = heartButton.parentNode.parentNode.parentNode;
      const data = {};
      data.item_id = Number(id);

      if (heartButton.className === likeClass) {
        heartButton.className = unlikeClass;
        heartCount.textContent = +heartCount.textContent - 1;
      } else {
        heartButton.className = likeClass;
        heartCount.textContent = +heartCount.textContent + 1;
        this.involvementApi.setLikesData(data);
      }
    }
  };

  #updateLikes = () => {
    this.involvementApi.getLikesData().then((data) => {
      const likesElements = document.querySelectorAll('.likes');
      likesElements.forEach((like) => {
        const { id } = like.parentNode.parentNode.parentNode.parentNode;
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

export const getAllCarsCount = () => {
  const main = document.querySelector('main');
  return main.childElementCount;
};
