import axios from "axios";

const CHILD_API_BASE_URL = "http://localhost:8080/api/v1/child";

class ChildService{

    getChild(){
        return axios.get(CHILD_API_BASE_URL);
    }
    getChildByID(ChildId){
        return axios.get(CHILD_API_BASE_URL+'/'+ChildId);
    }
    deleteChildByID(ChildId){
        return axios.delete(CHILD_API_BASE_URL+'/'+ChildId);
    }
    UpdateChild(ChildId, Child){
        return axios.put(CHILD_API_BASE_URL+'/'+ChildId, Child);
    }
}

export default new ChildService();