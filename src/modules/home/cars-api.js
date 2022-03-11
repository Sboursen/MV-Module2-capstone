import Car from './car';
import { goodCarsId } from './home-utils';

export default class CarsApi {
  constructor(
    url = 'https://private-anon-66fbb79774-carsapi1.apiary-mock.com/',
  ) {
    this.rootEndpoint = url;
    this.allCarsEndpoint = `${url}cars`;
    this.goodCarsId = goodCarsId;
    this.dataPromise = this.getAllCars().then((data) => this.#formatCars(data));
  }

  getDataPromise = () => this.dataPromise;

  #formatCars = (data) => {
    const dataObj = {};
    data.forEach((car) => {
      const id = `${car.id}`;
      dataObj[id] = car;
    });

    return dataObj;
  };

  getCarEndpointFromId = (id) => `${this.allCarsEndpoint}/${id}`;

  #formatData = (data) => data.map((obj) => {
    const car = new Car();
    car.year = obj.year;
    car.id = obj.id;
    car.horsepower = obj.horsepower;
    car.make = obj.make;
    car.model = obj.model;
    car.price = obj.price;
    car.imgUrl = obj.img_url;
    return car;
  });

  getAllCars = async (url = this.allCarsEndpoint) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let data = await response.json();

    data = data.filter((obj) => this.goodCarsId.includes(obj.id));

    data = await this.#formatData(data);

    return data;
  };
}
