import React from 'react';
import Footer from '../Footer/Footer';
import image403 from "./403.jpg";

const Unauth = () => {
    return (
        <>
            <div style={{ display: 'flex', height: "100vh", justifyContent: "center", alignItems: "center" }}>
                <img src={image403} />
            </div>
            <Footer />
        </>
    );
}

export default Unauth;