import React from 'react';
import './Place.css';

const Place = () => {
 const handleLocationClick = () => {
   const address = "שכונת גלי-ים נתניה";
   const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`;
   window.open(wazeUrl, '_blank');
 };

 return (
   <div className="place-container">
     <div className="place-content" onClick={handleLocationClick}>
       <div className="location-icon">
         <svg 
           width="24" 
           height="24" 
           viewBox="0 0 24 24" 
           fill="none" 
           xmlns="http://www.w3.org/2000/svg"
         >
           <path 
             d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
             fill="black"
           />
         </svg>
       </div>
       <div className="location-text">
         <h3 className="location-title">Emplacement de la clinique</h3>
         <p className="location-address">Quartier Galei-Yam (zone Lagon) Netanya</p>
       </div>
     </div>
   </div>
 );
};

export default Place;