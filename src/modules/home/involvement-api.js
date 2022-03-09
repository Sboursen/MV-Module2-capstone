export default class InvolvementApi {
  constructor(
    url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  ) {
    this.projectId = '2C4jJFKraIvaxjrsdqH5';
    this.rootEndpoint = url;
    this.likesEndpoint = `${url}${this.projectId}/likes/`;
    this.likesData = this.#getLikes();
  }

  getLikesData = () => this.likesData;

  setLikesData = (bodyData) => {
    this.#addLike(this.likesEndpoint, bodyData);
    this.likesData = this.#getLikes();
    return this.likesData;
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

  #addLike = async (url = this.likesEndpoint, bodyData) => {
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
