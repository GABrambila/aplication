import React, { useState, useEffect, useRef } from 'react';
import { View, PermissionsAndroid, Text, TouchableOpacity } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import * as Location from "expo-location"
import * as Permissions from "expo-permissions"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from "../../../config/index.json"
import MapViewDirections from "react-native-maps-directions"
import styles from './styles';


export default function Home() {

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
        style={{ width: '100%', height: 300 }}
        initialRegion={origin}
        showsUserLocation={true}
  
      >
        {destination &&
          <MapViewDirections
            
            origin={origin}
            destination={destination}
            apikey={config.googleApi}
            strokeWidth={3}
            onReady={result => {
            
              setDistance(result.distance.toFixed(2).replace('.', ','));
              setPrice(result.distance.toFixed(2) * 4);

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
            console.log([destination])
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          fetchDetails={true}
          styles={{ listView: { borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 }, container: { position: 'absolute', width: '100%' } }}
        />




      </View>

      {distance &&
        <View style={styles.containerPrice}>
          <Text style={styles.distanceTxt}>Distancia:{distance}km</Text>
          <TouchableOpacity style={styles.priceBtn}>
            <Text style={styles.priceTxt}>Preco:R$ {price}</Text>
          </TouchableOpacity>
        </View>
      }

    </View>
  );
}