import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/userlist";

class UserService{

    getUser(){
        return axios.get(USER_API_BASE_URL);
    }

    postUser(User){
        return axios.post(USER_API_BASE_URL, User);
    }

    getUserByID(user_Id){
        return axios.get(USER_API_BASE_URL+'/'+user_Id);
    }

    deleteUserByID(user_Id){
        return axios.delete(USER_API_BASE_URL+'/'+user_Id);
    }

    UpdateUser(user_Id, User){
        return axios.put(USER_API_BASE_URL+'/'+user_Id, User);
    }
}

export default new UserService();