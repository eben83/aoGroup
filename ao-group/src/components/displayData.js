import React from "react";

const DisplayData = ({firstName, lastName, mobile}) => {
    return (
        <>
            <p>Your name is:</p>
            <h5>{firstName}</h5>

            <p>Your last name is:</p>
            <h5>{lastName}</h5>

            <p>Your mobile number is:</p>
            <h5>{mobile}</h5>
        </>
    )
}

export default DisplayData