import HttpService from "./HttpService";

class GalleryService extends HttpService {

getAll = async (pageNum) =>{
        const { data } = await this.client.get(`galleries?page_number=${pageNum}`);
        return data;
    
  }

  getTenMore = async (pageNumber) =>{
    const { data } = await this.client.get(`load_more/${pageNumber}`);
    return data;

}


  createGallery = async (newGallery) => {
    console.log(newGallery);
      const {data} = await this.client.post("galleries", newGallery)
      return data;
  }

  getOneGallery = async (id) => {
    const {data }= await this.client.get(`galleries/${id}`)
    return data
  }

  getMyGalleries= async (pageNum) =>{
    const { data } = await this.client.get(`my_galleries?page_number=${pageNum}`);
    return data
}


getAuthorsGalleries= async (req) =>{ 
  const { data } = await this.client.get(`authors?page_number=${req.pageNumber}&author_id=${req.id}`);
  return data
}



}



const galleryService = new GalleryService();
export default galleryService;
