import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DatePicker from "react-datepicker";

class IndexUI extends Component {

    handleDateChange = (date) => {
        this.props.dynamicData.setState({ selected_date: date, errorValid: false })
    }

    render() {
        const { user_data, api_fail, date_match, date_match_modal, matched_date, api_error, open_modal, errorValid, current_data, selected_date } = this.props.dynamicData.state
        return (
            <div>
                <h1 className="heading-title">Full Throttle</h1>
                {!api_fail ?
                    <>{
                        user_data.map((value) => (
                            <div className="child-div" key={value.id} onClick={() => this.props.dynamicData.openModal(value)}>
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
                            onClose={this.props.dynamicData.handleClose}
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
                                <Button variant="contained" className="btn-class" color="primary" onClick={this.props.dynamicData.findDate}>Submit Date</Button>
                            </div>
                            <DialogActions>
                                <Button onClick={this.props.dynamicData.handleClose} color="primary">
                                    Close
                            </Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog
                            open={date_match_modal}
                            onClose={this.props.dynamicData.handleCloseSub}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            {date_match ?
                                <>
                                    <h3 className="modal-title">Its a Match</h3>
                                    <h3 className="modal-subtitle"> Name: {current_data.real_name}</h3>
                                    <h3 className="modal-subtitle"> Location: {current_data.tz}</h3>
                                    <h3 className="modal-subtitle"> Date and Time: {matched_date}</h3>


                                </> :
                                <>
                                    <h3 className="modal-title">Oops! your date didn't matched'</h3>
                                </>
                            }

                            <DialogActions>
                                <Button onClick={this.props.dynamicData.handleCloseSub} color="primary">
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

export default IndexUI;