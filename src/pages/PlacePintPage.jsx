import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import KakaoMap from '../components/KakaoMap';
import { Component as NewPost } from '../components/NewPost';
import SelectedButton from '../assets/images/selected_button.png';

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

const BottomButtonRow = styled.div`
  position: fixed;
  right: 41px;
  bottom: 58px;
  width: 83px;
  height: 251px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #FFF;
  box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.25);
  gap: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  cursor: pointer;
  border: none;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ selected }) => 
    selected && 
    `
      &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: url(${SelectedButton}) no-repeat center center;
      border-radius: 50%;
      z-index: 0;
     }
    `
  }
  span {
    position: relative;
    z-index: 1;
  }
`;

export default function PlacePintPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [address, setAddress] = useState(""); // New state for address
  const [user, setUser] = useState(null); // 사용자 정보 상태 추가
  const [myPints, setMyPints] = useState([]);
  const [mapMode, setMapMode] = useState('write');
  const [selectedPint, setSelectedPint] = useState(null);

  const modalRef = useRef(null);

  const handleMarkerClick = useCallback((pint) => {
    setSelectedPint(pint);
    setIsModalOpen(true);
  }, []);
  
  const handleMapClick = useCallback((position) => {
    // console.log("Clicked position:", position);
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

  const fetchMyPints = useCallback(() => {
    fetch('http://localhost:4000/pints/my', { credentials: 'include' })
    .then(res => res.json())
    .then(data => setMyPints(data))
    .catch(err => console.error('내 핀트 가져오기 실패:', err));
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/pints/my', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        setMyPints(data);
        console.log('내 핀트:', data); // 여기서 address 필드가 있는지 확인!
      })
      .catch(err => console.error('내 핀트 가져오기 실패:', err));
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // 사용자 정보 fetch
    fetch('http://localhost:4000/auth/user', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('유저 정보 가져오기 실패:', err));

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // 외부 클릭 시 팝업 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <Wrapper>
      <Sidebar />
      <MapWrapper>
        {mapMode === 'write' && (
          <KakaoMap
            width="100vw"
            height="100vh"
            onMapClick={mapMode === 'write' ? handleMapClick : undefined}
            mapMode={mapMode}
            myPints={myPints}
            onMarkerClick={handleMarkerClick}
          />
        )}
        {mapMode === 'my' && (
          <KakaoMap
            width="100vw"
            height="100vh"
            onMapClick={undefined} // 클릭 비활성화
            mapMode="my"
          />
        )}
        {mapMode === 'public' && (
          <KakaoMap
            width="100vw"
            height="100vh"
            onMapClick={undefined} // 클릭 비활성화
            mapMode="public"
          />
        )}
        {isModalOpen && (
          <ModalOverlay>
            <ModalContent ref={modalRef}>
              <ModalInnerContent>
                <NewPost
                  onClose={() => {
                    setIsModalOpen(false);
                    setSelectedPint(null);
                  }}
                  address={selectedPint ? selectedPint.location.address || selectedPint.address : address}
                  user={user}
                  position={selectedPint ? {
                    lat: selectedPint.location.coordinates[1],
                    lng: selectedPint.location.coordinates[0]
                  } : clickedPosition}
                  pint={selectedPint}
                  readOnly={!!selectedPint}
                  onSaved={fetchMyPints}
                />
              </ModalInnerContent>
            </ModalContent>
          </ModalOverlay>
        )}
        <BottomButtonRow>
          <Button selected={mapMode === 'write'} onClick={() => setMapMode('write')}>
            <span>📍</span></Button>
          <Button selected={mapMode === 'my'} onClick={() => setMapMode('my')}>
            <span>🔒</span></Button>
          <Button selected={mapMode === 'public'} onClick={() => setMapMode('public')}>
            <span>🌎</span></Button>
        </BottomButtonRow>
      </MapWrapper>
    </Wrapper>
  );
}