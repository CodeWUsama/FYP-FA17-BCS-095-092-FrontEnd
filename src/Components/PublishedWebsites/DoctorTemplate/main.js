import React from 'react';
import Navbar from "./Navbar/Navbar"

const Main = (props) => {
    return (
        <div>
            {props.published ? null :
                <div style={{ height: 100 }}></div>
            }
            <Navbar published={props.published} />
        </div>
    );
}

export default Main;