import React from 'react';
import MainHeader from './MainHeader';
import MainHeaderTwo from './MainHeaderTwo';
import MainHeaderThree from './MainHeaderThree';
import MainBody from './MainBody';
import candidateData from './CandidateDate';

function cdata(val){
    return(
            <MainBody
                 name = {val.name}
                 company = {val.company}
                 headline = {val.headline}
                 experience = {val.experience}
            /> 
    );
}
function Main(){
    return(
    <>
        <div className = "main">
             <MainHeader></MainHeader>
             <MainHeaderTwo/>
             <MainHeaderThree/>
             {  candidateData.map(cdata) }
       </div>
    </>
    );
}
export default Main;