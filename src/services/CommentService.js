import HttpService from "./HttpService";

class CommentService extends HttpService {

getAllGalleryComments = async (id) =>{
        const { data } = await this.client.get(`comment/${id}`);
        return data;
  }

addNewComment= async (body) =>{
  
  const { data } = await this.client.post('comment',body);
  return data;
}


}



const commentService = new CommentService();
export default commentService;
