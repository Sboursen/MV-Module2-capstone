import CarsApi from '../home/cars-api';
const carApi = new CarsApi();

export default function showCommentModal(e) {
  const id = Number(e.target.parentNode.parentNode.id);
  console.log(id);
  carApi.getDataPromise().then((data) => {
    console.log(data[id].model);

    // div.textContent = data[id].modal;
  });
}
