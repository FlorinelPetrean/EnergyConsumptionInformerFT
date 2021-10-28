import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserServices from '../../services/UserServices';
 
class UserForm extends Component{
 
    constructor(props) {
        super(props)
 
        this.state = {
            user: props.user, 
            message: null,
        }
        this.isCreateForm = this.isCreateForm.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    isCreateForm() {
        if(this.state.user === null)
            return true;
        return false;
    }
 
    onSubmit(values) {
        let user = {
            username: values.username,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
            dateOfBirth: values.dateOfBirth
        }

        if (this.isCreateForm() === false){
            UserServices.createUser(user)
                .then(
                    this.setState({
                        message: 'User has been added'
                    })
                )
                .catch(
                    error => {
                        this.setState({
                            message: "User cannot be added"
                        })
                        console.log(error);
                    }
                )
        }
        else{
            UserServices.modifyUser(user)
                .then(
                    this.setState({
                        message: 'User has been updated'
                    })
                )
                .catch(
                    error => {
                        this.setState({
                            message: "User cannot be updated"
                        })
                        console.log(error);
                    }
                )
        }
       
        
    }
    
 
    validate(values) {
        let errors = {}
        if (!values.username) {
            errors.name = 'Enter a username'
        }
        if(values.password !== values.confirmPassword) {
            errors.password = 'Passwords do not match'
        }
        if(!values.password) {
            errors.password = "Enter password"
        }
        if(!values.firstName){
            errors.firstName = "Enter First Name"
        }
        if(!values.lastName){
            errors.lastName = "Enter Last Name"
        }
        if(!values.address) {
            errors.address = "Enter Address"
        }

        if(!values.dateOfBirth) {
            errors.dateOfBirth = "Enter date of birth"
        }
        return errors;
    }
 
    render() {
        let emptyUser = {
            username: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            address: '',
            dateOfBirth: ''
        }
        let user = null;
        if (this.state.user == null) 
            user = emptyUser;
        else {
            user = this.state.user
            user.confirmPassword = null
            user.password = null
        }
        let { username, password, confirmPassword, firstName, lastName, address, dateOfBirth } = user

        return (
            <div>
                <h2>User Form</h2>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <Formik
                        initialValues={{ username, password, confirmPassword, firstName, lastName, address, dateOfBirth }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="password" component="div"
                                                  className="alert alert-warning" />
                                    <ErrorMessage name="username" component="div"
                                                  className="alert alert-warning" />
                                   
                                  
                                    <fieldset className="form-group">
                                    <label>Username</label>
                                    {!this.isCreateForm() && (<Field className="form-control" type="text" name="username"/>)}
                                    {this.isCreateForm() && (<Field className="form-control" type="text" name="username" disabled/>)}
                                    </fieldset>

                                    {!this.isCreateForm() &&
                                    <fieldset className="form-group">
                                    <label>Password</label>
                                    <Field className="form-control" type="password" name="password"/>
                                    </fieldset>
                                    }
                                    {!this.isCreateForm() &&
                                    <fieldset className="form-group">
                                    <label>Confirm Password</label>
                                    <Field className="form-control" type="password" name="confirmPassword"/>
                                    </fieldset>
                                    }
                                    

                                    <fieldset className="form-group">
                                        <label>First Name</label>
                                        <Field className="form-control" type="text" name="firstName" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Last Name</label>
                                        <Field className="form-control" type="text" name="lastName" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Address</label>
                                        <Field className="form-control" type="text" name="address" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Date of Birth</label>
                                        <Field className="form-control" type="date" name="dateOfBirth" />
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
 
export default UserForm;