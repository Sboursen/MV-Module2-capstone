export default class InvolvementApi {
  constructor(
    url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  ) {
    this.projectId = '2C4jJFKraIvaxjrsdqH5';
    this.rootEndpoint = url;
    this.likesEndpoint = `${url}${this.projectId}/likes/`;
    this.likesData = this.#getLikes();
    // this.#getLikes().then((data) => console.log(data));
    // this.#addLike()
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
  }

  getLikesData = () => this.likesData;

  setLikesData = (bodyData) => {
    this.#addLike(this.likesEndpoint, bodyData);
    this.likesData = this.#getLikes();
  };

  #getLikes = async (url = this.likesEndpoint) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  };

  #addLike = async (
    url = this.likesEndpoint,
    bodyData = { item_id: 2 },
  ) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    });

    return response.json();
  };
}
