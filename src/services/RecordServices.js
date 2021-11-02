import { axiosAuth } from '../utils/SessionStorage';
import { HOST } from '../commons/hosts'; 


const RECORD = `${HOST.backend_api}/api/record`;
class DeviceServices{

    getRecords(){
        return axiosAuth.get(`${RECORD}/all`);
    }

    getRecord(id){
        return axiosAuth.get(`${RECORD}/${id}`);
    }

    createRecord(record){
        console.log(record)
        return axiosAuth.post(`${RECORD}/create`, record);
    }

    modifyRecord(record){
        return axiosAuth.put(`${RECORD}/modify`, record);
    }

    deleteRecord(id){
        return axiosAuth.post(`${RECORD}/${id}`);
    }
}
export default new DeviceServices();