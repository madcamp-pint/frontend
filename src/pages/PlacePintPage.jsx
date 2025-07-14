import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import KakaoMap from '../components/KakaoMap';
import { Component as NewPost } from '../components/NewPost';

export default function PlacePintPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPosition, setClickedPosition] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleMapClick = (position) => {
    setClickedPosition(position);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedPosition(null);
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
                <NewPost onClose={closeModal} />
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
  margin: 20px;
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
`;
