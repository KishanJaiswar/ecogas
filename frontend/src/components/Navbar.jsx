import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="cardAndLogo">
                <h1 className='logo'>logo</h1>
                <div className="cards">
                    <div className='nav-card'>
                        <div className='border'>
                            <CallIcon className='icon' />
                        </div>
                        <div className='nav-content'>
                            <a href="tel:8591599177">8591599177</a>
                            <p>Phone Number</p>
                        </div>
                    </div>
                    <div className='nav-card'>
                        <div className='border'>
                            <MailIcon className='icon' />
                        </div>
                        <div className='nav-content'>
                            <a href="mailto:ecogassystemindiapvtltd.com">ecogassystemindiapvtltd.com</a>
                            <p>Email address</p>
                        </div>
                    </div>
                    <div className='nav-card none'>
                        <div className='border'>
                            <LocationOnIcon className='icon' />
                        </div>
                        <div className='nav-content'>
                            <h3 style={{ fontSize: '16px' }}>Bhandup, Mumbai</h3>
                            <p>Office Location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
