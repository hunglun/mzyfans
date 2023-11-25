// LocationTimeline.js
import React from 'react';
import './LocationTimeline.css';
const LocationTimeline = ({ locations }) => {
  return (
    <div className="timeline">
      {locations.map((location, index) => (
        <div key={index} className="timeline-item">
          <strong>{location.name}</strong>
          <br />
          {location.date}
        </div>
      ))}
    </div>
  );
};

export default LocationTimeline;
