import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ width, height, onMapClick, myPints, onMarkerClick }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const onMapClickRef = useRef(onMapClick); // Ref to store the latest onMapClick prop
    function drawMarkers() {
        if (!window.kakao || !window.kakao.maps || !map.current) return;
        if (map.current.markers) {
            map.current.markers.forEach(marker => marker.setMap(null));
        }
        map.current.markers = [];
        myPints.forEach(pint => {
            const marker = new window.kakao.maps.Marker({
                map: map.current,
                position: new window.kakao.maps.LatLng(
                    pint.location.coordinates[1], 
                    pint.location.coordinates[0]
                ),
            });
            // ⭐ 마커 클릭 이벤트 등록
            window.kakao.maps.event.addListener(marker, 'click', () => {
                if (onMarkerClick) onMarkerClick(pint);
            });
            map.current.markers.push(marker);
        });
    }
    // Update the ref whenever onMapClick prop changes
    useEffect(() => {
        onMapClickRef.current = onMapClick;
    }, [onMapClick]);

    useEffect(() => {
        drawMarkers();
    }, [myPints]);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                console.log('Kakao Map API loaded and ready. Initializing map...');
                console.log('Kakao Maps Services object:', window.kakao.maps.services);
                const container = mapContainer.current;

                if (!container) {
                    console.error('Map container is null. Cannot create map.');
                    return;
                }

                // 지도 생성 함수
                const createMap = (lat, lng) => {
                    console.log('Creating map at:', lat, lng);
                    const options = {
                        center: new window.kakao.maps.LatLng(lat, lng),
                        level: 3,
                    };
                    map.current = new window.kakao.maps.Map(container, options);
                    drawMarkers();
                    // 지도 클릭 이벤트 리스너 추가
                    window.kakao.maps.event.addListener(map.current, 'click', function(mouseEvent) {
                        const latLng = mouseEvent.latLng;
                        console.log("Map clicked at:", latLng.getLat(), latLng.getLng());
                        if (onMapClickRef.current) {
                            onMapClickRef.current({
                                lat: latLng.getLat(),
                                lng: latLng.getLng(),
                            });
                        }
                        map.current.setCenter(latLng);
                    });
                };

                // Geolocation API 사용 가능 여부 확인
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
                            // 위치 정보 가져오기 실패 (권한 없음 등)
                            // 기본 위치(대전)을 중심으로 지도 생성
                            createMap(36.3504119, 127.3845475);
                        }
                    );
                } else {
                    console.log('Geolocation API not supported. Using default location.');
                    // Geolocation API를 지원하지 않는 브라우저
                    // 대전을 중심으로 지도 생성
                    createMap(36.3504119, 127.3845475);
                }
            });
        };

        return () => {
            document.head.removeChild(script);
            if (map.current) {
                // Kakao Map API does not have a direct destroy method for the map instance.
                // To prevent memory leaks, you might need to manually clear event listeners
                // or rely on garbage collection if the container element is removed.
                // For now, setting map.current to null is a common practice.
                map.current = null;
            }
            console.log('KakaoMap useEffect cleanup.');
        };
    }, []); // Empty dependency array: runs only once on mount

    return (
        <div
            ref={mapContainer}
            style={{ width, height, backgroundColor: '#eee', border: '1px solid #ccc' }} // 임시 배경색 및 테두리 추가
        />
    );
};

export default KakaoMap;
