import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import SensorServices from '../../services/SensorServices';
 
class SensorForm extends Component{
 
    constructor(props) {
        super(props)
 
        this.state = {
            device: props.device,
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
            description: values.description,
            deviceId: deviceId
        }

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
    
 
    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = "Enter description"
        }
        return errors;
    }
 
    render() {
        let device = this.state.device;
        let emptySensor = {
            description: ''
        }
        let { description } = emptySensor

        let sensorTemplates = this.state.templates;
        const templateOptions = [];
        for(let value of sensorTemplates) {
            templateOptions.push(
                <option key={value} value={value}>
                    {value}
                </option>
            );
        }

        return (
            <div>
                <h2>Sensor Form</h2>
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
                                        {device === null && <Field className="form-control" type="text" name="description" />}
                                        {device !== null && <Field as="select" className="form-control" name="description">
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