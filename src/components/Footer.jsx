import React from 'react';
import Logo from "../assets/food-logo.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-around">
                    {/* Logo Section */}
                    <div className="mb-6 md:mb-0">
                        <img src={Logo} alt="Restaurant Logo" className="h-12" />
                        <p className="mt-2 text-gray-400">"Savor the Flavor!"</p>
                    </div>
                    {/* Contact Information */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p className="mt-2">1234 Restaurant St.</p>
                        <p>Food City, FA 12345</p>
                        <p className="mt-2">Phone: (123) 456-7890</p>
                        <p>Email: <a href="mailto:info@restaurant.com" className="text-blue-400">info@restaurant.com</a></p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-yelp"></i>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Menu</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Reservations</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm text-gray-400">© 2024 Your Restaurant. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
