import React, { useState, useEffect, useRef } from 'react';
import { View, PermissionsAndroid, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import * as Location from "expo-location"
import * as Permissions from "expo-permissions"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from "../../../config/index.json"
import MapViewDirections from "react-native-maps-directions"


export default function Home() {
  const mapEl=useRef(null)
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [distance, setDistance] = useState(null)
  const [price, setPrice] = useState(null)

  useEffect(() => {
    (async function () {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status === 'granted') {
        let location = await
          Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setOrigin({
          latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.00922, longitudeDelta: 0.00421,
        })
      } else {
        throw new Error('Não foi permitida a localização')
      }
    })();
  }, [])

  return (
    <View style={{ flex: 1 }}>

      <MapView
        style={{ width: 300, height: 300 }}
        initialRegion={origin}
        showsUserLocation={true}
        ref={mapEl}
      >
        {destination && 
          <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={config.googleApi}
          strokeWidth={3}
          onReady={result=>{
            setDistance(result.distance);
            setPrice(result.distance * 3);
          }}
        ></MapViewDirections>}
        

      </MapView>
      <View>
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421
            })
            console.log(destination)
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          fetchDetails={true}
          styles={{listView:{position:'absolute', top:40, borderLeftWidth:1, borderRightWidth:1, borderBottomWidth:1 ,height:100, width:100}}}
        />

       
          {distance&&
           <View>
              <Text>Distancia:{distance}m</Text>
              <Text>Preco: {price}</Text>
            </View>
          }
        
      </View>

    </View>
  );
}