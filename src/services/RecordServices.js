import { axiosAuth } from '../utils/SessionStorage';
import { HOST } from '../commons/hosts'; 


const RECORD = `${HOST.backend_api}/api/record`;
class DeviceServices{

    getRecords(){
        return axiosAuth.get(`${RECORD}/all`);
    }

    getSensorRecordsByDay(sensorId, date) {
        return axiosAuth.get(`${RECORD}/list/${sensorId}/${date}`);
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

    deleteRecord(record){
        return axiosAuth.delete(`${RECORD}/delete`, record);
    }

    deleteRecordBy(id){
        return axiosAuth.delete(`${RECORD}/${id}`);
    }

}
export default new DeviceServices();