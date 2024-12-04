import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header-left">
                    <img
                        src='./images/habot-logo.jpg'
                        alt="Logo"
                        className="header-logo"
                    />
                </div>

                <div className="header-center">
                    <nav>
                        <ul>
                            <li><a href="#suppliers">Find Suppliers</a></li>
                            <li><a href="#services">Find Service Tags <img src='./images/down.png' alt="Feedback Icon" /></a></li>
                        </ul>
                    </nav>
                </div>

                <div className="header-right">
                    <button className="signup-btn">Login / Sign Up</button>
                </div>
            </header>

        </div>
    );
};

export default Header;
