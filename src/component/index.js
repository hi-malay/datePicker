import React, { Component } from 'react';
import "./style.css"
import "axios"
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import { API } from "../constants/constant"

class Index extends Component {
    constructor() {
        super()
        this.state = {
            user_data: [],
            api_fail: false,
            api_error: "",
            open_modal: false,
            current_data: [],
            selected_date: new Date(),
            errorValid: false,
            date_match: false,
            date_match_modal: false
        }
    }

    componentDidMount = () => {
        axios.get(API.URL)
            .then((response) => {
                // handle success
                this.setState({ user_data: response.data.members, api_fail: false })
            })
            .catch((error) => {
                // handle error
                console.log("hi", error.response)
                this.setState({ api_error: error.response, api_fail: true })
            })
    }
    openModal = (value) => {
        this.setState({ open_modal: true, current_data: value })
    }

    handleClose = () => {
        this.setState({ open_modal: false, date_match_modal: false, errorValid: false, selected_date: '' })
    };
    handleCloseSub = () => {
        this.setState({ date_match_modal: false, errorValid: false, selected_date: '' })
    };
    handleDateChange = (date) => {
        this.setState({ selected_date: date, errorValid: false })
    }

    findDate = () => {
        this.setState({ date_match_modal: true, date_match: false })
        if (this.state.selected_date === "") {
            this.setState({ errorValid: true })
            return;
        }
        const CurDate = this.state.selected_date
        const ConvertingDateToString = CurDate.getDate() + "-" + (CurDate.getMonth() + 1) + "-" + CurDate.getFullYear()
        this.state.current_data.activity_periods.map((d) => {
            const splitArry = d.start_time.split('  ')
            const NewDate = new Date(splitArry[0]);
            const NewDateString = NewDate.getDate() + "-" + (NewDate.getMonth() + 1) + "-" + NewDate.getFullYear()

            if (ConvertingDateToString === NewDateString) {
                this.setState({ date_match: true, date_match_modal: true })
            }

        })

    }
    render() {
        const { user_data, api_fail, date_match, date_match_modal, api_error, open_modal, errorValid, current_data, selected_date } = this.state
        console.log("hi", current_data.activity_periods)
        return (
            <div className="main-div">
                <h1 className="heading-title">Full Throttle</h1>
                {!api_fail ?
                    <>{
                        user_data.map((value) => (
                            <div className="child-div" key={value.id} onClick={() => this.openModal(value)}>
                                {value.real_name}
                            </div>
                        ))
                    }</>
                    :
                    <>
                        <div className="child-div">
                            Sorry! This api is giving no {api_error} response
                        </div>
                    </>
                }
                {open_modal ?
                    <>
                        <Dialog
                            open={open_modal}
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <h3 className="modal-title">{current_data.real_name}</h3>
                            <h3 className="modal-subtitle"> Location: {current_data.tz}</h3>
                            {
                                current_data?.activity_periods.map((data) => (
                                    <>
                                        <h3 className="modal-subtitle2"><b>Start Time:</b> {data.start_time}
                                            <hr className="divider"></hr>
                                            <b>End Time: </b>{data.end_time}</h3>
                                    </>
                                ))
                            }
                            <div className="date-styling">
                                <DatePicker selected={selected_date}
                                    onChange={date => this.handleDateChange(date)}
                                    name="startDate"
                                    placeholderText="Enter Date"
                                    dateFormat="MM/dd/yyyy"
                                />
                                {errorValid ? <div className="invalid-error">invalid date</div> : ""}
                            </div>
                            <div className="date-styling">
                                <Button variant="contained" className="btn-class" color="primary" onClick={this.findDate}>Submit Date</Button>
                            </div>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Close
                            </Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog
                            open={date_match_modal}
                            onClose={this.handleCloseSub}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            {date_match ?
                                <>
                                    <h3 className="modal-title">Its a Match</h3>
                                    <h3 className="modal-subtitle"> Name: {current_data.real_name}</h3>
                                    <h3 className="modal-subtitle"> Location: {current_data.tz}</h3>
                                </> :
                                <>
                                    <h3 className="modal-title">Oops! your date didn't matched'</h3>
                                </>
                            }

                            <DialogActions>
                                <Button onClick={this.handleCloseSub} color="primary">
                                    Close
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </>
                    :
                    ""
                }

                <h4 className="footer">By: Malay Mishra</h4>
            </div>
        );
    }
}

export default Index;