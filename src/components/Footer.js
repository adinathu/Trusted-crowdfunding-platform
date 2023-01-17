import React from 'react'
import beahope from '../assets/beahope.png'


export default function Footer() {
    return (
        <div className="footer-data">
            <div className="quick-links">
                <ul>
                    <li className='link-title'>Company</li>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#donate">
                            Donate
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="company-profile">
                <div className="company-logo">
                    <img src={beahope} alt="" width={150}/>
                    <div className="company-name">Be A Hope</div>
                </div>
                {/* <div className="company-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae id, commodi veniam nulla dolor!
                </div> */}
            </div>
            <div className="social-links">
                <ul>
                    <li className='link-title'>Social Media</li>
                    <li>
                        
                        <a href="#"><i class="fa-brands fa-facebook-f"></i>Facebook</a>
                    </li>
                    <li>
                       
                        <a href="#"> <i class="fa-brands fa-instagram"></i>Instagram</a>
                    </li>
                    <li>
                        
                        <a href="#"><i class="fa-brands fa-twitter"></i>Twitter</a>
                    </li>
                    <li>
                        
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i>Linkedin</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

