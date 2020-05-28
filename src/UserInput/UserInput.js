import React from 'react';

const UserInput = (props) => {
    const inputStyles = {
        marginTop: '16px',
        marginBottom: '32px',
    };

    return (
        <div>
            <input
                type="text"
                onChange={props.onChange}
                value={props.username}
                style={inputStyles}
            />
        </div>
    );
};

export default UserInput;
