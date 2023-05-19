import axios from "axios";

const Vital_API_BASE_URL = "http://localhost:8080/api/v1/VitalScreening";

class VitalService{

    getChildByID(ChildId){
        return axios.get(Vital_API_BASE_URL+'/'+ChildId);
    }
    deleteChildByID(ChildId){
        return axios.delete(Vital_API_BASE_URL+'/'+ChildId);
    }
    UpdateChild(ChildId, ChildInfo){
        return axios.put(Vital_API_BASE_URL+'/'+ChildId, ChildInfo);
    }
}

export default new VitalService();