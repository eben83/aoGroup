import React, {} from 'react'

const Nav = () => {

     // Toggle between showing and hiding the sidebar when clicking the menu icon
     const mySidebar = document.getElementById("mySidebar");
  
        function w3_open() {
            if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
            } else {
            mySidebar.style.display = 'block';
            }
        }
        
        // Close the sidebar with the close button
        function w3_close() {
            mySidebar.style.display = "invisible";
        }

        // const [isOpen, setIsOpen] = useState(false)
        // const toggle = () => {
        //     setIsOpen(!isOpen)
        // }

    return (
        <>
            {/* Navbar (sit on top) */}
            <div className="w3-top">
            <div className="w3-bar w3-white w3-card" id="myNavbar">
                <a href="/" className="w3-bar-item w3-button w3-wide">LOGO</a>
                {/* Right-sided navbar links */}
                <div className="w3-right w3-hide-small">
                <a href="/work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> WORK</a>
                <a href="/contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>
                </div>


                {/* Hide right-floated links on small screens and replace them with a menu icon */}

                <a href="#" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={w3_open ? w3_close : w3_open}>
                <i className="fa fa-bars"></i>
                </a>
            </div>
            </div>

            {/* Sidebar on small screens when clicking the menu icon */}
            {/* <nav className="w3-sidebar w3-width w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"  id="mySidebar">
            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-large w3-padding-16" onClick={toggle}>Close ×</a>
            <a href="#about" onClick={() => w3_close} className="w3-bar-item w3-button">ABOUT</a>
            <a href="#team" onClick={() => w3_close} className="w3-bar-item w3-button">TEAM</a>
            <a href="#work" onClick={() => w3_close} className="w3-bar-item w3-button">WORK</a>
            <a href="#pricing" onClick={() => w3_close} className="w3-bar-item w3-button">PRICING</a>
            <a href="#contact" onClick={() => w3_close} className="w3-bar-item w3-button">CONTACT</a>
            </nav> */}
        </>
    )
}

export default Nav