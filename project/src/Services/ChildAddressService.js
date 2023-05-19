import axios from "axios";

const ChildAddress_API_BASE_URL = "http://localhost:8080/api/v1/childAddress";

class ChildAddressService{

    getChildAddressByID(ChildId){
        return axios.get(ChildAddress_API_BASE_URL+'/'+ChildId);
    }
    deleteChildAddressByID(ChildId){
        return axios.delete(ChildAddress_API_BASE_URL+'/'+ChildId);
    }
    UpdateChildAddress(ChildId, ChildAddress){
        return axios.put(ChildAddress_API_BASE_URL+'/'+ChildId, ChildAddress);
    }
}

export default new ChildAddressService();