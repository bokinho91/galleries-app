import HttpService from "./HttpService";

class UserService extends HttpService {
registerUser = async (userData) =>{
    
    const { data } = await this.client.post("register", userData);
    return data;
  }


  loginUser = async (userData) =>{
    const { data } = await this.client.post("login", userData);
    return data;
  }
}

const userService = new UserService();
export default userService;
