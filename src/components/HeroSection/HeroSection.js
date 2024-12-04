import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div>

            <div className="banner">
                <h2 className="banner-text">Are You a Supplier? </h2>
                <h2 className="banner-textsecond">Explore Matching Opportunities</h2>
                <div className="search-container">

                    <input
                        type="text"
                        placeholder="Search your required service here"
                        className="search-input1"
                    />

                    <input
                        type="text"
                        placeholder="Search your desired location here"
                        className="search-input2"
                    />
                    <button className="search-btn">Search</button>                   
                </div>
                <p className="buyer-text">
                    <strong>Are you a buyer? </strong><a href="/post-requirement">Click here if you are looking to post a requirement.</a>
                </p>
            </div>

        </div>
    );
};

export default HeroSection;
