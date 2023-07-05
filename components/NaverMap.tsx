'use client';
import React, { useEffect, useRef } from 'react';

const NaverMap = ({ lat, lng }: { lat: number; lng: number }) => {
  const mapElement = useRef(null);

  function renderMap() {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(lat, lng);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }

  useEffect(() => {
    renderMap();
  }, []);

  return (
    <>
      <div ref={mapElement} style={{ minHeight: '400px' }} />
    </>
  );
};

export default NaverMap;
