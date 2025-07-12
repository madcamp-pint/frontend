import React from 'react';
import KakaoMap from '../components/KakaoMap';

export default function PlacePintPage() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <KakaoMap width="100%" height="100%" />
      {/* 여기에 다른 UI 요소들을 추가할 수 있습니다. */}
    </div>
  );
}
