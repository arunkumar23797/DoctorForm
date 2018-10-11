import React from 'react';

class Registration extends React.Component {

    constructor() {
        super();
        this.state = {
            registrationCouncil : "",
            experienceYear : 0,
            registrationCouncilErr: "",
            experienceYearErr: "",
            isRegistrationValid : false,
            isValidExperience : false
        };

        this.isValidRegistrationCouncil.bind(this);
        this.isValidExperience.bind(this);
        this.onBlur_registraion.bind(this);
        this.onBlur_experience.bind(this);
    }

    isValidRegistrationCouncil = (registration) => {
        if(registration.target.value.substring(0,3) === "REG" && registration.target.value.length > 5) {
            this.setState({
                registrationCouncil: registration.target.value,
                isRegistrationValid: true
                
            })
            console.log("Registration trueeee");
            //this.props.isRegister("true");
            return true;
        } else {
            
            this.setState({
                registrationCouncil: registration.target.value,
                isRegistrationValid: false
            })
            return false;
        }
    }

    isValidExperience = (experience) => {
        
        if(experience.target.value < 50 && experience.target.value > 15) {
            console.log("yeah");
            this.setState({
                experienceYear: experience.target.value,
                isValidExperience: true
            });
            //this.props.isExperience("true");
            return true;
        } else {
            
            this.setState({
                experience: experience.target.value,
                isValidExperience: false
            })

            return false;
        }
    }

    onBlur_registraion = (e) => {
        if(this.state.isRegistrationValid === false)
        {
            this.setState({
                registrationCouncilErr: "Invalid Registration council"
            })
        } else {
            this.setState({
                registrationCouncilErr: ""
            })
        }
    }

    onBlur_experience = (e) => {
        if(this.isValidExperience(e) === false) 
        {
            this.setState({
                experienceYearErr: "Invalid Experience year*"
            })
        } else {
            this.setState({
                experienceYearErr: ""
            })
        }
    }

    render() {
        return (
            <div className="registration">
                <div>
                    <h4>Registration Number & year*</h4>
                    <div className="registration-div">
                        <input
                                className="input-box"
                                type="text"
                                placeholder="Registration Number" />
                        <input 
                                className="input-box"
                                type="text"
                                placeholder="Registration Year" />
                    </div>
                    
                </div>
                <div className="registration-council">
                    <h4>Registration Council</h4>
                    <input  
                            className="input-box" 
                            type="text"
                            onBlur={this.onBlur_registraion}
                            onChange={this.isValidRegistrationCouncil}
                            value={this.state.registrationCouncil}
                            placeholder="Registration Council"/>
                    <h5
                        className="error-message"
                        >{this.state.registrationCouncilErr}</h5>
                </div>
                <div className="registration-experience">
                    <h4>Experience (years)*</h4>
                    <input 
                            className="input-box"
                            type="number"
                            onBlur={this.onBlur_experience}
                            onChange={this.isValidExperience}
                            placeholder="Experience" />
                    <h5 className="error-message">{this.state.experienceYearErr}</h5>
                </div>
            </div>
        );
    }
}

export default Registration;