'use client';
import { useEffect, useState } from 'react';
import { setDefaults, fromAddress } from 'react-geocode';
import Spinner from './Spinner';
import Map, { Marker } from 'react-map-gl';
import { setDefaults, fromAddress } from 'react-geocode';
import Image from 'next/image';
import pin from '@/assets/images/pin.svg';

export default function PropertyMap({ property }) {
  // set latitude state
  const [lat, setLat] = useState(null);
  // set longitude state
  const [lng, setLng] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: '100%',
    height: '500px'
  });
  const [loading, setLoading] = useState(true);
  const [geocodeError, setGeocodeError] = useState(false);

  setDefaults({
    key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY,
    language: 'en',
    region: 'us'
  });
  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const response = await fromAddress(
          `${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`
        );

        // Check for results
        if (response.results.length === 0) {
          // No results
          setGeocodeError(true);
          setLoading(false);
          return;
        }

        const { lat, lng } = response.results[0].geometry.location;

        setLat(lat);
        setLng(lng);
        setViewport({
          ...viewport,
          latitude: lat,
          longitude: lng
        });

        setLoading(false);
      } catch (error) {
        console.error(error);
        setGeocodeError(true);
        setLoading(false);
      }
    };
    fetchCoords();
  }, []);

  if (loading) return <Spinner loading={loading} />;

  // Handle case where geocoding failed
  if (geocodeError) {
    return <div className='text-xl'>No location data found</div>;
  }
  return (
    !loading && (
      <Map
        mapboxAcresToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mabLib={import('mapbox-gl')}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 15
        }}
        style={{ width: '100%', height: 500 }}
        mapStyle='mapbox://styles/mapbox/streets-v9'>
        <Marker longitude={lng} latitude={lat} anchor='bottom'>
          <Image src={pin} alt='location' width={40} height={40} />
        </Marker>
      </Map>
    )
  );
}
