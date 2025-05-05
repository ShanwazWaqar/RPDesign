// src/components/GoogleMap.js
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.1743456447177!2d-83.38115602401444!3d33.95539157292253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66ce334b7da79%3A0xd8890d8ae791f16!2sTerry%20College%20of%20Business%2C%20Athens%2C%20GA%2030602!5e0!3m2!1sen!2sus!4v1715126158778!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map showing RP Design Technologies location near UGA Terry College of Business"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default GoogleMap;