import axios from "axios";

const Family_API_BASE_URL = "http://localhost:8080/api/v1/family";

class FamilyService{

    getFamilyByID(ChildId){
        return axios.get(Family_API_BASE_URL+'/'+ChildId);
    }
    deleteFamilyByID(ChildId){
        return axios.delete(Family_API_BASE_URL+'/'+ChildId);
    }
    UpdateFamily(ChildId, Family){
        return axios.put(Family_API_BASE_URL+'/'+ChildId, Family);
    }
}

export default new FamilyService();