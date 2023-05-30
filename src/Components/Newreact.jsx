import React, { useState } from 'react';

function Newreact(props){
    const [title, setTitle]=useState("React State");
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}
export default Newreact;