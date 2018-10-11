import React from 'react';
import { FilePicker } from 'react-file-picker';
import { Button } from 'reactstrap';
import Select from 'react-select';
import AddClinic from './AddedClinicDetails';
import Timing from './Timing';

const options = [
    { value: 'Abdevilliers', label: 'Abdevilliers' },
    { value: 'Dhoni', label: 'Dhoni' },
    { value: 'Rohit', label: 'Rohit' },
    { value: 'Bhuvi', label: 'Bhuvi' }
];

class ClinicDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            clinicName: "",
            emailId: "",
            phoneNumber: "",
            address: "",
            city: "",
            clinicErr: "",
            emailIdErr: "",
            phoneNumberErr: "",
            addressErr: "",
            cityErr: "",
            selectedOption: null,
            //checking
            selectedWeek: [false, false, false, false, false, false, false],
            weekdaystiming: [],
            clinicDetailsInfo: [
            ]
        }
    }

    addClinicDetails = () => {

        const clinicsInfo = {
            ClinicName: this.state.clinicName,
            EmailId: this.state.emailId,
            PhoneNumber: this.state.phoneNumber,
            Address: this.state.address,
            City: this.state.city,
            SelectedOption: this.state.selectedOption
        }

        let Clinics = this.state.clinicDetailsInfo;
        Clinics.push(clinicsInfo);

        this.setState({
            clinicDetailsInfo: Clinics
        })
        console.log("selected days ", this.state.selectedWeek);
        console.log("information", this.state.clinicDetailsInfo);
    }

    clinic_name = e => {
        this.setState({
            clinicName: e.target.value
        })
    }

    email_id = e => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(e.target.value) === false) {
            console.log("Email is Not Correct");
            this.setState({
                emailId: e.target.value,
            })

            return false;
        }
        else {
            this.setState({
                emailId: e.target.value
            })
            // this.props.isEmailId("true");
            console.log("Email is Correct");
            return true;
        }
    }

    phone_number = e => {
        if (e.target.value.length !== 10) {
            console.log("not okay");
            this.setState({
                phoneNumber: e.target.value,

            })
        }
        if (e.target.value.length === 10) {

            this.setState({
                phoneNumber: e.target.value,

            })
            console.log("Phone number is correct");
            //this.props.isPersonalPhoneNumber("true");
        } else {
            const phone = e.target.value.slice(0, e.target.maxLength);
            this.setState({
                phoneNumber: phone

            })
        }
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

    selectWeeksClinicHour = (index) => {

        let pos = this.state.selectedWeek;
        pos[index] = true;
        this.setState({
            selectedWeek: pos
        })
    }

    weekDaysTiming = (obj, index) => {

        let time = {
            morningFrom: obj.morningFrom,
            morningTo: obj.morningTo,
            eveningFrom: obj.eveningFrom,
            eveningTo: obj.eveningTo
        }

        let pos = this.state.weekdaystiming;
        pos[index] = time;

        this.setState({
            weekdaystiming: pos
        })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    onBlur_clinic_name = e => {
        if (e.target.value === "") {
            this.setState({
                clinicErr: "Clinic name should not be empty"
            });
        } else {
            this.setState({
                clinicErr: ""
            });
        }
    }

    onBlur_emailId = e => {
        if (this.state.emailId === "" || this.email_id(e) === false) {
            this.setState({
                emailIdErr: "Invalid Email id"
            })
        }
        else {
            this.setState({
                emailIdErr: ""
            })
        }
    }

    onBlur_phoneNumber = e => {
        console.log("onBlur phone check ", this.state.phoneNumber);
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
        if (this.state.address === "") {
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
        if (this.state.city === "") {
            this.setState({
                cityErr: "City should not be empty"
            })
        } else {
            this.setState({
                cityErr: ""
            })
        }
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div>

                <div className="profile-details">
                    <h4>Clinic/Hospital Details</h4>

                    <button className="button-circle-add-clinic"
                        onClick={this.addClinicDetails}>+</button>
                </div>
                <div>
                    <AddClinic clinicDetails={this.state.clinicDetailsInfo}
                        weekDays={this.state.weekdaystiming} 
                        selectedDays={this.state.selectedWeek} />
                </div>
                <div className="profile-details">
                    <div className="div-id">
                        <h4>Clinic name</h4>
                        <input
                            className="input-box"
                            value={this.state.clinicName}
                            onBlur={this.onBlur_clinic_name}
                            onChange={this.clinic_name}
                            type="text"
                            placeholder="Clinic name" />

                        <h5 className="error-message">{this.state.clinicErr}</h5>
                    </div>

                    <div className="div-id">
                        <h4>Email Id</h4>
                        <input className="input-box"
                            type="text"
                            onBlur={this.onBlur_emailId}
                            onChange={this.email_id}
                            value={this.state.email}
                            placeholder="Email Id" />
                        <h5 className="error-message">{this.state.emailIdErr}</h5>
                    </div>

                    <div className="div-id">
                        <h4>Phone number</h4>
                        <input
                            className="input-box"
                            type="number"
                            maxLength={10}
                            value={this.state.phoneNumber}
                            onChange={this.phone_number}
                            placeholder="phoneNumber"
                            onBlur={this.onBlur_phoneNumber} />
                        <h5 className="error-message">{this.state.phoneNumberErr}</h5>
                    </div>
                </div>
                <div>
                    <h4>Upload Clinic Ownership Certificates</h4>
                    <FilePicker
                        extensions={['md']}
                        onChange={FileObject => ("")}
                        onError={errMsg => ("file Error")}
                    >
                        <Button className="btn upload-button">Upload</Button>
                    </FilePicker>
                </div>

                <div className="profile-details">
                    <div className="div-id-clinic">
                        <h4>Address</h4>
                        <input
                            className="input-box"
                            value={this.state.address}
                            onBlur={this.onBlur_address}
                            onChange={this.address}
                            type="text"
                            placeholder="Address" />

                        <h5 className="error-message">{this.state.addressErr}</h5>
                    </div>

                    <div className="div-id-clinic">
                        <h4>City</h4>
                        <input className="input-box"
                            type="text"
                            onBlur={this.onBlur_city}
                            onChange={this.city}
                            value={this.state.city}
                            placeholder="City" />
                        <h5 className="error-message">{this.state.cityErr}</h5>
                    </div>
                </div>
                <div>
                    <h4>Specializations</h4>
                    <Select
                        className="specialization-css"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="Specializations"
                        isMulti={true}
                    />
                </div>
                <div>
                    <Timing index={this.selectWeeksClinicHour} weeks={this.weekDaysTiming} />
                </div>
            </div>
        );
    }
}

export default ClinicDetails;