import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.731456167595!2d104.92218731526316!3d11.571098991785275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951467e7bfdcd%3A0xb7c0380dca3bdabb!2sNational%20Bank%20of%20Cambodia%20-%20Headquarters!5e0!3m2!1sen!2skh!4v1656297947894!5m2!1sen!2skh" 
                width="100%" 
                height="500px" 
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;