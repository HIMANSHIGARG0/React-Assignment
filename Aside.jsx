import React from 'react';

function Aside(){
    return(
    <>
       <div className = "flex-box-col aside">
            <div className = "aside-logo">
                <span className = "aside-text">Your Searches</span>
            </div>

            <div className = "aside-button"> + Start a new search </div>
            
            <div className = "aside-div"> 
                <span> Software Developers </span>
                <span> from </span>
                <span> facebook </span>
            </div>
       </div>
    </>
    );
}
export default Aside;