import React, { useEffect, useState, useRef } from 'react';
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
  position: relative;
  z-index: 10;
`;

const ProfileClickable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 60px;
  border-radius: 100px;
  gap: 12px;
  padding: 1px 1px;
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

const DropdownMenu = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  background-color: #E5E5E5;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  z-index: 11;
`;

const DropdownItem = styled.div`
  padding: 14px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #121212;
  cursor: pointer;
  background-color: #E5E5E5;
  transition: filter 0.2s ease-in-out;
  &:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &:hover {
    filter: brightness(0.9);
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
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
  height: 380px;
  border: 1px solid #777777;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  z-index: 0;
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
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 180px;
  border: 1px solid #777777;
  border-radius: 8px;
  overflow-y: auto;
  padding: 20px 28px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Divider = styled.div`
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
  text-align: left;
  margin-left: 10px;
  flex: 1;
`;

const CountDown = styled.span`
  color: #FF8731;
  font-size: 16px;
`;

const MainPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
  const [pintList, setPintList] = useState([]);
  const [time, setTime] = useState({});

  // 유저 정보 GET
  useEffect(() => {
    fetch('http://localhost:4000/auth/user', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('유저 정보 가져오기 실패:', err));
  }, []);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // time PINT 리스트 GET
  const fetchTimePints = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/time-pints');
      const data = await res.json();
      setPintList(data);
    } catch (err) {
      console.error('Time PINT 불러오기 실패:', err);
    }
  };

  // 남은 시간 계산
  const calculateTimeLeft = (openDate) => {
    const now = new Date();
    const target = new Date(openDate);

    if (isNaN(target.getTime())) return '날짜 오류';

    const diff = target - now;
    if (diff <= 0) return '오픈 가능';

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    return `${years}년 ${months % 12}개월 ${days % 30}일 ${hours % 24}시간 ${minutes % 60}분 ${seconds % 60}초 남음`;
  };

  useEffect(() => {
    fetchTimePints();
  }, []);

  useEffect(() => {
    const updateAllTimeLeft = () => {
      const updated = {};
      pintList.forEach((pint) => {
        updated[pint._id] = calculateTimeLeft(pint.openDate);
      });
      setTime(updated);
    };

    updateAllTimeLeft();
    const interval = setInterval(updateAllTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [pintList]);

  const leftColumn = pintList.filter((_, i) => i % 2 === 0);
  const rightColumn = pintList.filter((_, i) => i % 2 === 1);

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
            <ProfileWrapper ref={dropdownRef}>
              <ProfileClickable onClick={() => setIsDropdown(prev => !prev)}>
                <ProfileImage src={user?.profileImage || ProfileImageTest} alt='profile_image' />
                <Nickname>{user?.nickname || 'dumpling'}</Nickname>
                <DropdownArrow />
              </ProfileClickable>
              {isDropdown && (
                <DropdownMenu>
                  <DropdownItem onClick={() => navigate('/mypage')}>마이페이지</DropdownItem>
                  <DropdownItem onClick={() => navigate('/login')}>로그아웃</DropdownItem>
                </DropdownMenu>
              )}
            </ProfileWrapper>
          </UserWrapper>
        </HeaderWrapper>

        {/* Content */}
        <ContentWrapper>
          {/* Place Pint */}
          <PlacePintWrapper>
            <TitleWrapper onClick={() => navigate('/place')}>
              <Icon src={placePintIcon} alt='place_pint_icon' />
              <TitleText>Place PINT</TitleText>
            </TitleWrapper>
            
            {/* KakaoMap */}
            <MapWrapper>
              <KakaoMap width="100%" height="380px" />
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
              <TitleText>Time PINT</TitleText>
            </TitleWrapper>

            <ListWrapper>
              <Column>
                {leftColumn.map(item => (
                  <ListItem key={item._id}>
                    <OrangeDot />
                    <ItemText>{item.name}</ItemText>
                    <CountDown>{time[item._id] || 'loading..'}</CountDown>
                  </ListItem>
                ))}
              </Column>

              <Divider />
              
              <Column>
                {rightColumn.map(item => (
                  <ListItem key={item._id}>
                    <OrangeDot />
                    <ItemText>{item.name}</ItemText>
                    <CountDown>{time[item._id] || 'loading..'}</CountDown>
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