export class HttpClient {
  constructor() {
    this._url = 'https://www-issuesdb-8d11.restdb.io/rest/';
  }
}

async function get(endpoint) {
  try {
    const response = await fetch(endpoint + endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '67a9f03e020c06ab02e653bf',
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `HTTP error! status: ${response.status}, ${response.statusText}`
      );
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function post(endpoint, data) {
  try {
    const response = await fetch(this._url + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '67a9f03e020c06ab02e653bf',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `HTTP error! status: ${response.status}, ${response.statusText}`
      );
    }
  } catch (error) {
    throw new Error(error);
  }
}
