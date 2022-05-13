import React from 'react';
import loading from '../../assets/images/loading.gif';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img src={loading} alt="loading" />
        </div>
    );
};

export default Loading;