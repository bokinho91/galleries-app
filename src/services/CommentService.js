import HttpService from "./HttpService";

class CommentService extends HttpService {

getAllGalleryComments = async (id) =>{
        const { data } = await this.client.get(`comments/${id}`);
        return data;
  }

addNewComment= async (body) =>{
  
  const { data } = await this.client.post('comments',body);
  return data;
}

deleteComment = async (comment) => {
  const {data} = await this.client.delete(`comments/${comment.id}`)
  return data
}


}



const commentService = new CommentService();
export default commentService;
