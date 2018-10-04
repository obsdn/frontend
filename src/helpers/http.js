import axios from 'axios'

let http = axios.create({
  baseURL: "http://ec2-35-180-87-233.eu-west-3.compute.amazonaws.com:8080/"
});

//request interceptors
http.interceptors.request.use(config => {
  console.log('request :', config)
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, (error) => {
  alert('ha ha failed')
  console.log(error)

  return Promise.reject(error)
});

//response interceptors
http.interceptors.response.use(response => {
  console.log(response)
  return response
}, (error) => {
  // alert('ha ha ha failed')
  router.push({ name: 'Login' })
  console.log(error)

  return Promise.reject(error)
})

export default http
