import axios from 'axios'

const TOKEN = 'OyRQDo_E24PqjWdA6Ak-irkNBhsUNjrVXTfpiB2uu28';
const baseURI = 'https://api.producthunt.com/v1/posts';

export function fetchProduct() {
  return axios.request({
    url: baseURI,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN,
    },
  });
}
