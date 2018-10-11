import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TimePicker from 'react-bootstrap-time-picker';
import 'react-tabs/style/react-tabs.css';

class Timing extends React.Component {
    constructor() {
        super();
        this.state = {
            morningFromTimeMon: 0,
            morningToTimeMon: 0,
            eveningFromTimeMon: 0,
            eveningToTimeMon: 0,
            morningFromTimeTue: 0,
            morningToTimeTue: 0,
            eveningFromTimeTue: 0,
            eveningToTimeTue: 0,
            morningFromTimeWed: 0,
            morningToTimeWed: 0,
            eveningFromTimeWed: 0,
            eveningToTimeWed: 0,
            morningFromTimeThu: 0,
            morningToTimeThu: 0,
            eveningFromTimeThu: 0,
            eveningToTimeThu: 0,
            morningFromTimeFri: 0,
            morningToTimeFri: 0,
            eveningFromTimeFri: 0,
            eveningToTimeFri: 0,
            morningFromTimeSat: 0,
            morningToTimeSat: 0,
            eveningFromTimeSat: 0,
            eveningToTimeSat: 0,
            morningFromTimeSun: 0,
            morningToTimeSun: 0,
            eveningFromTimeSun: 0,
            eveningToTimeSun: 0,

            //Error 
            morningFromTimeMonErr: "",
            morningToTimeMonErr: "",
            eveningFromTimeMonErr: "",
            eveningToTimeMonErr: "",
            morningFromTimeTueErr: "",
            morningToTimeTueErr: "",
            eveningFromTimeTueErr: "",
            eveningToTimeTueErr: "",
            morningFromTimeWedErr: "",
            morningToTimeWedErr: "",
            eveningFromTimeWedErr: "",
            eveningToTimeWedErr: "",
            morningFromTimeThuErr: "",
            morningToTimeThuErr: "",
            eveningFromTimeThuErr: "",
            eveningToTimeThuErr: "",
            morningFromTimeFriErr: "",
            morningToTimeFriErr: "",
            eveningFromTimeFriErr: "",
            eveningToTimeFriErr: "",
            morningFromTimeSatErr: "",
            morningToTimeSatErr: "",
            eveningFromTimeSatErr: "",
            eveningToTimeSatErr: "",
            morningFromTimeSunErr: "",
            morningToTimeSunErr: "",
            eveningFromTimeSunErr: "",
            eveningToTimeSunErr: "",

            
        }
    }


    morning_from_time_mon = e => {
        this.props.index(0);
        this.setState({
            morningFromTimeMon: e
        }, function () {
            console.log("morning from time", this.state.morningFromTimeMon);
            if (this.state.morningFromTimeMon <= this.state.morningToTimeMon) {

                this.setState({
                    //   morningFromTimeMon: e,
                    morningFromTimeMonErr: "",
                    
                })

            } else {
                this.setState({
                    //  morningFromTimeMon: e,
                    morningFromTimeMonErr: "Invalid time"
                })
            }
        });
        //this.morning_to_time_mon(this.state.morningFromTimeMon);
    }

    morning_to_time_mon = value => {
        this.setState({
            morningToTimeMon: value
        }, function () {
            if (this.state.morningToTimeMon > this.state.morningFromTimeMon) {
                this.setState({
                    //  morningToTimeMon: value,
                    morningToTimeMonErr: ""
                })
                this.morning_from_time_mon(this.state.morningFromTimeMon);
            } else {
                this.setState({
                    morningToTimeMonErr: "Invalid Time"
                })
            }

        });

    }

    evening_from_time_mon = e => {
        this.setState({
            eveningFromTimeMon: e
        }, function () {
            if (this.state.eveningFromTimeMon > this.state.morningToTimeMon) {
                this.setState({
                    //  eveningFromTimeMon: e,
                    eveningFromTimeMonErr: ""
                })
            } else {
                this.setState({
                    eveningFromTimeMonErr: "Invalid Time"
                })
            }
        });
    }

    evening_to_time_mon = e => {
        this.setState({
            eveningToTimeMon: e
        }, function () {
            if (this.state.eveningToTimeMon > this.state.eveningFromTimeMon) {
                this.setState({
                    // eveningToTimeMon: e,
                    eveningToTimeMonErr: ""
                })
                this.evening_from_time_mon(this.state.eveningFromTimeMon);
            } else {
                this.setState({
                    eveningToTimeMonErr: "Invalid Time"
                })
            }
            let obj = {
                morningFrom: this.state.morningFromTimeMon,
                morningTo: this.state.morningToTimeMon,
                eveningFrom: this.state.eveningFromTimeMon,
                eveningTo: this.state.eveningToTimeMon
            }
            this.props.weeks(obj, 0);
        })

    }

