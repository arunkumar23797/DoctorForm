import React, { Component } from 'react';

import PersonalDetails from './components/PersonalDetails';
import ClinicDetails from './components/ClinicDetails';
import Timing from './components/Timing';
import ClinicInformation from './components/ClinicInformation';
import DegreeInfo from './components/DegreeInfo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      DoB: ''
    }
  }

  dob = (data) => {
    this.setState({
      DoB: data
    })
  }

  render() {
    return (
      <div className="clinic-border">
        <h2>Setup your profile</h2>
        <hr style={{ height: '5px', backgroundColor: '#40B12A', borderRadius: '50px', outline: 'none' }} />
        <PersonalDetails dob={this.dob}/>
        <hr />
        <ClinicDetails />
        
        <hr />
        <h3>Qualification Details</h3>
        <ClinicInformation />
        <div>
          <DegreeInfo />
        </div>
        <button className="button button-position">Save Details</button>
      </div>
    );
  }
}

export default App;
