import React from 'react';
// import CharComponent from './../CharComponent/CharComponent';

const ValidationComponent = (props) => {
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

export default ValidationComponent;