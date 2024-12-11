import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2c3e50', padding: '30px 20px', textAlign: 'center', color: '#ecf0f1', fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>
            <div style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
                <p>Recipe Haven - Where flavors meet creativity</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#ecf0f1', textDecoration: 'none' }}>
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#ecf0f1', textDecoration: 'none' }}>
                    <FaInstagram />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#ecf0f1', textDecoration: 'none' }}>
                    <FaTwitter />
                </a>
                <a href="https://www.linkedln.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#ecf0f1', textDecoration: 'none' }}>
                    <FaLinkedin />
                </a>
            </div>

            <div style={{ fontSize: '14px', color: '#bdc3c7' }}>
                <p>&copy; 2024 Recipe Haven. Crafted with love and passion for food enthusiasts.</p>
            </div>
        </footer>
    );
};

export default Footer;
