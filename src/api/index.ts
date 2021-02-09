export default class Api {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  };

  async fetchApi() {
    let api = await fetch(this._url)
      .then(response => response.json())
    return api;
  };
};
