import React from 'react';
import Loader from 'react-loader-spinner';
import './theLoader.css';


const TheLoader = (props) => {
    return (
        <>
        { props.show? 
            <div className="loader-container">
                <div className="loader">
                    <Loader
                        type="Puff"
                        color="#000"
                        height={100}
                        width={100}
                    />
                </div>
            </div>: <></>
        }
        </>
    );
};

export default TheLoader;