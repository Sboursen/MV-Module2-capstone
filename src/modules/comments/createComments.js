export default class Api {
  constructor(
    url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  ) {
    this.projectId = 'K2k68wPBsTKAT68ziNEu';
    this.rootEndpoint = url;
    this.commentsEndpoint = `${url}${this.projectId}/comments`;
  }

  #getComment = async (
    rootUrl = this.commentsEndpoint,
    id,
  ) => {
    try {
      const url = `${rootUrl}?item_id=${id}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.json();
    } catch (error) {
      return [];
    }
  };

  #addComment = async (
    url = this.commentsEndpoint,
    bodyData,
  ) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    });
  };

  addComment = (bodyData) => this.#addComment(this.commentsEndpoint, bodyData);

  getComment = (id) => this.#getComment(this.commentsEndpoint, id);
}
