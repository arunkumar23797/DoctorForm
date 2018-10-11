import Popup from 'reactjs-popup';
import React from 'react';

class clinicDetailsFunction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    openModal = () => {
        console.log("Clinics size ", this.props.clinicDetails.length);
        if (this.props.clinicDetails.length === 0)
            alert("No Clinics");
        if (this.props.clinicDetails.length !== 0) {
            this.setState({ open: true });
        }
        //document.body.style.overflow = 'scroll';
    };
    closeModal = () => {
        this.setState({ open: false });
        //document.body.style.overflow = 'hidden';
    };

    render() {
        const clinics = this.props.clinicDetails;
        const time = this.props.weekDays;
        const days = this.props.selectedDays;
        
        return (
            <div>
                <button onClick={this.openModal}>Open</button>
                <Popup
                    className="popup-scroll"
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}>
                    <div>
                        <a className="close" onClick={this.closeModal}>
                            &times;
                        </a>

                        {
                            clinics.map((data, index) => {
                                //console.log("special ", data.SelectedOption);
                                return (
                                    <div className="clinic-border" key={index}>
                                        <div className="profile-details">
                                            <h4 className="clinic-popup">{data.ClinicName}</h4>
                                            <button className="button-circle-add-clinic" style={{ marginLeft: "60%" }}>-</button>
                                        </div>
                                        <hr style={{ marginTop: "2px", marginBottom: "2px" }} />
                                        <div className="search div-space">
                                            <h4>Email Id: </h4>
                                            <p className="clinic-popup">{data.EmailId}</p>
                                        </div>
                                        <div className="search div-space">
                                            <h4>PhoneNumber: </h4>
                                            <p className="clinic-popup">{data.PhoneNumber}</p>
                                        </div>
                                        <div className="search div-space">
                                            <h4>Address: </h4>
                                            <p className="word-break clinic-popup">{data.Address}</p>
                                        </div>
                                        <div className="search div-space">
                                            <h4>City: </h4>
                                            <p className="clinic-popup">{data.City}</p>
                                        </div>

                                        <div className="search div-space">
                                            <h4>Specializations: </h4>
                                            <div className="search">
                                                {
                                                    data.SelectedOption.map((opt, i) => {
                                                        return (
                                                            <div style={{ marginTop: '5px', marginLeft: '5px' }}>
                                                                <p key={i}>{opt.value}</p> <p> </p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="search div-space">
                                            {
                                                days.map((data1,index) => {
                                                        
                                                        return (
                                                            <div key={index}>
                                                            {
                                                                data1 && 
                                                                <p>{time[index].morningFrom}</p>
                                                            }
                                                            </div>
                                                            
                                                        )
                                                    
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }
                        
                    </div>
                </Popup>
            </div>
        );
    }
}

export default clinicDetailsFunction;