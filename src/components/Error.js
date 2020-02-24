import React from 'react';
import PropTypes from 'prop-types';

const Error = ({message}) => {
    return ( <p className="error p-2 mt-3">{message}</p>
    )
}

Error.propTypes = {
    message:PropTypes.string.isRequired
}
export default Error;
