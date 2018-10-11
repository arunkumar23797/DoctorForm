import React from 'react';
import Select from 'react-select';


const specialisationOptions = [
    { value: 'Abdevilliers', label: 'Abdevilliers' },
    { value: 'Dhoni', label: 'Dhoni' },
    { value: 'Rohit', label: 'Rohit' },
    { value: 'Bhuvi', label: 'Bhuvi' }
];

class ClinicInformation extends React.Component {
    constructor() {
        super();
        this.state = {
            specialisationSelectedOption: null
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ specialisationSelectedOption: selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <div>
                    <h4>Specializations</h4>
                    <Select
                        className="specialization-css"
                        value={this.state.specialisationSelectedOption}
                        onChange={this.handleChange}
                        options={specialisationOptions}
                        placeholder="Specializations"
                        isMulti={true}
                    />
                </div>
            </div>
        );
    }
}

export default ClinicInformation;