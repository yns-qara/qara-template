import React, { useState } from 'react';
import '../../styles/navigation/Navigation.css';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../../svg/Logo';
// import ContactUsModal from './modals/ContactUsModal';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };


    return (
        <>
            <section>
                <nav className="nav-bar">
                    <div className="logo-nav">
                        <Logo />
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                    </div>
                    <ul className="nav-links desktop-only">
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Clients</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                    <button onClick={handleOpenModal} data-hover="Send!" className="contact-button desktop-only hover-btn">Contact Us</button>
                    {isMenuOpen && (
                        <div className="mobile-menu">
                            <ul className="mobile-menu-links">
                                <li onClick={toggleMenu}><a href="#">Solutions</a></li>
                                <li onClick={toggleMenu}><a href="#">Clients</a></li>
                                <li onClick={toggleMenu}><a href="#">About us</a></li>
                                <li onClick={toggleMenu}><a href="#">Events</a></li>
                                <li  onClick={handleOpenModal}><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    )}
                </nav>
            </section>

            {/* Contact Us Modal */}
            {/* <ContactUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
        </>
    );
};

export default Navigation;