    //Tuesday


    morning_from_time_tues = e => {
        this.props.index(1);

        this.setState({
            morningFromTimeTue: e,
            isTue: true
        }, function () {
            console.log("morning from time", this.state.morningFromTimeTue);
            if (this.state.morningFromTimeTue <= this.state.morningToTimeTue) {

                this.setState({
                    //   morningFromTimeMon: e,
                    morningFromTimeTueErr: ""
                })

            } else {
                this.setState({
                    //  morningFromTimeMon: e,
                    morningFromTimeTueErr: "Invalid time"
                })
            }
        });
        //this.morning_to_time_mon(this.state.morningFromTimeMon);
    }

    morning_to_time_tues = value => {
        this.setState({
            morningToTimeTue: value
        }, function () {
            if (this.state.morningToTimeTue > this.state.morningFromTimeTue) {
                this.setState({
                    //  morningToTimeMon: value,
                    morningToTimeTueErr: ""
                })
                this.morning_from_time_tues(this.state.morningFromTimeTue);
            } else {
                this.setState({
                    morningToTimeTueErr: "Invalid Time"
                })
            }

        });

    }

    evening_from_time_tues = e => {
        this.setState({
            eveningFromTimeTue: e
        }, function () {
            if (this.state.eveningFromTimeTue > this.state.morningToTimeTue) {
                this.setState({
                    //  eveningFromTimeMon: e,
                    eveningFromTimeTueErr: ""
                })
            } else {
                this.setState({
                    eveningFromTimeTueErr: "Invalid Time"
                })
            }
        });
    }

    evening_to_time_tues = e => {
        this.setState({
            eveningToTimeTue: e
        }, function () {
            if (this.state.eveningToTimeTue > this.state.eveningFromTimeTue) {
                this.setState({
                    // eveningToTimeMon: e,
                    eveningToTimeTueErr: ""
                })
                this.evening_from_time_tues(this.state.eveningFromTimeTue);
            } else {
                this.setState({
                    eveningToTimeTueErr: "Invalid Time"
                })
            }
            let obj = {
                morningFrom: this.state.morningFromTimeTue,
                morningTo: this.state.morningToTimeTue,
                eveningFrom: this.state.eveningFromTimeTue,
                eveningTo: this.state.eveningToTimeTue
            }
            this.props.weeks(obj, 1);
        })

    }

    //Wednesday

    
    morning_from_time_wed = e => {
        this.props.index(2);

        this.setState({
            morningFromTimeWed: e,
            isWed: true
        }, function () {
            console.log("morning from time", this.state.morningFromTimeWed);
            if (this.state.morningFromTimeWed <= this.state.morningToTimeWed) {

                this.setState({
                    //   morningFromTimeMon: e,
                    morningFromTimeWedErr: ""
                })

            } else {
                this.setState({
                    //  morningFromTimeMon: e,
                    morningFromTimeWedErr: "Invalid time"
                })
            }
        });
        //this.morning_to_time_mon(this.state.morningFromTimeMon);
    }

    morning_to_time_wed = value => {
        this.setState({
            morningToTimeWed: value
        }, function () {
            if (this.state.morningToTimeWed > this.state.morningFromTimeWed) {
                this.setState({
                    //  morningToTimeMon: value,
                    morningToTimeWedErr: ""
                })
                this.morning_from_time_wed(this.state.morningFromTimeWed);
            } else {
                this.setState({
                    morningToTimeWedErr: "Invalid Time"
                })
            }

        });

    }

    evening_from_time_wed = e => {
        this.setState({
            eveningFromTimeWed: e
        }, function () {
            if (this.state.eveningFromTimeWed > this.state.morningToTimeWed) {
                this.setState({
                    //  eveningFromTimeMon: e,
                    eveningFromTimeWedErr: ""
                })
            } else {
                this.setState({
                    eveningFromTimeWedErr: "Invalid Time"
                })
            }
        });
    }

