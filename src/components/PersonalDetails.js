import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Registration from './Registration';
import Formsy from 'formsy-react';
import InputValidation from './InputValidation';
import 'react-datepicker/dist/react-datepicker.css';

const genderOptions = [
    {
        value: 'Male', label: 'Male'
    },
    {
        value: 'Female', label: 'Female'
    },
    {
        value: 'Other', label: 'Other'
    }
];


class PersonalDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            allOkay: true,
            firstName: "",
            email: "",
            phoneNumber: "",
            address: "",
            city: "",
            selectedOption: null,
            startDate: moment(),
            firstNameErr: "",
            emailErr: "",
            phoneNumberErr: "",
            addressErr: "",
            cityErr: "",
            canSubmit: false
        };
    }

    onBlur_firstName = e => {
        if (this.state.firstName === "") {
            this.setState({
                firstNameErr: "First name should not be empty"
            })
        } else {
            this.setState({
                firstNameErr: ""
            })
        }
    }

    onBlur_emailId = e => {
        if (this.state.email === "" || this.validateEmailId(e) === false) {
            this.setState({
                emailErr: "Invalid Email id"
            })
        }
        else {
            this.setState({
                emailErr: ""
            })
        }
    }

    onBlur_phoneNumber = e => {
        if (this.state.phoneNumber.length > 10 || this.state.phoneNumber.length < 10) {
            this.setState({
                phoneNumberErr: "Invalid phone number"
            })
        } else {
            this.setState({
                phoneNumberErr: ""
            })
        }
    }

    onBlur_address = e => {
        if (this.state.address.length === 0) {
            this.setState({
                addressErr: "Address should not be empty"
            })
        } else {
            this.setState({
                addressErr: ""
            })
        }
    }


    onBlur_city = e => {
        if (this.state.city.length === 0) {
            this.setState({
                cityErr: "City should not be empty"
            })
        } else {
            this.setState({
                cityErr: ""
            })
        }
    }

    firstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
        if (this.state.firstName !== "") {
            //  this.props.isFirstName("true");
        }
    }

    handleGenderChange = (selectedOption) => {
        this.setState({
            selectedOption: selectedOption
        });
    }

    handleDateChange = (changeDate) => {
        console.log(changeDate > this.state.startDate ? "First" : "second");
        console.log("date of birth ", changeDate);
        this.setState({
            startDate: changeDate
        });

    }

    validateEmailId = (emailId) => {
        console.log(emailId.target.value);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(emailId.target.value) === false) {
            console.log("Email is Not Correct");
            this.setState({
                email: emailId.target.value,

            })

            return false;
        }
        else {
            this.setState({
                email: emailId.target.value
            })
            // this.props.isEmailId("true");
            console.log("Email is Correct");
            return true;
        }
    }

    validatePhoneNumber = (event) => {
        console.log("phone number validation");

        if (event.target.value.length !== 10) {
            console.log("not okay");
            this.setState({
                allOkay: false
            })
        }
        if (event.target.value.length === 10) {

            this.setState({
                allOkay: true
            })
            console.log("Phone number is correct");
            //this.props.isPersonalPhoneNumber("true");

        }
        const phone = event.target.value.slice(0, event.target.maxLength);
        this.setState({
            phoneNumber: phone
        })
    }

    address = e => {
        this.setState({
            address: e.target.value
        })
    }

    city = e => {
        this.setState({
            city: e.target.value
        })
    }

    disableButton = () => {
        this.setState({ canSubmit: false });
    }

    enableButton = () => {
        console.log("enable button!!!");
        this.setState({ canSubmit: true });
    }

    submit(model) {
        fetch('http://example.com/', {
            method: 'post',
            body: JSON.stringify(model)
        });
    }

    render() {
        return (
            <div >
                <div>
                    <h4>Profile Details</h4>
                    <div>
                        <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                            <div className="profile-details">
                                <div className="div-id">
                                    <h4>First Name</h4>
                                    <input
                                        className="input-box"
                                        value={this.state.firstName}
                                        onBlur={this.onBlur_firstName}
                                        onChange={this.firstName} type="text" placeholder="first name" />

                                    <h5 className="error-message">{this.state.firstNameErr}</h5>
                                </div>

                                <div className="div-id">
                                    <h4>Last Name</h4>
                                    <input className="input-box" type="text" placeholder="last name" />
                                </div>

                                <div className="div-id">
                                    <h4>Email Id</h4>
                                    <InputValidation
                                        name="email"
                                        validations="isEmail"
                                        validationError="This is not a valid email"
                                        required
                                    />
                                    <h5 className="error-message">{this.state.emailErr}</h5>
                                </div>

                                <div className="div-id">
                                    <h4>Phone Number</h4>
                                    <input
                                        className="input-box"
                                        type="number"
                                        onChange={this.validatePhoneNumber}
                                        value={this.state.phoneNumber}
                                        maxlength="10"
                                        onBlur={this.onBlur_phoneNumber}
                                        placeholder="phone number" />
                                    <h5 className="error-message">{this.state.phoneNumberErr}</h5>
                                </div>

                                <div className="div-id">
                                    <h4> Gender</h4>
                                    <Select className="drop-down-menu"
                                        value={this.state.selectedOption}
                                        onChange={this.handleGenderChange}
                                        options={genderOptions}>
                                    </Select>
                                </div>
                            </div>

                            <div className="profile-details">
                                <div className="div-id">
                                    <h4>Date of Birth</h4>
                                    <DatePicker className="input-box-dob"
                                        selected={this.state.startDate}
                                        onChange={this.handleDateChange}>
                                    </DatePicker>
                                </div>
                                <div className="div-id">
                                    <h4>Address</h4>
                                    <input className="input-box-dob"
                                        type="text"
                                        onBlur={this.onBlur_address}
                                        onChange={this.address}
                                        value={this.state.address}
                                        placeholder="Address" >
                                    </input>
                                    <h5 className="error-message">{this.state.addressErr}</h5>
                                </div>
                                <div className="div-id">
                                    <h4>City</h4>
                                    <input className="input-box-dob"
                                        value={this.state.city}
                                        onBlur={this.onBlur_city}
                                        onChange={this.city}
                                        placeholder="City">
                                    </input>
                                    <h5 className="error-message">{this.state.cityErr}</h5>
                                </div>
                            </div>
                            <div>
                                <Registration />
                            </div>
                        </Formsy>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalDetails;