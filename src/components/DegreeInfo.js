import React from 'react';
import AddDegreeResults from './AddDegreeResults';
import Select from 'react-select';
import Timing from './Timing';
import Icon from './send.png';

const specialisationOptions = [
    { value: 'Abdevilliers', label: 'Abdevilliers' },
    { value: 'Dhoni', label: 'Dhoni' },
    { value: 'Rohit', label: 'Rohit' },
    { value: 'Bhuvi', label: 'Bhuvi' }
];

class DegreeInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            degreeName: "",
            degreeYear: null,
            collegeName: "",
            degreeResultsCount: 0,
            degreeList: {},
            degreeResults: [],
            doctor: "",
            message: "",
            specialisationSelectedOption: null
        };
    }

    handleChange = (selectedOption) => {
        this.setState({ specialisationSelectedOption: selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    sendMessage = e => {
        this.setState({
            message: e.target.value
        })
    }

    degree_name = (input) => {
        this.setState({
            degreeName: input.target.value
        })
    }

    searchDoctor = e => {
        this.setState({
            doctor: e.target.value
        })
    }

    degree_year = (input) => {
        this.setState({
            degreeYear: input
        })
    }

    college_name = (input) => {
        this.setState({
            collegeName: input.target.value
        })
    }

    increaseDegreeResultsCount = () => {

        let isPre = false;

        this.state.degreeResults.map((degree) => {
            console.log("degree name", degree.degreeName, " ", this.state.degreeName);
            if (degree.degreeName === this.state.degreeName) {
                isPre = true;
                return;
            }
        })
        if (isPre === true) {
            alert("Degree already exist");
        } else {
            let de = {
                id: this.state.degreeResultsCount,
                degreeName: this.state.degreeName,
                degreeYear: this.state.degreeYear,
                collegeName: this.state.collegeName
            };

            let degree = this.state.degreeResults;
            degree.push(de);
            this.setState({
                degreeResults: degree
            });
            this.setState({
                degreeResultsCount: this.state.degreeResultsCount + 1
            })

            this.setState({
                degreeName: "",
                degreeYear: null,
                collegeName: ""
            })
            console.log("console count", this.state.degreeResults);
        }
    }

    removeDegreeResults = (index) => {
        console.log("current deleting index ", index, this.state.degreeResultsCount, this.state.degreeResults.length);

        this.setState(prevState => ({
            degreeResults: prevState.degreeResults.filter(e1 => e1.id !== index)
        }));
    }

    render() {
        return (
            <div>
                
                <div className="registration">
                    <h4 className="div-id">
                        Degree Name*
                        </h4>
                    <h4 className="div-id">
                        Year*
                        </h4>
                    <h4 className="div-id">
                        College*
                    </h4>
                    <h4 className="div-id">
                        Upload Certificate
                    </h4>
                </div>
                <div>
                    <div>
                        <AddDegreeResults
                            degree_name_each={this.state.degreeName}
                            degree_year_each={this.state.degreeYear}
                            degree_producer_each={this.state.collegeName}
                            degree_name={this.degree_name}
                            degree_year={this.degree_year}
                            degree_producer={this.college_name}
                            increaseDegreeResultCount={this.increaseDegreeResultsCount}
                        //removeMovieResultsCount={this.removeMovieResults}
                        />
                    </div>
                </div>
                {
                    this.state.degreeResults.map((degree, index) => {
                        console.log("movie result count ", this.state.degreeResults.length)
                        return (

                            <div key={index} className="profile-details-degree">
                                <div className="div-id">
                                    <input
                                        className="input-box"
                                        value={degree.degreeName} />
                                </div>

                                <div className="div-id">
                                    <input className="input-box"
                                        value={degree.degreeYear} />
                                </div>

                                <div className="div-id">
                                    <input className="input-box"
                                        value={degree.collegeName} />
                                </div>

                                <div className="div-id">
                                    <button className="button-circle"
                                        onClick={() => { this.removeDegreeResults(degree.id) }}>-</button>
                                </div>
                            </div>
                        )
                    })
                }

                <div>
                    <h4>Specializations for clinic</h4>
                    <Select
                        className="specialization-css"
                        value={this.state.specialisationSelectedOption}
                        onChange={this.handleChange}
                        options={specialisationOptions}
                        placeholder="Specializations"
                        isMulti={true}
                    />
                </div>

                <div>
                    <Timing />
                </div>

                <div >
                    <h4>Invite Doctor</h4>
                    <div className="search">
                        <div>
                            <h5>Name</h5>
                            <input
                                className="input-box"
                                placeholder="Search for your doctor"
                                value={this.state.doctor}
                                onChange={this.searchDoctor}
                            >
                            </input>
                        </div>
                        <div>
                            <h5>Message</h5>
                            <input
                                className="input-box"
                                placeholder="Message"
                                value={this.state.message}
                                onChange={this.sendMessage}
                            ></input>
                        </div>
                        <div>
                            <h5>Invite</h5>
                            <button>
                                <img src={Icon} width='30' height= '28' />
                            </button>
                        </div>
                    </div>
                    <h4 className="text-color">Doctor not found? Invite me!</h4>
                </div>
            </div>
        );
    }
}

export default DegreeInfo;