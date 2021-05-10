import React, { useState, useEffect } from 'react';

const CheckLogin = () => {
    
    if(!(localStorage.getItem("token"))){
        window.location.href="/login";
    }

    return (
        <>
        </>
    );
}

export default CheckLogin;