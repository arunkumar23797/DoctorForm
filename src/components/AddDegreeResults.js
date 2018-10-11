import React from 'react';
import { Button } from 'reactstrap';
import { FilePicker } from 'react-file-picker';
import YearPicker from 'react-year-picker';

class AddDegreeResults extends React.Component {
    constructor(props) {
        super(props);
    }

    addItem = () => {
        this.props.increaseDegreeResultCount("");
    }

    removeItem = () => {
        this.props.removeDegreeResultsCount(this.props.id);
    }

    render() {

        return (
            <div>
                <div className="registration">
                    <div className="div-id">
                        <input
                            className="input-box"
                            value={this.props.degree_name_each}
                            onChange={this.props.degree_name}
                            placeholder="Degree name" />
                    </div>
                    <div className="div-id">
                        <YearPicker
                            className="year-input"
                            value={this.props.degree_year_each}
                            onChange={this.props.degree_year}
                            placeholder="Degree year" />
                    </div>

                    <div className="div-id">
                        <input
                            className="input-box"
                            value={this.props.degree_producer_each}
                            onChange={this.props.degree_producer}
                            placeholder="College name" />
                    </div>
                    <div className="div-id">
                        <FilePicker
                            extensions={['md']}
                            onChange={FileObject => ("")}
                            onError={errMsg => ("file Error")}>
                            <Button className="btn upload-button">Upload</Button>
                        </FilePicker>
                    </div>
                    <div>
                        <button className="button-circle" onClick={this.addItem}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddDegreeResults;