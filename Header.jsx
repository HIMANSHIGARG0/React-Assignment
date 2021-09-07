import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

function Header(){
    return(
    <>
       <div className = "flex-box header">
            <div className = "header-logo">
                <span className = "logo-name">Weekday</span>
                <div className = "green-div"></div>
                <div className = "yellow-dot"></div>
            </div>
            <div className = "header-button "> Schedule Call </div>
            <div className = "header-item">
                <span> <FaEnvelope/> All sent mails </span>
            </div>
            <div className = "header-item">
                <span> <FaEnvelope/> Replies </span>
            </div>
            <div className = "header-button signout-button"> Sign out </div>
       </div>
    </>
    );
}
export default Header;