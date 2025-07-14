import React, { useEffect } from 'react';
import styled from 'styled-components';
import mapImage from '../assets/images/map.png';
import logoImage from '../assets/images/logo_white.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mapImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #FAFAFA;
  z-index: 1;
  min-height: 300px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  width: 200px;
  object-fit: contain;
  cursor: default;
`;

const MainText = styled.span`
  font-size: 40px;
  font-weight: bold;
  cursor: default;
`;

const SubText = styled.span`
  font-size: 32px;
  margin-bottom: 60px;
  cursor: default;
`;

const KaKaoLoginButton = styled.button`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  border: none;
  border-radius: 100px;
  background-color: #FEE500;
  color: #121212;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.7);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

function Login() {
  //const navigate = useNavigate();

  const handleKakaoLogin = () => {
    window.location.href = 'http://localhost:4000/auth/kakao';
  };

  return (
    <Wrapper>
      {/* 반투명 오버레이 */}
      <Overlay />

      <ContentWrapper>
        {/* 로고 및 텍스트 */}
        <TitleWrapper>
          <LogoImage src={logoImage} alt='pint_logo' />
          <MainText>에 오신 걸 환영해요.</MainText>
        </TitleWrapper>
        <SubText>당신만의 타임캡슐을 남겨보세요.</SubText>

        {/* 카카오 로그인 */}
        <KaKaoLoginButton onClick={handleKakaoLogin}>
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
            <path d="M14.5 25.316C22.5076 25.316 29 19.6488 29 12.658C29 5.66716 22.5076 0 14.5 0C6.49237 0 0 5.66716 0 12.658C0 15.8406 1.34669 18.7519 3.57063 20.9761C3.39481 22.8133 2.81481 24.8277 2.17319 26.3395C2.03 26.6758 2.30731 27.0519 2.668 26.9941C6.757 26.325 9.18756 25.2979 10.2443 24.7626C11.6322 25.1333 13.0632 25.3193 14.5 25.316Z" fill="#121212"/>
          </svg>
          카카오로 시작하기
        </KaKaoLoginButton>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Login;