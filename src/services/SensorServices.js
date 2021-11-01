import { axiosAuth } from '../utils/SessionStorage';
import { HOST } from '../commons/hosts'; 


const SENSOR = `${HOST.backend_api}/api/sensor`;
class SensorServices{

    getSensors(){
        return axiosAuth.get(`${SENSOR}/all`);
    }

    getSensor(id){
        return axiosAuth.get(`${SENSOR}/${id}`);
    }

    createSensor(sensor){
        return axiosAuth.post(`${SENSOR}/create`, sensor);
    }

    modifySensor(sensor){
        return axiosAuth.post(`${SENSOR}/modify`, sensor);
    }

    deleteSensor(id){
        return axiosAuth.post(`${SENSOR}/${id}`);
    }

    getSensorTemplates(){
        return axiosAuth.get(`${SENSOR}/templates`)
    }

    getSensorRecords(id){
        return axiosAuth.get(`${SENSOR}/${id}/records`)
    }
   
}
export default new SensorServices();