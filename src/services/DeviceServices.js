import { axiosAuth } from '../utils/SessionStorage';
import { HOST } from '../commons/hosts'; 


const DEVICE = `${HOST.backend_api}/api/device`;
class DeviceServices{

    getDevices(){
        return axiosAuth.get(`${DEVICE}/all`);
    }

    getDevice(id){
        return axiosAuth.get(`${DEVICE}/${id}`);
    }

    createDevice(device){
        console.log(device)
        return axiosAuth.post(`${DEVICE}/create`, device);
    }

    modifyDevice(device){
        return axiosAuth.put(`${DEVICE}/modify`, device);
    }

    deleteDevice(id){
        return axiosAuth.post(`${DEVICE}/${id}`);
    }

    getDeviceTemplates(){
        return axiosAuth.get(`${DEVICE}/templates`)
    }
   
}
export default new DeviceServices();