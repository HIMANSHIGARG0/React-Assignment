import React from 'react';
import Aside from './Aside';
import Main from './Main';

function Body(){
    return(
    <>
    <div className = "body">
        <Aside></Aside>
        <Main></Main>   
 </div>
    </>
    );
}
export default Body;