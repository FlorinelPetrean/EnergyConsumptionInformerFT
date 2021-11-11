import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import SensorServices from '../../services/SensorServices';
 
class SensorForm extends Component{
 
    constructor(props) {
        super(props)
 
        this.state = {
            device: props.device,
            sensor: props.sensor,
            type: props.type,
            templates: [],
            message: null,
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        this.getSensorTemplates();
    }

    getSensorTemplates() {
        SensorServices.getSensorTemplates()
            .then(
                response => {
                    console.log(response);
                    this.setState({ 
                        templates: response.data
                    })
                }
            )
    }

 
    onSubmit(values) {
        let deviceId = null;
        if(this.state.device !== null)
            deviceId = this.state.device.id;
        let sensor = {
            id: null,
            maxValue: 0,
            description: values.description,
            deviceId: deviceId
        }
        if (this.state.type === "create" || this.state.type ==="assign") {
            SensorServices.createSensor(sensor)
                .then(
                    this.setState({
                        message: 'Sensor has been added'
                    })
                )
                .catch(
                    error => {
                        this.setState({
                            message: "Sensor cannot be added"
                        })
                        console.log(error);
                    }
                )
        }
        else{
            sensor.id = this.state.sensor.id;
            sensor.maxValue = this.state.sensor.maxValue;
            sensor.deviceId = this.state.sensor.deviceId;
            console.log(sensor)
            SensorServices.modifySensor(sensor)
                .then(
                    this.setState({ 
                        message: 'Sensor has been modified'
                    })
                )
                .catch(
                    error => {
                        this.setState({
                            message: "Sensor cannot be modified"
                        })
                        console.log(error);
                    }
                )
        }

        
    }
    
 
    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = "Enter description"
        }
        return errors;
    }
 
    render() {
        let {type, device} = this.state;
        let emptySensor = {
            description: ''
        }
        let { description } = emptySensor
        if (this.state.sensor != null)
            description = this.state.sensor.description
       
        let sensorTemplates = this.state.templates;
        const templateOptions = [];
        for(let value of sensorTemplates) {
            templateOptions.push(
                <option key={value} value={value}>
                    {value}
                </option>
            );
        }

        if(device != null) {
            description = sensorTemplates[0];
        }

        return (
            <div>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <Formik
                        initialValues={{ description }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        {(type === "create" || type === "modify") && <Field className="form-control" type="text" name="description" />}
                                        {type === "assign" && <Field as="select" className="form-control" name="description">
                                            {templateOptions}
                                        </Field>}
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
 
                </div>
            </div>
        )
    }
}
export default SensorForm;