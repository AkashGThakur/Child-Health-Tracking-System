import axios from "axios";

const bmiScreening_API_BASE_URL = "http://localhost:8080/api/v1/bmiScreening";

class BMISService{

    getChildByID(ChildId){
        return axios.get(bmiScreening_API_BASE_URL+'/'+ChildId);
    }
    deleteChildByID(ChildId){
        return axios.delete(bmiScreening_API_BASE_URL+'/'+ChildId);
    }
    UpdateChild(ChildId, ChildInfo){
        return axios.put(bmiScreening_API_BASE_URL+'/'+ChildId, ChildInfo);
    }
}

export default new BMISService();