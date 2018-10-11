import { withFormsy } from 'formsy-react';
import React from 'react';

class InputValidation extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {

        this.props.setValue(event.currentTarget.value);
    }

    render() {

        const errorMessage = this.props.getErrorMessage();

        return (
            <div>
                <input
                    className="input-box"
                    onChange={this.changeValue}
                    type="text"
                    placeholder="Email Id"
                    value={this.props.getValue() || ''}
                />
                <span>{errorMessage}</span>
            </div>
        );
    }
}

export default withFormsy(InputValidation);