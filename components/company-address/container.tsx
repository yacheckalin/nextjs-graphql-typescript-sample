import React, { useRef, useEffect } from "react";

import { Loader } from "@googlemaps/js-api-loader";

import styles from "./CompanyAdress.module.css";

interface Props {
  lat: number;
  lng: number;
}

const CompanyAdress: React.FC<Props> = ({ lat, lng }): JSX.Element => {
  const googleMapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAP_API_KEY,
      version: "weekly",
    });

    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googleMapRef.current, {
        zoom: 8,
        center: { lat, lng },
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
      });
    });
  }, []);

  return (
    <div
      id="map"
      className={styles.container}
      ref={googleMapRef}
      data-testid="company-address-id"
    ></div>
  );
};

export default CompanyAdress;
