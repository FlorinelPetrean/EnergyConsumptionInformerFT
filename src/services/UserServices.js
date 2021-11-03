import axios from 'axios'
import { axiosAuth } from '../utils/SessionStorage';
import { HOST } from '../commons/hosts'; 


const USER = `${HOST.backend_api}/api/user`;
class UserServices{

    getUsers(){
        return axiosAuth.get(`${USER}/all`);
    }

    getUser(id){
        return axiosAuth.get(`${USER}/${id}`);
    }


    getUserByUsername(username){
        return axiosAuth.get(`${USER}/u/${username}`)
    }

    getTotalEnergy(username) {
        return axiosAuth.get(`${USER}/${username}/totalEnergy`)
    }

    loginUser(user) {
        return axios.post(`${USER}/login`, user);
    }

    createUser(user){
        return axios.post(`${USER}/create`, user);
    }

    modifyUser(user){
        return axiosAuth.put(`${USER}/modify`, user);
    }

    deleteUser(user){
        return axiosAuth.delete(`${USER}/delete`, user);
    }

    deleteUserById(id){
        return axiosAuth.delete(`${USER}/${id}`);
    }

    getUserDevices(username){
        return axiosAuth.get(`${USER}/${username}/devices`)
    }
   
}
export default new UserServices();