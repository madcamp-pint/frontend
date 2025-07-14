import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      fetch('http://localhost:4000/auth/kakao/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('로그인 성공:', data);
          navigate('/main');
        })
        .catch((err) => {
          console.error('로그인 실패:', err);
        });
    }
  }, []);

  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
    }}>
        <h2>카카오 로그인 처리 중...</h2>
    </div>
  );
};

export default KakaoCallback;