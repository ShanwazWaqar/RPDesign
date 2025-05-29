// src/components/GoogleMap.js
import React from 'react';

const GoogleMap = () => {
  // The encoded address for 1670 Terrapin Ct, Watkinsville, GA 30677
  const encodedAddress = "1670+Terrapin+Ct,+Watkinsville,+GA+30677";
  
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.0545875118456!2d-83.40824342381232!3d33.83874427322755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66f2dfb82c3b1%3A0x7ac0fa42ae08d30f!2s1670%20Terrapin%20Ct%2C%20Watkinsville%2C%20GA%2030677!5e0!3m2!1sen!2sus!4v1715142278643!5m2!1sen!2sus`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map showing RP Design Technologies location at 1670 Terrapin Ct, Watkinsville, GA 30677"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default GoogleMap;