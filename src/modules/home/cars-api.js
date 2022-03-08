import Car from './car';

export default class CarsApi {
  constructor(
    url = 'https://private-anon-66fbb79774-carsapi1.apiary-mock.com/',
  ) {
    this.rootEndpoint = url;
    this.allCarsEndpoint = `${url}cars`;
  }

  #getCarEndpointFromId = (id) =>
    `${this.allCarsEndpoint}/${id}`;

  getAllCars = async (url = this.allCarsEndpoint) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await response.json();
    data = await this.#formatData(data);
    return data;
  };

  #formatData = (data) => {
    return data.map((obj) => {
      const car = new Car(
        obj['year'],
        obj['id'],
        obj['horsepower'],
        obj['make'],
        obj['model'],
        obj['price'],
        obj['imgUrl'],
      );
    });
  };

  getCarById = async (id) => {
    const url = this.#getCarEndpointFromId(id);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  };
}
