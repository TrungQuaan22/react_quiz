import React, { useState } from "react";

const  DisplayInfo  = (props) => {
        const {listUsers} = props;
        const [show, setShow] = useState(true);
       return ( 
           <div className="wrapper">
            <div>
                <button onClick={() => setShow(!show)}>
                    {show ? 'Hide list users !': 'Show list Users'} </button>
            </div>
            { show &&
            <div>
            {listUsers.map((user) => {
                return (
                    <div style={{marginTop: '10px', padding: '10px'}} key={user.id}>
                        <div>My name's {user.name}</div>
                        <div>My age's {user.age}</div>
                        <button onClick={() => props.handleDelete(user.id)}>Delete</button>
                        <hr />
                    </div>
                )
            })}
            </div> }
           </div>
        );
}


export default DisplayInfo;