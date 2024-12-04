import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <div className="video-container">
      <div className="video-section">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=0r2POnwWKYTl4mYf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="info-section">
        <div className="info-title">
          <span className="buyer">Buyer</span>
          <span className="supplier">Supplier</span>
        </div>
        <ul className="info-list">
          <li>✅ Post your requirements.</li>
          <li>✅ Sit back for multiple suppliers to contact you.</li>
          <li>
            ✅ Choose among the suppliers based on the ratings and reviews.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoSection;
