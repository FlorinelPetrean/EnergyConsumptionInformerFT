import React from 'react';
import DeviceServices from '../../services/DeviceServices';

const deviceTemplateOptions = [];
let deviceTemplates = null;
function getDeviceTemplates() {
    DeviceServices.getDeviceTemplates()
        .then(
            response => {
                console.log(response);
                deviceTemplates = response.data
            }
        )
        
}

function getDeviceTemplatesOptions() {
    getDeviceTemplates();
    if (deviceTemplates != null) {
        for(let value of deviceTemplates) {
            deviceTemplateOptions.push(
                <option key={value} value={value}>
                    {value}
                </option>
            );
        }
    }
    return deviceTemplateOptions;
}

export default getDeviceTemplatesOptions;