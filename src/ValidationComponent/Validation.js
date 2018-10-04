import React from 'react';


const Validation = (props) => {
    let validationMessage = 'You\'re Good!';

    if (props.inputLength <= 5) {
        validationMessage = 'Type more stuff!';
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default Validation;