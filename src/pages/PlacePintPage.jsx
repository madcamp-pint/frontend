import React, { useState } from 'react';
import NewPost from '../components/NewPost';
import { ReactComponent as SmallEntireBox } from '../assets/images/NewPost_svg/small_entire_box.svg?react';

const PlacePintPage = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(true); // 바로 보이도록 true로 설정

  const handleCloseNewPostModal = () => {
    setShowNewPostModal(false);
  };

  return (
    <div>
      <p>PlacePintPage</p>

      {showNewPostModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경 오버레이
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px 0', // 위아래 여백
          boxSizing: 'border-box', // 패딩이 너비/높이에 포함되도록
        }}>
          <div style={{
            position: 'relative',
            width: '90%',
            maxWidth: '600px',
            height: '100%', // 부모의 100%를 채우도록
            maxHeight: '800px',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden', // SmallEntireBox가 넘치지 않도록
            display: 'flex',
            flexDirection: 'column',
          }}>
            <SmallEntireBox style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }} />
            <div style={{
              flexGrow: 1, // 남은 공간을 모두 차지
              overflowY: 'auto', // 세로 스크롤 가능
              padding: '20px', // NewPost 내용과 SmallEntireBox 경계 사이의 여백
            }}>
              <NewPost />
            </div>
            <button onClick={handleCloseNewPostModal} style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 1001
            }}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacePintPage;