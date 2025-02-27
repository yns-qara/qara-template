import React from 'react'
import '../../styles/footer/Footer.css'
import { footer } from 'framer-motion/client'
const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <div class="footer-logo">
                    <img src="/robot.ico" alt="Logo" />
                    <p>OurStudio is a digital agency specializing in UI/UX Design and Website Development.</p>
                    <p class="copyright">&copy; 2024 Satyam Studio. All rights reserved.</p>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: hello@ourstudio.com</li>
                        <li>Phone: +1 234 567 890</li>
                        <li>Location: Ohio, USA</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer