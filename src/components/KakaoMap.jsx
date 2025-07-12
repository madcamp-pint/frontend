import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ width, height }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            const container = mapContainer.current;
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };
            new window.kakao.maps.Map(container, options);
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