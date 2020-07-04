const url = 'https://annuum-api-homolog.herokuapp.com/annuum-api'
const uploadUrl = 'https://annuum-image-api-homolog.herokuapp.com/'
const uploadToken =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYXBzaWN1dW0tYW5udXVtIiwiaWF0IjoxNTkzMzcwNTkwLCJleHAiOjQwODYzNTYxOTAsImF1ZCI6IiIsInN1YiI6ImNhcHNpY3V1bS1hbm51dW0tYXBwLWhvbW9sb2cifQ.Z9tU8jf4sgnxTB4cedYwblfcNwzIHVQhR7hE3TLHypg'

const HML = {
  NAME: 'HML',
  API_URL: url,
  API_UPLOAD_URL: uploadUrl,
  API_UPLOAD_TOKEN: uploadToken,
}

export default HML
