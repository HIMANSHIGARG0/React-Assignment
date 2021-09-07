import React from "react";
import { FaAngleDown } from 'react-icons/fa';

function MainBody(props){
    return(
        <>
        <div className = "main-header main-body-row flex-box">
            <span className = "main-body-row-name">{props.name}</span>
            <span className = "main-body-row-company">{props.company} </span>
            <span className = "main-body-row-headline">Software Engineer at {props.headline}</span>
            <span className = "main-body-row-experience">{props.experience} </span>
            <div className = "row-outreach">
                <span> Send email<FaAngleDown/></span>
            </div>
        </div>
        </>
    );
}
export default MainBody;