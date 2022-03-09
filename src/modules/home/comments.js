import HomeApplication from './home-app.js';

class Comments extends HomeApplication {
  constructor(comments) {
    this.comments = comments;
    this.allCars = this.getAllCars();
    this.displayCar = this.displayCar.bind(this);
  }

  getSingleCar = (id) => {
    this.allCars.then((data) => {
      const car = data.find((car) => car.id === id);
      this.displayCar(car);
      console.log(car);
      return car;
    });
  };
}

export default Comments;
