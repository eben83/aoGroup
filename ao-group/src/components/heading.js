import React from "react";

const Heading = ({title, text}) => {
    return (
        <>
            <div className="w3-container" style={{padding:"100px 16px"}} id="contact">
                <h3 className="w3-center">{title}</h3>
                <p className="w3-center w3-large">{text}</p>
            </div>
        </>
    )
}

export default Heading