import axios from "axios";

const ADDCHILD_API_BASE_URL = "http://localhost:8080/api/v1/add";

class SchoolService{

    getSchool(){
        return axios.get(ADDCHILD_API_BASE_URL);
    }

    postChild(AddChild){
        return axios.post(ADDCHILD_API_BASE_URL, AddChild);
    }
    
    
}

export default new SchoolService();