import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import KakaoMap from '../components/KakaoMap';
import NewPost from '../components/NewPost';

export default function PlacePintPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPosition, setClickedPosition] = useState(null);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  } ,[]);

  const handleMapClick = (position) => {
    setClickedPosition(position);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedPosition(null);
  };

  return (
    <div style={wrapper}>
      <Sidebar />
      <div style={mapWrapper}>
        <KakaoMap 
          width="100vw" 
          height="100vh" 
          onMapClick={handleMapClick} 
        />
        {isModalOpen && (
          <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
              <div style={modalInnerContentStyle}>
                <NewPost onClose={closeModal} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const wrapper = {
  display: 'flex', 
  width: '100vw', 
  height: '100vh', 
  backgroundColor: '#121212'
};

const mapWrapper = {
  flex: 1,
  margin: '20px',
  borderRadius: '20px',
  overflow: 'hidden'
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.38)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  width: '433px',
  height: '668px',
  flexShrink: 0,
  borderRadius: '18px',
  background: '#FFF',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

const modalInnerContentStyle = {
  height: '100%',
  width: '100%',
  overflowY: 'auto',
  textAlign: 'center',
  color: 'black', // 콘텐츠 색상
};
