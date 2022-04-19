import HttpService from "./HttpService";

class GalleryService extends HttpService {

getAll = async () =>{
    const { data } = await this.client.get("gallery");
    return data;
  }
  createGallery = async (newGallery) => {
      const {data} = await this.client.post("gallery", newGallery)
      return data;
  }



}



const galleryService = new GalleryService();
export default galleryService;
