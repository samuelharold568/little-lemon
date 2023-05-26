import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { Center, Stack } from '@chakra-ui/react';

function Maps() {
  return (
    <Stack bg="#FFF8DE" h="80vh" w="100%" pos="relative">
      <Center h="100%">
        <MapContainer center={[-0.46140, 117.17492]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-0.46140, 117.17492]}>
            <Popup>
              Example Maps
              {' '}
              <br />
              {' '}
              Little Lemon.
            </Popup>
          </Marker>
        </MapContainer>
      </Center>
    </Stack>
  );
}

export default Maps;
