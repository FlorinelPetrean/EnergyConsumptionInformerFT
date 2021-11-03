import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserServices from '../services/UserServices';
import { setUserSession } from '../utils/SessionStorage';


class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: null
        }
        this.validate = this.validate.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    validate(values) {
        let errors = {}
        if (!values.username) {
            errors.name = 'Enter a name'
        }

        if (!values.password) {
            errors.name = 'Enter a password'
        }
        
        
        return errors;
    }

    onLogin(values) {
        
        let user = {
            username: values.username,
            password: values.password,
            role: ''
        }
        console.log(user)
        UserServices.loginUser(user)
            .then(
                response => {
                    this.setState({
                        username: user.username,
                        password: user.password,
                        message: "Login succeded"
                    })
                    user.role = response.data.role;
                    console.log(user)
                    let token = "Bearer " + response.data.token
                    console.log(token)
                    setUserSession(token, user)
                    this.props.history.push('/')
                }
            )
            .catch(
                error => {
                    this.setState({
                        message: "Login failed"
                    })
                    console.log(error);
                }
            )
    }


    render() {
        let { username, password } = this.state
        return(
        <div>
            <h2>Please enter your credentials:</h2>
            <div>{this.state.message && <div className="alert alert-warning">{this.state.message}</div>}</div>
            <div className="container">
                <Formik
                    initialValues={{ username, password }}
                    onSubmit={this.onLogin}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="username" component="div"
                                              className="alert alert-warning" />
                                <ErrorMessage name="password" component="div"
                                              className="alert alert-warning" />
                                
                                <fieldset className="form-group">
                                    <label>Username</label>
                                    <Field className="form-control" type="text" name="username" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>Password</label>
                                    <Field className="form-control" type="password" name="password" />
                                </fieldset>
                                
                                <button className="btn btn-success" type="submit">Login</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
        );
    }
}
export default LoginPage;