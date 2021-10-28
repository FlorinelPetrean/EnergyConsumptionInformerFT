import { axiosAuth } from '../utils/SessionStorage';
import { HOST } from '../commons/hosts'; 


const DEVICE = `${HOST}/api/device`;
class DeviceServices{

    getDevices(){
        return axiosAuth.get(`${DEVICE}/all`);
    }

    getDevice(id){
        return axiosAuth.get(`${DEVICE}/${id}`);
    }

    createDevice(device){
        return axiosAuth.post(`${DEVICE}/create`, device);
    }

    modifyDevice(device){
        return axiosAuth.post(`${DEVICE}/modify`, device);
    }

    deleteDevice(id){
        return axiosAuth.post(`${DEVICE}/${id}`);
    }
   
}
export default new DeviceServices();