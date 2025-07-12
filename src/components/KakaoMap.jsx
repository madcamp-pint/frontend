import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ width, height }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        //카카오 지도 API가 로드되었는지 확인
        if (window.kakao && window.kakao.maps) {
            const container = mapContainer.current;

            //지도 생성 함수
            const createMap = (lat, lng) => {
                const options = {
                    center: new window.kakao.maps.LatLng(lat, lng),
                    level: 3,
                };
                new window.kakao.maps.Map(container, options);
            };
            
            //Geolocation API 사용 가능 여부 확인
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        createMap(lat, lng);
                    },
                    () => {
                        //위치 정보 가져오기 실패 (권한 없음 등)
                        //기본 위치(대전)을 중심으로 지도 생성
                        createMap(36.3504119, 127.3845475);
                    }
                );
            } else {
                //Geolocation API를 지원하지 않는 브라우저
                //대전을 중심으로 지도 생성
                createMap(36.3504119, 127.3845475);
            }
        }
    }, []);

    return (
        <div
            ref={mapContainer}
            style={{ width, height }}
        />
    );
};

export default KakaoMap;