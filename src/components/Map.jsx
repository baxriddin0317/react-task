import React from "react";

const Map = () => {
  return (
    <div className="w-2/5">
      <div className="rounded-30 overflow-hidden">
        <iframe
          className="w-full h-52 md:h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773449.0428205093!2d72.32835650000001!3d40.777741049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc939c2cc9f571%3A0xf677ebc7b76654c8!2sAndijon%20Viloyati%2C%20O%60zbekiston!5e0!3m2!1suz!2sus!4v1663048507618!5m2!1suz!2sus"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

// import { React, useMemo } from "react";

// import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

// const Map = () => {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "MY API KEY IS HERE",
//   });

//   const center = useMemo(() => ({ lat: -30.292038, lng: 153.118896 }), []);

//   const onLoad = (marker) => {
//     console.log("marker: ", marker);
//   };


//   const options = {
//     mapTypeControl: false,
//     streetViewControl: false,
//     fullscreenControl: false,
//   };

//   if (!isLoaded) return <div>Loading...</div>;
//   return (
//     <div className="w-2/5">
//       <div className="rounded-30 overflow-hidden">
//       <GoogleMap zoom={15} options={options} center={center} mapContainerClassName="map-container">
//         <MarkerF onLoad={onLoad} position={center} />
//       </GoogleMap>
//       </div>
//     </div>
//   );
// };

// export default Map;

