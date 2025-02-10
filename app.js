import { User } from './user.js';
import { HttpClient } from './helpers/httpClient.js';

const form = document.querySelector('form');

const issues = [];

const initApp = () => {};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Send');

  const data = new FormData(form); //creating a form
  const email = data.get('email');
  const caption = data.get('caption');
  const description = data.get('description');

  const user = new User(email, caption, description); //creating a new user instance
  const httpClient = new HttpClient();
  const result = httpClient.post('issues', user);

  console.log(email, caption, description);
  console.log(result);
};

console.log(issues);

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
