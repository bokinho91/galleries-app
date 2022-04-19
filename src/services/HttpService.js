import axios from "axios";

export default class HttpService {
  constructor() {
    this.client = axios.create({
      headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`
      },
      baseURL: "http://localhost:8000/api",
    });


  }
}
