import HttpService from "./HttpService";

class UserService extends HttpService {
getAll = async () =>{
    const { data } = await this.client.get("register");
    return data;
  }

}

const userService = new UserService();
export default userService;
