import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import RecordServices from '../../services/RecordServices';
 
class RecordForm extends Component{
 
    constructor(props) {
        super(props)
 
        this.state = {
            sensorId: props.sensorId,
            message: null,
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
 

 
    onSubmit(values) {

        let record = {
            energyConsumption: values.energyConsumption,
            sensorId: this.state.sensorId
        }

        RecordServices.createRecord(record)
            .then(
                this.setState({
                    message: 'Record has been added'
                })
            )
            .catch(
                error => {
                    this.setState({
                        message: "Record cannot be added"
                    })
                    console.log(error);
                }
            )
        
    }
    
 
    validate(values) {
        let errors = {}
        if(!values.energyConsumption) {
            errors.description = "Enter energy consumption"
        }
        return errors;
    }
 
    render() {
      
        let energyConsumption =  ''
        return (
            <div>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <Formik
                        initialValues={{ energyConsumption }}
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
                                        <label>Energy Consumption</label>
                                        <Field className="form-control" type="text" name="energyConsumption" />
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
export default RecordForm;