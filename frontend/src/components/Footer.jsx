import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="col">
                <div className="logo-name">
                    <TwitterIcon />
                    <a href="/">eco gas system I pvt limited</a>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores vel quidem minima voluptatum deserunt explicabo unde sit officiis culpa atque.</p>
                <ul className="social-icon">
                    <li><a href=''><FacebookIcon /></a></li>
                    <li><a href=''><InstagramIcon /></a></li>
                    <li><a href=''><TwitterIcon /></a></li>
                    {/* <li><MailIcon /></li> */}
                </ul>
            </div>
            <div className="col col2">
                <h4>contact information</h4>
                <p>Phone: <a href="tel:1234567890">123 456 7890</a></p>
                <p>Mail: <a href="mailto:example@example.com">example@example.com</a></p>
                <p>Address: Bhandup, Mumbai 400078</p>
            </div>
        </div>
    )
}

export default Footer
