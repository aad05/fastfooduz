import React, { useState } from 'react';
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
  Polygon,
} from '@react-google-maps/api';

const libraries = ['places'];
export const Katalog = ({ location }) => {
  const [place, setPlace] = useState(null);
  const [center, setCenter] = useState({ lat: 41.2995, lng: 69.2401 });

  const { REACT_APP_MAP_KEY: mapKey } = process.env;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapKey,
    id: 'fastfood',
    libraries,
  });
  const onPlaceChanged = (e) => {
    console.log(place?.getPlace());
    console.log(place?.getPlace()?.geometry?.location?.lat());
    console.log(place?.getPlace()?.geometry?.location?.lng());
    setCenter({
      lat: place?.getPlace()?.geometry?.location?.lat(),
      lng: place?.getPlace()?.geometry?.location?.lng(),
    });
  };

  const paths = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
    { lat: 24.774, lng: -80.19 },
    { lat: 23.774, lng: -80.19 },
  ];

  const options = {
    fillColor: 'lightblue',
    fillOpacity: 1,
    strokeColor: 'red',
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  const onLoad = (polygon) => {
    console.log('polygon: ', polygon);
  };
  return (
    <div>
      <Autocomplete onLoad={(e) => setPlace(e)} onPlaceChanged={onPlaceChanged}>
        <input type='text' />
      </Autocomplete>
      {isLoaded && (
        <GoogleMap
          id='fastfood'
          zoom={12}
          center={center}
          mapContainerStyle={{
            width: '1000px',
            height: '700px',
          }}
        >
          <Marker position={center} />
          <Polygon onLoad={onLoad} paths={paths} options={options} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Katalog;
