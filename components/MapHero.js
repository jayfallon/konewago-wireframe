import styled from "styled-components";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const MapHeroStyles = styled.section`
  /* background-image: url(/images/konewago-map.png); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 600px;
  width: 100%;
  height: 600px;
`;

function Map() {
  return (
    <GoogleMap
      defaultCenter={{ lat: 44.177346, lng: -70.716235 }}
      defaultZoom={16}
    />
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapHero() {
  return (
    <MapHeroStyles>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </MapHeroStyles>
  );
}
