import axios from "axios";

const Auditory_API_BASE_URL = "http://localhost:8080/api/v1/auditoryScreening";

class AuditoryService{

    getChildByID(ChildId){
        return axios.get(Auditory_API_BASE_URL+'/'+ChildId);
    }
    deleteChildByID(ChildId){
        return axios.delete(Auditory_API_BASE_URL+'/'+ChildId);
    }
    UpdateChild(ChildId, ChildInfo){
        return axios.put(Auditory_API_BASE_URL+'/'+ChildId, ChildInfo);
    }
}

export default new AuditoryService();