    evening_to_time_wed = e => {
        this.setState({
            eveningToTimeWed: e
        }, function () {
            if (this.state.eveningToTimeWed > this.state.eveningFromTimeWed) {
                this.setState({
                    // eveningToTimeMon: e,
                    eveningToTimeWedErr: ""
                })
                this.evening_from_time_wed(this.state.eveningFromTimeWed);
            } else {
                this.setState({
                    eveningToTimeWedErr: "Invalid Time"
                })
            }
            let obj = {
                morningFrom: this.state.morningFromTimeWed,
                morningTo: this.state.morningToTimeWed,
                eveningFrom: this.state.eveningFromTimeWed,
                eveningTo: this.state.eveningToTimeWed
            }
            this.props.weeks(obj, 2);
        })

    }

    //Thursday

    
    morning_from_time_thurs = e => {
        this.props.index(3);

        this.setState({
            morningFromTimeThu: e,
            isThu: true
        }, function () {
            console.log("morning from time", this.state.morningFromTimeThu);
            if (this.state.morningFromTimeThu <= this.state.morningToTimeThu) {

                this.setState({
                    //   morningFromTimeMon: e,
                    morningFromTimeThuErr: ""
                })

            } else {
                this.setState({
                    //  morningFromTimeMon: e,
                    morningFromTimeThuErr: "Invalid time"
                })
            }
        });
        //this.morning_to_time_mon(this.state.morningFromTimeMon);
    }

    morning_to_time_thurs = value => {
        this.setState({
            morningToTimeThu: value,
        }, function () {
            if (this.state.morningToTimeThu > this.state.morningFromTimeThu) {
                this.setState({
                    //  morningToTimeMon: value,
                    morningToTimeThuErr: ""
                })
                this.morning_from_time_thurs(this.state.morningFromTimeThu);
            } else {
                this.setState({
                    morningToTimeThuErr: "Invalid Time"
                })
            }

        });

    }

    evening_from_time_thurs = e => {
        this.setState({
            eveningFromTimeThu: e
        }, function () {
            if (this.state.eveningFromTimeThu > this.state.morningToTimeThu) {
                this.setState({
                    //  eveningFromTimeMon: e,
                    eveningFromTimeThuErr: ""
                })
            } else {
                this.setState({
                    eveningFromTimeThuErr: "Invalid Time"
                })
            }
        });
    }

    evening_to_time_thurs = e => {
        this.setState({
            eveningToTimeThu: e
        }, function () {
            if (this.state.eveningToTimeThu > this.state.eveningFromTimeThu) {
                this.setState({
                    // eveningToTimeMon: e,
                    eveningToTimeThuErr: ""
                })
                this.evening_from_time_thurs(this.state.eveningFromTimeThu);
            } else {
                this.setState({
                    eveningToTimeThuErr: "Invalid Time"
                })
            }
            let obj = {
                morningFrom: this.state.morningFromTimeThu,
                morningTo: this.state.morningToTimeThu,
                eveningFrom: this.state.eveningFromTimeThu,
                eveningTo: this.state.eveningToTimeThu
            }
            this.props.weeks(obj, 3);
        })

    }

    //Friday

    
    morning_from_time_fri = e => {
        this.props.index(4);

        this.setState({
            morningFromTimeFri: e,
            isFri: true
        }, function () {
            console.log("morning from time", this.state.morningFromTimeFri);
            if (this.state.morningFromTimeFri <= this.state.morningToTimeFri) {

                this.setState({
                    //   morningFromTimeMon: e,
                    morningFromTimeFriErr: ""
                })

            } else {
                this.setState({
                    //  morningFromTimeMon: e,
                    morningFromTimeFriErr: "Invalid time"
                })
            }
        });
        //this.morning_to_time_mon(this.state.morningFromTimeMon);
    }

    morning_to_time_fri = value => {
        this.setState({
            morningToTimeFri: value
        }, function () {
            if (this.state.morningToTimeFri > this.state.morningFromTimeFri) {
                this.setState({
                    //  morningToTimeMon: value,
                    morningToTimeFriErr: ""
                })
                this.morning_from_time_fri(this.state.morningFromTimeFri);
            } else {
                this.setState({
                    morningToTimeFriErr: "Invalid Time"
                })
            }

        });

    }

    evening_from_time_fri = e => {
        this.setState({
            eveningFromTimeFri: e
        }, function () {
            if (this.state.eveningFromTimeFri > this.state.morningToTimeFri) {
                this.setState({
                    //  eveningFromTimeMon: e,
                    eveningFromTimeFriErr: ""
                })
            } else {
                this.setState({
                    eveningFromTimeFriErr: "Invalid Time"
                })
            }
        });
    }

