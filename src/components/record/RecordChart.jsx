import React from "react";
import RecordServices from "../../services/RecordServices";
import SimpleChart from "../../utils/Chart";
import { Formik, Form, Field} from 'formik';


class RecordChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.sensorId,
            date: null,
            chartData: []
        };
        this.refreshRecords = this.refreshRecords.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.refreshRecords(this.state.date);
    }

    refreshRecords(date) {
        RecordServices.getSensorRecordsByDay(this.state.id, date)
            .then(
                response => {
                    console.log(response);
                    this.setState({ 
                        chartData: response.data
                        
                    })
                }
            )
    }


    onSubmit(values) {
        let day = values.date;
        this.setState({
            date: day
        })
        this.refreshRecords(day);
    }


    render() {
        let date = ''
        if (this.state.chartData.length === 0)
            return(
            <div>
                <div>
                    <Formik
                            initialValues={{ date }}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={false}
                            enableReinitialize={true}
                        >
                            {
                                (props) => (
                                    <Form>                              
                                        <fieldset className="form-group">
                                            <label>Date</label>
                                            <Field className="form-control" type="date" name="date" />
                                        </fieldset>

                                        <button className="btn btn-success" type="submit">Select</button>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                 <div>None</div>
            </div>
            )
        return (
            <div>
                <div>
                    <Formik
                            initialValues={{ date }}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={false}
                            enableReinitialize={true}
                        >
                            {
                                (props) => (
                                    <Form>                              
                                        <fieldset className="form-group">
                                            <label>Date</label>
                                            <Field className="form-control" type="date" name="date" />
                                        </fieldset>

                                        <button className="btn btn-success" type="submit">Select</button>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>

                <h2>Chart</h2>
                <SimpleChart data={this.state.chartData}/>
            </div>
        )
    }
}

export default RecordChart;