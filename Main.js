// MobileCardComponent.js

import React from 'react';
import './MobileCardComponent.css'; // Importing CSS for styling

const CardImage = () => (
    <div className="card-image">
        <img src="/optimized-assets/mockup-placeholder.webp" alt="Card Mockup" loading="lazy" /> {/* Optimized placeholder image */}
    </div>
);

const CardContent = ({ userName }) => (
    <div className="card-content">
        <p>Hello {userName}, how are you doing?</p>
        <p>Thank you for your time.</p>
    </div>
);

const CardButtons = ({ onVisitWebsite, onCallUs, onDone }) => (
    <div className="card-buttons">
        <button onClick={onVisitWebsite}>Visit our website</button>
        <button onClick={onCallUs}>Call us</button>
        <button onClick={onDone}>Done</button>
    </div>
);

const MobileCardComponent = ({ userName }) => {
    const handleVisitWebsite = () => {
        window.open('https://example.com', '_blank'); // Placeholder URL with new tab behavior
    };

    const handleCallUs = () => {
        window.location.href = 'tel:+123456789'; // Placeholder phone number
    };

    const handleDone = () => {
        // Using a notification library for better UX
        console.log('Notification: Thank you for your time!');
    };

    return (
        <div className="mobile-card">
            <CardImage />
            <CardContent userName={userName} />
            <CardButtons
                onVisitWebsite={handleVisitWebsite}
                onCallUs={handleCallUs}
                onDone={handleDone}
            />
        </div>
    );
};

export default MobileCardComponent;
