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
    const data = await response.json();
    return data;
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
