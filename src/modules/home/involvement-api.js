export default class InvolvementApi {
  constructor(
    url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  ) {
    this.projectId = 'K2k68wPBsTKAT68ziNEu';
    this.rootEndpoint = url;
    this.likesEndpoint = `${url}${this.projectId}/likes`;
    this.likesData = this.#getLikes();
  }

  getLikesData = () => this.likesData;

  setLikesData = async (bodyData) => {
    await this.#addLike(this.likesEndpoint, bodyData);
    this.likesData = await this.#getLikes();
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
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    });
  };
}
