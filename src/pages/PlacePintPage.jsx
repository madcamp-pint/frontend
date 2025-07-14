import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import KakaoMap from '../components/KakaoMap';
import { Component as NewPost } from '../components/NewPost';

export default function PlacePintPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [address, setAddress] = useState(""); // New state for address

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleMapClick = useCallback((position) => {
    console.log("Clicked position:", position);
    setClickedPosition(position);
    setIsModalOpen(true);

    // Perform reverse geocoding
    if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      const coord = new window.kakao.maps.LatLng(position.lat, position.lng);

      geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          if (result[0].address) {
            setAddress(result[0].address.address_name);
            console.log("Resolved address:", result[0].address.address_name);
          } else {
            setAddress("주소를 찾을 수 없습니다.");
          }
        } else {
          setAddress("주소 변환 실패");
          console.error("Geocoder failed:", status);
        }
      });
    } else {
      setAddress("카카오맵 서비스 로드 안됨");
      console.error("Kakao Maps services not loaded.");
    }
  }, []); // Empty dependency array to memoize the function

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedPosition(null);
    setAddress(""); // Clear address when modal closes
  };

  return (
    <Wrapper>
      <Sidebar />
      <MapWrapper>
        <KakaoMap
          width="100vw"
          height="100vh"
          onMapClick={handleMapClick}
        />
        {isModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <ModalInnerContent>
                <NewPost onClose={closeModal} address={address} /> {/* Pass address prop */}
              </ModalInnerContent>
            </ModalContent>
          </ModalOverlay>
        )}
      </MapWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
`;

const MapWrapper = styled.div`
  flex: 1;
  margin: 20px 20px 20px 8px;
  border-radius: 20px;
  overflow: hidden;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.38);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 433px;
  height: 668px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #fff;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const ModalInnerContent = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  color: black;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  padding: 0 0 10px 0;
`;
