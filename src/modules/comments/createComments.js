export default class Api {
  constructor(
    url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'
  ) {
    this.projectId = '0fIC503i0qOW3Z58w8Vo';
    this.rootEndpoint = url;
    this.commentsEndpoint = `${url}${this.projectId}/comments/`;
  }

  addComment = async (url = this.commentsEndpoint, bodyData) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(bodyData),
    });

    return response.json();
  };
}