    evening_to_time_fri = e => {
        this.setState({
            eveningToTimeFri: e
        }, function () {
            if (this.state.eveningToTimeFri > this.state.eveningFromTimeFri) {
                this.setState({
                    // eveningToTimeMon: e,
                    eveningToTimeFriErr: ""
                })
                this.evening_from_time_fri(this.state.eveningFromTimeFri);
            } else {
                this.setState({
                    eveningToTimeFriErr: "Invalid Time"
                })
            }
            let obj = {
                morningFrom: this.state.morningFromTimeFri,
                morningTo: this.state.morningToTimeFri,
                eveningFrom: this.state.eveningFromTimeFri,
                eveningTo: this.state.eveningToTimeFri
            }
            this.props.weeks(obj, 4);
        })

    }

    //Saturday

   
    morning_from_time_sat = e => {
        this.props.index(5);

        this.setState({
            morningFromTimeSat: e,
            isSat: true
        }, function () {
            console.log("morning from time", this.state.morningFromTimeSat);
            if (this.state.morningFromTimeSat <= this.state.morningToTimeSat) {

                this.setState({
                    //   morningFromTimeMon: e,
                    morningFromTimeSatErr: ""
                })

            } else {
                this.setState({
                    //  morningFromTimeMon: e,
                    morningFromTimeSatErr: "Invalid time"
                })
            }
        });
        //this.morning_to_time_mon(this.state.morningFromTimeMon);
    }

    morning_to_time_sat = value => {
        this.setState({
            morningToTimeSat: value,
            
        }, function () {
            if (this.state.morningToTimeSat > this.state.morningFromTimeSat) {
                this.setState({
                    //  morningToTimeMon: value,
                    morningToTimeSatErr: ""
                })
                this.morning_from_time_sat(this.state.morningFromTimeSat);
            } else {
                this.setState({
                    morningToTimeSatErr: "Invalid Time"
                })
            }

        });

    }

    evening_from_time_sat = e => {
        this.setState({
            eveningFromTimeSat: e
        }, function () {
            if (this.state.eveningFromTimeSat > this.state.morningToTimeSat) {
                this.setState({
                    //  eveningFromTimeMon: e,
                    eveningFromTimeSatErr: ""
                })
            } else {
                this.setState({
                    eveningFromTimeSatErr: "Invalid Time"
                })
            }
        });
    }

    evening_to_time_sat = e => {
        this.setState({
            eveningToTimeSat: e
        }, function () {
            if (this.state.eveningToTimeSat > this.state.eveningFromTimeSat) {
                this.setState({
                    // eveningToTimeMon: e,
                    eveningToTimeSatErr: ""
                })
                this.evening_from_time_mon(this.state.eveningFromTimeSat);
            } else {
                this.setState({
                    eveningToTimeSatErr: "Invalid Time"
                })
            }
            let obj = {
                morningFrom: this.state.morningFromTimeSat,
                morningTo: this.state.morningToTimeSat,
                eveningFrom: this.state.eveningFromTimeSat,
                eveningTo: this.state.eveningToTimeSat
            }
            this.props.weeks(obj, 5);
        })

    }
    //sunday

    
    morning_from_time_sun = e => {
        this.props.index(6);

        this.setState({
            morningFromTimeSun: e,
            isSun: true
        }, function () {
            console.log("morning from time", this.state.morningFromTimeSun);
            if (this.state.morningFromTimeSun <= this.state.morningToTimeSun) {

                this.setState({
                    //   morningFromTimeMon: e,
                    morningFromTimeSunErr: ""
                })

            } else {
                this.setState({
                    //  morningFromTimeMon: e,
                    morningFromTimeSunErr: "Invalid time"
                })
            }
        });
        //this.morning_to_time_mon(this.state.morningFromTimeMon);
    }

    morning_to_time_sun = value => {
        this.setState({
            morningToTimeSun: value
        }, function () {
            if (this.state.morningToTimeSun > this.state.morningFromTimeSun) {
                this.setState({
                    //  morningToTimeMon: value,
                    morningToTimeSunErr: ""
                })
                this.morning_from_time_sun(this.state.morningFromTimeSun);
            } else {
                this.setState({
                    morningToTimeSunErr: "Invalid Time"
                })
            }

        });

    }

