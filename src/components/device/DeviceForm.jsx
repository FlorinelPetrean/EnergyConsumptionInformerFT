import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import DeviceServices from '../../services/DeviceServices';
 
class DeviceForm extends Component{
 
    constructor(props) {
        super(props)
 
        this.state = {
            user: props.user,
            templates: [],
            message: null,
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        this.getDeviceTemplates();
    }

    getDeviceTemplates() {
        DeviceServices.getDeviceTemplates()
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
        let username = null;
        let address = null;
        if (this.state.user !== null) {
            username = this.state.user.username;
            address = this.state.user.address;
        }

        let device = {
            username: username,
            address: address,
            description: values.description
        }

        DeviceServices.createDevice(device)
            .then(
                this.setState({
                    message: 'Device has been added'
                })
            )
            .catch(
                error => {
                    this.setState({
                        message: "Device cannot be added"
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
        let user = this.state.user;
        let deviceTemplates = this.state.templates;
        const templateOptions = [];
        for(let value of deviceTemplates) {
            templateOptions.push(
                <option key={value} value={value}>
                    {value}
                </option>
            );
        }
        let emptyDevice = {
            description: ''
        }
        let { description } = emptyDevice
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
                                        {user === null && <Field className="form-control" type="text" name="description" /> }
                                        {user !== null && <Field as="select" className="form-control" name="description">
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
export default DeviceForm;