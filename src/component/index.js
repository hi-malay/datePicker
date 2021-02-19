import React, { Component } from 'react';
import "./style.css"
import "axios"
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";
import IndexUI from "./indexUI"

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
            date_match_modal: false,
            matched_date: ""
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
                this.setState({ date_match: true, date_match_modal: true, matched_date: NewDateString })
            }

        })
    }

    render() {
        return (
            <div className="main-div">
                <IndexUI dynamicData={this} />
            </div>
        );
    }
}

export default Index;