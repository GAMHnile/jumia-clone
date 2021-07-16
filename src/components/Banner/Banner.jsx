import React from 'react';
import propTypes from 'prop-types';
//stylesheet imports
import './Banner.scss';
import Paper from '../Paper/Paper';

const Banner = ({className}) => {
    return ( <Paper className={`banner ${className? className : ""}`}> 
    
    </Paper>  );
}

Banner.propTypes = {
    className: propTypes.string
}
export default Banner;