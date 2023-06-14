// import React from 'react';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// const MapComponent = (props) => {
//   const { google, data } = props;

// console.log(data)

//   return (
//     <Map google={google} zoom={14}>
//       {data && data.map((e, index) => (
//         <Marker
//           key={index}
//           title={e.project}
//           position={{lat: e.latitude, lng: e.longitude }}
//         />
//       ))}
//     </Map>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCXvQILfwJRzzWx8HNpl-74IQMlcw5bcyQ',
// })(MapComponent);

// //AIzaSyCXvQILfwJRzzWx8HNpl-74IQMlcw5bcyQ

import React, { useEffect, useRef } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const MapComponent = (props) => {
  const { google, data } = props;
  const mapRef = useRef(null);

  useEffect(() => {
    if (data.length > 0 && mapRef.current) {

      const bounds = new google.maps.LatLngBounds();

      data.forEach((e) => {
        bounds.extend({ lat: e.latitude, lng: e.longitude  });
      });
      mapRef.current.map.fitBounds(bounds);
    }
  }, [google, data]);

  return (
    <Map google={google} zoom={14} ref={mapRef}>
      {data && data.map((e, index) => (
        <Marker
          key={index}
          title={e.title}
          position={{ lat: e.latitude, lng: e.longitude  }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCXvQILfwJRzzWx8HNpl-74IQMlcw5bcyQ',
})(MapComponent);