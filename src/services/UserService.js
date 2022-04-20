import HttpService from "./HttpService";

class UserService extends HttpService {
getActiveUser = async ()=>{
  const {data} = await this.client.get('myprofile')
  console.log(data);
  return data;
}

registerUser = async (userData) =>{
    const { data } = await this.client.post("register", userData);
    localStorage.setItem('token', data.token);
    return data;
  }


  loginUser = async (userData) =>{
    const { data } = await this.client.post("login", userData);
    localStorage.setItem('token', data.token);
    return data;
  }

  logoutUser = () => {
    localStorage.removeItem('token');
  }
}

const userService = new UserService();
export default userService;
