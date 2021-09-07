import React from 'react';


function MainHeader(){
    return(
        <>
        <div className = "main-header main-header-one items-center flex-box">
            <div className = "header-title">
                <span> Title </span>
                <span> Software Developers </span>
            </div>
            <div className = "main-header-experience">
                <span> Experience </span>
                <span> Less than 10 years </span>
            </div>
            <div className = "main-header-companies">
                <span> Companies </span>
                <span> facebook </span>
            </div>
        </div>
        </>
    );
}
export default MainHeader;
