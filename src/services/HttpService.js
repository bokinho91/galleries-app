import axios from "axios";

export default class HttpService {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8000/api",
    });

    this.client.interceptors.request.use(config=>{
      config.headers.authorization= `Bearer ${localStorage.getItem('token')}`
      return config
    },
    error =>{
      return Promise.reject(error)
    })

  }
}
