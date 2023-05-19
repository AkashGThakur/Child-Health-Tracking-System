import axios from "axios";

const BasicScreening_API_BASE_URL = "http://localhost:8080/api/v1/BasicScreening";

class BasicScreeningService{

    getChildByID(ChildId){
        return axios.get(BasicScreening_API_BASE_URL+'/'+ChildId);
    }
    deleteChildByID(ChildId){
        return axios.delete(BasicScreening_API_BASE_URL+'/'+ChildId);
    }
    UpdateChild(ChildId, ChildInfo){
        return axios.put(BasicScreening_API_BASE_URL+'/'+ChildId, ChildInfo);
    }
}

export default new BasicScreeningService();