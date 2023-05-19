import axios from "axios";

const Psychological_API_BASE_URL = "http://localhost:8080/api/v1/psychological";

class PsychologicalService{

    getChildByID(ChildId){
        return axios.get(Psychological_API_BASE_URL+'/'+ChildId);
    }
    deleteChildByID(ChildId){
        return axios.delete(Psychological_API_BASE_URL+'/'+ChildId);
    }
    UpdateChild(ChildId, ChildInfo){
        return axios.put(Psychological_API_BASE_URL+'/'+ChildId, ChildInfo);
    }
}

export default new PsychologicalService();