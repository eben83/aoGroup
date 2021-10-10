import React from "react";

const DisplayData = ({id, name, email, mobile}) => {
    return (
        <>
            {id}
            
            <p>Your name is:</p>
            <h5>{name}</h5>

            <p>Your email address is:</p>
            <h5>{email}</h5>

            <p>Your mobile number is:</p>
            <h5>{mobile}</h5>
        </>
    )
}

export default DisplayData