import axios from "axios";

const Dental_API_BASE_URL = "http://localhost:8080/api/v1/dentalCheckUp";

class DentalService{

    getChildByID(ChildId){
        return axios.get(Dental_API_BASE_URL+'/'+ChildId);
    }
    deleteChildByID(ChildId){
        return axios.delete(Dental_API_BASE_URL+'/'+ChildId);
    }
    UpdateChild(ChildId, ChildInfo){
        return axios.put(Dental_API_BASE_URL+'/'+ChildId, ChildInfo);
    }
}

export default new DentalService();