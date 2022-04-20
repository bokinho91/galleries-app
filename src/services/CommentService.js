import HttpService from "./HttpService";

class CommentService extends HttpService {

getAllGalleryComments = async (id) =>{
        const { data } = await this.client.get(`comment/${id}`);
        return data;
  }

 


}



const commentService = new CommentService();
export default commentService;
