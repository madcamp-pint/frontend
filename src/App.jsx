import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import KakaoCallback from './pages/KakaoCallback';
import MainPage from './pages/MainPage';
import PlacePintPage from './pages/PlacePintPage';
import TimePintPage from './pages/TimePintPage';
import MyPage from './pages/MyPage';
import './App.css';

function App() {
  return (
    <Routes>
       {/* 첫 접속 시 로그인 페이지 */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* 카카오 로그인 리다이렉트 페이지 */}
      <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
      
      {/* 로그인 후 접근 가능한 페이지들 */}
      <Route path="/main" element={<MainPage />} />
      <Route path="/place" element={<PlacePintPage />} />
      <Route path="/time" element={<TimePintPage />} />
      <Route path="/mypage" element={<MyPage />} />

      {/* 존재하지 않는 경로일 경우 로그인 페이지로 */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;