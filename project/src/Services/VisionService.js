import axios from "axios";

const Vision_API_BASE_URL = "http://localhost:8080/api/v1/vision";

class VisionService{

    getChildByID(ChildId){
        return axios.get(Vision_API_BASE_URL+'/'+ChildId);
    }
    deleteChildByID(ChildId){
        return axios.delete(Vision_API_BASE_URL+'/'+ChildId);
    }
    UpdateChild(ChildId, ChildInfo){
        return axios.put(Vision_API_BASE_URL+'/'+ChildId, ChildInfo);
    }
}

export default new VisionService();