    evening_from_time_sun = e => {
        this.setState({
            eveningFromTimeSun: e
        }, function () {
            if (this.state.eveningFromTimeSun > this.state.morningToTimeSun) {
                this.setState({
                    //  eveningFromTimeMon: e,
                    eveningFromTimeSunErr: ""
                })
            } else {
                this.setState({
                    eveningFromTimeSunErr: "Invalid Time"
                })
            }
        });
    }

    evening_to_time_sun = e => {
        this.setState({
            eveningToTimeSun: e
        }, function () {
            if (this.state.eveningToTimeSun > this.state.eveningFromTimeSun) {
                this.setState({
                    // eveningToTimeMon: e,
                    eveningToTimeSunErr: ""
                })
                this.evening_from_time_sun(this.state.eveningFromTimeSun);
            } else {
                this.setState({
                    eveningToTimeSunErr: "Invalid Time"
                })
            }
            let obj = {
                morningFrom: this.state.morningFromTimeSun,
                morningTo: this.state.morningToTimeSun,
                eveningFrom: this.state.eveningFromTimeSun,
                eveningTo: this.state.eveningToTimeSun
            }
            this.props.weeks(obj, 6);
        })

    }


    render() {
        return (
            <div>

                <h4>Timings</h4>
                <div>
                    <Tabs>
                        <TabList className="profile-details">
                            <Tab>Monday</Tab>
                            <Tab>Tuesday</Tab>
                            <Tab>wednesday</Tab>
                            <Tab>Thursday</Tab>
                            <Tab>Friday</Tab>
                            <Tab>Saturday</Tab>
                            <Tab>Sunday</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="registration">

                                <div className="timing">
                                    <h5>Morning From</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Morning From"
                                        start="00:00" end="23:00" step={30}
                                        value={this.state.morningFromTimeMon}
                                        onChange={this.morning_from_time_mon}
                                    />
                                    <h5 className="error-message">{this.state.morningFromTimeMonErr}</h5>
                                </div>
                                <div className="timing">
                                    <h5>Morning To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Morning To"
                                        value={this.state.morningToTimeMon}
                                        onChange={this.morning_to_time_mon}
                                    />
                                    <span
                                        className="error-message">{this.state.morningToTimeMonErr}
                                    </span>
                                </div>

                                <div className="timing">
                                    <h5>Evening From</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening From"
                                        value={this.state.eveningFromTimeMon}
                                        onChange={this.evening_from_time_mon}
                                    />
                                    <h5 className="error-message">{this.state.eveningFromTimeMonErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening To"
                                        value={this.state.eveningToTimeMon}
                                        onChange={this.evening_to_time_mon}
                                    />
                                    <h5 className="error-message">{this.state.eveningToTimeMonErr}</h5>
                                </div>

                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className="registration">

                                <div className="timing">
                                    <h5>Morning From</h5>
                                    <TimePicker className="input-box"
                                        placeholder="Morning From"
                                        value={this.state.morningFromTimeTue}
                                        onChange={this.morning_from_time_tues}
                                    />

                                </div>
                                <div className="timing">
                                    <h5>Morning To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Morning To"
                                        value={this.state.morningToTimeTue}
                                        onChange={this.morning_to_time_tues}
                                    />
                                    <h5 className="error-message">{this.state.morningToTimeTueErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening From</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening From"
                                        value={this.state.eveningFromTimeTue}
                                        onChange={this.evening_from_time_tues}
                                    />
                                    <h5 className="error-message">{this.state.eveningFromTimeTueErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening To"
                                        value={this.state.eveningToTimeTue}
                                        onChange={this.evening_to_time_tues}
                                    />
                                    <h5 className="error-message">{this.state.eveningToTimeTueErr}</h5>
                                </div>

                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className="registration">

                                <div className="timing">
                                    <h5>Morning From</h5>
                                    <TimePicker className="input-box"
                                        placeholder="Morning From"
                                        value={this.state.morningFromTimeWed}
                                        onChange={this.morning_from_time_wed}
                                    />
                                </div>
                                <div className="timing">
                                    <h5>Morning To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Morning To"
                                        value={this.state.morningToTimeWed}
                                        onChange={this.morning_to_time_wed}
                                    />
                                    <h5 className="error-message">{this.state.morningToTimeWedErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening From</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening From"
                                        value={this.state.eveningFromTimeWed}
                                        onChange={this.evening_from_time_wed}
                                    />
                                    <h5 className="error-message">{this.state.eveningFromTimeWedErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening To"
                                        value={this.state.eveningToTimeWed}
                                        onChange={this.evening_to_time_wed}
                                    />
                                    <h5 className="error-message">{this.state.eveningToTimeWedErr}</h5>
                                </div>

                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className="registration">

                                <div className="timing">
                                    <h5>Morning From</h5>
                                    <TimePicker className="input-box"
                                        placeholder="Morning From"
                                        value={this.state.morningFromTimeThu}
                                        onChange={this.morning_from_time_thurs}
                                    />
                                </div>
                                <div className="timing">
                                    <h5>Morning To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Morning To"
                                        value={this.state.morningToTimeThu}
                                        onChange={this.morning_to_time_thurs}
                                    />
                                    <h5 className="error-message">{this.state.morningToTimeThuErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening From</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening From"
                                        value={this.state.eveningFromTimeThu}
                                        onChange={this.evening_from_time_thurs}
                                    />
                                    <h5 className="error-message">{this.state.eveningFromTimeThuErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening To"
                                        value={this.state.eveningToTimeThu}
                                        onChange={this.evening_to_time_thurs}
                                    />
                                    <h5 className="error-message">{this.state.eveningToTimeThuErr}</h5>
                                </div>

                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className="registration">

                                <div className="timing">
                                    <h5>Morning From</h5>
                                    <TimePicker className="input-box"
                                        placeholder="Morning From"
                                        value={this.state.morningFromTimeFri}
                                        onChange={this.morning_from_time_fri}
                                    />
                                </div>
                                <div className="timing">
                                    <h5>Morning To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Morning To"
                                        value={this.state.morningToTimeFri}
                                        onChange={this.morning_to_time_fri}
                                    />
                                    <h5 className="error-message">{this.state.morningToTimeFriErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening From</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening From"
                                        value={this.state.eveningFromTimeFri}
                                        onChange={this.evening_from_time_fri}
                                    />
                                    <h5 className="error-message">{this.state.eveningFromTimeFriErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening To"
                                        value={this.state.eveningToTimeFri}
                                        onChange={this.evening_to_time_fri}
                                    />
                                    <h5 className="error-message">{this.state.eveningToTimeFriErr}</h5>
                                </div>

                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className="registration">

                                <div className="timing">
                                    <h5>Morning From</h5>
                                    <TimePicker className="input-box"
                                        placeholder="Morning From"
                                        value={this.state.morningFromTimeSat}
                                        onChange={this.morning_from_time_sat}
                                    />
                                </div>
                                <div className="timing">
                                    <h5>Morning To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Morning To"
                                        value={this.state.morningToTimeSat}
                                        onChange={this.morning_to_time_sat}
                                    />
                                    <h5 className="error-message">{this.state.morningFromTimeSatErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening From</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening From"
                                        value={this.state.eveningFromTimeSat}
                                        onChange={this.evening_from_time_sat}
                                    />
                                    <h5 className="error-message">{this.state.eveningFromTimeSatErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening To"
                                        value={this.state.eveningToTimeSat}
                                        onChange={this.evening_to_time_sat}
                                    />
                                    <h5 className="error-message">{this.state.eveningToTimeSatErr}</h5>
                                </div>

                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className="registration">

                                <div className="timing">
                                    <h5>Morning From</h5>
                                    <TimePicker className="input-box"
                                        placeholder="Morning From"
                                        value={this.state.morningFromTimeSun}
                                        onChange={this.morning_from_time_sun}
                                    />
                                </div>
                                <div className="timing">
                                    <h5>Morning To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Morning To"
                                        value={this.state.morningToTimeSun}
                                        onChange={this.morning_to_time_sun}
                                    />
                                    <h5 className="error-message">{this.state.morningToTimeSunErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening From</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening From"
                                        value={this.state.eveningFromTimeSun}
                                        onChange={this.evening_from_time_sun}
                                    />
                                    <h5 className="error-message">{this.state.eveningFromTimeSunErr}</h5>
                                </div>

                                <div className="timing">
                                    <h5>Evening To</h5>
                                    <TimePicker
                                        className="input-box"
                                        placeholder="Evening To"
                                        value={this.state.eveningToTimeSun}
                                        onChange={this.evening_to_time_sun}
                                    />
                                    <h5 className="error-message">{this.state.eveningToTimeSunErr}</h5>
                                </div>

                            </div>

                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        );
    }
}

export default Timing;