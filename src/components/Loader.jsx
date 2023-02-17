import React from 'react';

const Loader = ({isLoading}) => {
    if(!isLoading) return null;
    return (
        <div id='loader' className='d-flex justify-content-center align-items-center flex-column' >
            <img src='https://react-pdf.org/images/logo.png' alt='img for loader' className='mb-5 App-logo'></img>
            <p>Loading pdf ...</p>
        </div>
    );
}

export default Loader;
