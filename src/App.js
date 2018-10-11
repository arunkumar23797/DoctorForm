import React, { Component } from 'react';

import PersonalDetails from './components/PersonalDetails';
import ClinicDetails from './components/ClinicDetails';
import Timing from './components/Timing';
import Formsy from 'formsy-react';
import ClinicInformation from './components/ClinicInformation';
import DegreeInfo from './components/DegreeInfo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      DoB: '',
      canSubmit: false
    }
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    
  }

  dob = (data) => {
    this.setState({
      DoB: data
    })
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }
 
  enableButton() {
    console.log("enable button!!!");
    this.setState({ canSubmit: true });
  }
 
  submit(model) {
    
  }


  render() {
    return (
      <div className="clinic-border">
      <Formsy  onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <h2>Setup your profile</h2>
        <hr style={{ height: '5px', backgroundColor: '#40B12A', borderRadius: '50px', outline: 'none' }} />
        <PersonalDetails dob={this.dob}/>
        
      </Formsy>
        <hr />
        <ClinicDetails />
        
        <hr />
        <h3>Qualification Details</h3>
        <ClinicInformation />
        <div>
          <DegreeInfo />
        </div>
        
      
      </div>
    );
  }
}

export default App;
