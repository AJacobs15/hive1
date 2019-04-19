import React from 'react';

var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

// example: https://github.com/FaridSafi/react-native-google-places-autocomplete

const Reynolds = {description: 'Reynolds Club', geometry: { location: { lat: 41.7911, lng: -87.5983 } }};
const Reg = {description: 'Regenstein', geometry: { location: { lat: 41.792210, lng: -87.599940 } }};
const Crerar = {description: 'Crerar Library', geometry: { location: { lat: 41.790456, lng: -87.602887 } }};

class AutoAddress extends React.Component {

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder='Address [required]'
        minLength={2} // minimum length of text to search
        autoFocus={false}

        fetchDetails={true}
        clearSearchs = {true}
        listViewDisplayed={false}

        onPress={(data, details) => { // 'details' is provided when fetchDetails = true
          
          var lat = details.geometry.location.lat;
          var long = details.geometry.location.lng;
          
          this.props.onSelectAddr(lat, long);
        }}

        getDefaultValue={() => {
          return ''; // text input default value
        }}

        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyCsrdh_dARR8_-XE90BCHBVvi42PpkSU1I',
          language: 'en', // language of the results
          types: 'geocode', // default: 'geocode'
          // radius: 8000,

        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}

        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Give current location suggestions"
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          // types: 'food',
        }}

        GooglePlacesDetailsQuery={{
          // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
          fields: 'geometry',
        }}

        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

        predefinedPlaces={[Reynolds, Crerar]}

        predefinedPlacesAlwaysVisible={true}
      />
    );
  }
}

module.exports = AutoAddress;
