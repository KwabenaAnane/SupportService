import { User } from './user.js'

const form = document.querySelector('form')

const initApp = () => {}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('Send')

  const data = new FormData(form) //creating a form
  const email = data.get('email')
  const caption = data.get('caption')
  const description = data.get('description')

  const user = new User(email, caption, description) //creating a new user instance

  console.log(email, caption, description)
}

document.addEventListener('DOMContentLoaded', initApp)
form.addEventListener('submit', handleSubmit)
