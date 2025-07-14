import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';
import logoImage from '../assets/images/logo_black.png';
import Sidebar from '../components/Sidebar';
import ProfileImageTest from '../assets/images/profile_image_test.png';
import placePintIcon from '../assets/images/place_pint.png';
import timePintIcon from '../assets/images/time_pint.png';
import expandIcon from '../assets/images/expand_icon.png';
import KakaoMap from '../components/KakaoMap';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
`;

const Container = styled.div`
  flex: 1;
  margin: 20px 20px 20px 8px;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
  overflow-y: auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 172px;
  height: auto;
  object-fit: contain;
  cursor: default;
`;

const UserWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const BellWrapper = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #E5E5E5;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

const BellIcon = styled(FiBell)`
  font-size: 32px;
  color: #121212;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 60px;
  border-radius: 100px;
  gap: 12px;
  padding: 1px 1px;
  position: relative;
  background-color: #E5E5E5;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 6px;
`;

const Nickname = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-40%);
  font-size: 18px;
  font-weight: bold;
  color: #121212;
`;

const DropdownArrow = styled(FiChevronDown)`
  font-size: 24px;
  color: #121212;
  margin-right: 12px;
  margin-top: 4px;
`;

const ContentWrapper = styled.div`

`;

const TitleWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const TitleText = styled.text`
  font-size: 28px;
  font-weight: bold;
  margin-left: 4px;
  margin-bottom: 20px;
`;

const PlacePintWrapper = styled.div`
  margin-top: 20px;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 320px;
  border: 1px solid #777777;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const ExpandButton = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  z-index: 1;
  
  &:hover {
    opacity: 1;
  }
`;

const TimePintWrapper = styled.div`
  margin-top: 40px;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  border: 1px solid #777777;
  border-radius: 8px;
  overflow-y: auto;
  padding: 30px 24px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #777777;
  margin: 0 24px;
  align-self: stretch;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrangeDot = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #FF8731;
  border-radius: 100%;
  margin-right: 8px;
  aspect-ratio: 1 / 1;
`;

const ItemText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 120px;
`;

const CountDown = styled.span`
  color: #FF8731;
  font-size: 16px;
`;

const MainPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/auth/user', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('유저 정보 가져오기 실패:', err));
  }, []);

  const dummyData = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    label: '몰입캠프',
    countdown: 'n년 n개월 n일 n시간 n분 남음',
  }));

  return (
    <Wrapper>
      <Sidebar />
      <Container>
        {/* Header */}
        <HeaderWrapper>
          <LogoImage src={logoImage} alt='pint_logo' />
          <UserWrapper>
            <BellWrapper>
              <BellIcon />
            </BellWrapper>
            <ProfileWrapper>
              <ProfileImage src={user?.profileImage || ProfileImageTest} alt='profile_image' />
              <Nickname>{user?.nickname || 'dumpling'}</Nickname>
              <DropdownArrow />
            </ProfileWrapper>
          </UserWrapper>
        </HeaderWrapper>

        {/* Content */}
        <ContentWrapper>
          {/* Place Pint */}
          <PlacePintWrapper>
            <TitleWrapper onClick={() => navigate('/place')}>
              <Icon src={placePintIcon} alt='place_pint_icon' />
              <TitleText>place PINT</TitleText>
            </TitleWrapper>
            
            {/* <KaKaoMap /> */}
            <MapWrapper>
              <KakaoMap width="100%" height="320px" />
              <ExpandButton
                src={expandIcon}
                alt='expand'
                onClick={() => navigate('/place')}
               />
            </MapWrapper>
          </PlacePintWrapper>

          {/* Time Pint */}
          <TimePintWrapper>
            <TitleWrapper onClick={() => navigate('/time')}>
              <Icon src={timePintIcon} alt='time_pint_icon' />
              <TitleText>time PINT</TitleText>
            </TitleWrapper>

            <ListWrapper>
              <Column>
                {dummyData.slice(0, 5).map(item => (
                  <ListItem key={item.id}>
                    <OrangeDot />
                    <ItemText>{item.label}</ItemText>
                    <CountDown>{item.countdown}</CountDown>
                  </ListItem>
                ))}
              </Column>

              <Divider />
              
              <Column>
                {dummyData.slice(0, 5).map(item => (
                  <ListItem key={item.id}>
                    <OrangeDot />
                    <ItemText>{item.label}</ItemText>
                    <CountDown>{item.countdown}</CountDown>
                  </ListItem>
                ))}
              </Column>
            </ListWrapper>
          </TimePintWrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  )
}

export default MainPage;