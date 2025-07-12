import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ width, height }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        console.log('KakaoMap useEffect started.');
        console.log('mapContainer.current at useEffect start:', mapContainer.current);

        const checkKakaoMapLoaded = setInterval(() => {
            console.log('setInterval check: window.kakao =', window.kakao);
            if (window.kakao && window.kakao.maps) {
                console.log('Kakao Map API loaded and ready. Initializing map...');
                clearInterval(checkKakaoMapLoaded);
                const container = mapContainer.current;

                if (!container) {
                    console.error('Map container is null. Cannot create map.');
                    return;
                }

                //지도 생성 함수
                const createMap = (lat, lng) => {
                    console.log('Creating map at:', lat, lng);
                    const options = {
                        center: new window.kakao.maps.LatLng(lat, lng),
                        level: 3,
                    };
                    new window.kakao.maps.Map(container, options);
                };
            
                //Geolocation API 사용 가능 여부 확인
                if (navigator.geolocation) {
                    console.log('Geolocation supported. Getting current position...');
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const lat = position.coords.latitude;
                            const lng = position.coords.longitude;
                            console.log('Current position:', lat, lng);
                            createMap(lat, lng);
                        },
                        (error) => {
                            console.error('Geolocation error:', error);
                            //위치 정보 가져오기 실패 (권한 없음 등)
                            //기본 위치(대전)을 중심으로 지도 생성
                            createMap(36.3504119, 127.3845475);
                        }
                    );
                } else {
                    console.log('Geolocation API not supported. Using default location.');
                    //Geolocation API를 지원하지 않는 브라우저
                    //대전을 중심으로 지도 생성
                    createMap(36.3504119, 127.3845475);
                }
            } else {
                console.log('Waiting for Kakao Map API...');
            }
        }, 500); // 0.5초마다 확인

        return () => {
            console.log('KakaoMap useEffect cleanup.');
            clearInterval(checkKakaoMapLoaded);
        };
    }, []);

    return (
        <div
            ref={mapContainer}
            style={{ width, height, backgroundColor: '#eee', border: '1px solid #ccc' }} // 임시 배경색 및 테두리 추가
        />
    );
};

export default KakaoMap;