import './footer.css';


const Footer = () => {
    return (
        <div className="footer">
                    <div className='sb_footer-below-links'>
                        <div className='ul-item'><a href='https://www.starbucks.com/terms/starbucks-terms-of-use/'>Terms & Conditions</a></div>
                        <div className='ul-item'><a href='https://www.starbucks.com/personal-information'>Security</a></div>
                        <div className='ul-item'><a href='https://www.starbucks.com/terms/privacy-policy/'>Privacy</a></div>
                        <div className='ul-item'><a href='https://www.starbucks.com/about-us/accessibility/'>Accessibility</a></div>
                    </div>
                    <div className='sb_footer-copyright'>
                            <p>
                            {new Date().getFullYear()} © L1tovkin. All rights reserved.
                            </p>
                    </div>
        </div>
    )
}

export default Footer;