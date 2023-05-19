import axios from "axios";

const SCHOOL_API_BASE_URL = "http://localhost:8080/api/v1/school";

class SchoolService{

    getSchool(){
        return axios.get(SCHOOL_API_BASE_URL);
    }

    postSchool(School){
        return axios.post(SCHOOL_API_BASE_URL, School);
    }

    getSchoolByID(registrationNo){
        return axios.get(SCHOOL_API_BASE_URL+'/'+registrationNo);
    }

    deleteSchoolByID(registrationNo){
        return axios.delete(SCHOOL_API_BASE_URL+'/'+registrationNo);
    }

    UpdateSchool(registrationNo, School){
        return axios.put(SCHOOL_API_BASE_URL+'/'+registrationNo, School);
    }
}

export default new SchoolService();