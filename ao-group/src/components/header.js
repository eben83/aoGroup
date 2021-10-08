import React from 'react'

const Header = () => {
    return (
        <>
            {/* Header with full-height image */}
            <header className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
                <div class="w3-display-left w3-text-white" style={{padding:"48px"}}>
                <span class="w3-jumbo w3-hide-small">Start something that matters</span>
                <span class="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span>
                <span class="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
                <p>
                    <a href="#about" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">
                        Learn more and start today
                    </a>
                </p>
                </div> 

                <div class="w3-display-bottomleft w3-text-grey w3-large" style={{padding:'24px 48px'}}>
                    <i class="fa fa-facebook-official w3-hover-opacity"></i>
                    <i class="fa fa-instagram w3-hover-opacity"></i>
                    <i class="fa fa-snapchat w3-hover-opacity"></i>
                    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i class="fa fa-twitter w3-hover-opacity"></i>
                    <i class="fa fa-linkedin w3-hover-opacity"></i>
                </div>
            </header>

        </>
    )
}

export default Header