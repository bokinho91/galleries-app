import HttpService from "./HttpService";

class GalleryService extends HttpService {

getAll = async (id) =>{
    if(id){
        const { data } = await this.client.get("mygallery");
        console.log(data);
        return data;
    }else{
        const { data } = await this.client.get("gallery");
        return data;
    }
  }

  createGallery = async (newGallery) => {
      const {data} = await this.client.post("gallery", newGallery)
      return data;
  }

  getOneGallery = async (id) => {
    
    const {data }= await this.client.get(`gallery/${id}`)
    console.log(data);
    return data
  }



}



const galleryService = new GalleryService();
export default galleryService;
