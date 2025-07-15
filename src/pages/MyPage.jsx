import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import PintIcon from '../assets/images/pint.png';
// const InputBox = styled.div`

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

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
`;
const ProfileBox = styled.div`
  position: relative;
  top: 60px;
  left: 82px;
  z-index: 1px;
  width: 1114px;
  height: 267px;
  flex-shrink: 0;
  border-radius: 64px;
  background: #E1E9F0;
`;

const ProfilePint = styled.img`
  position: absolute;
  top: 60px;
  left: 39px;
  z-index: 1px;
  width: 37px;
  height: 37px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

const ProfileName = styled.h2`
  position: absolute;
  left: 90px;
  top: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: "Noto Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Introduction = styled.h2`
  position: absolute;
  left: 63px;
  top: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #747474;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IntroductionTextBox = styled.div`
  position: absolute;
  left: 57px;
  top: 165px;
  width: 388px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 25.5px;
  background: #FFF;
`;

const IntroductionText = styled.input`
  position: absolute;
  top: 0;
  left: 21px;
  display: flex;
  width: 344px;
  height: 51px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  border: none;
  outline: none;
`;

const UserName = styled.h2`
  position: absolute;
  top: 37px;
  left: 479px;
  display: flex;
  width: 108px;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #747474;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`;

const UserNameTextBox = styled.div`
  position: absolute;
  top: 67px;
  left: 472px;
  width: 279px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 25.5px;
  background: #FFF;
`;

const UserNameText = styled.input`
  position: absolute;
  top: 0;
  left: 23px;
  display: flex;
  width: 212px;
  height: 51px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Link = styled.h2`
  position: absolute;
  top: 135px;
  left: 479px;
  display: flex;
  width: 108px;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #747474;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`;

const LinkTextBox = styled.div`
  position: absolute;
  top: 165px;
  left: 472px;
  width: 279px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 25.5px;
  background: #FFF;
`;

const LinkText = styled.input`
  position: absolute;
  top: 0;
  left: 23px;
  display: flex;
  width: 212px;
  height: 51px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SaveButton = styled.button`
  position: absolute;
  top: 171px;
  left: 949px;
  width: 108px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 25.5px;
  background: #ABD8FF;
`;

const SaveText = styled.h2`
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  width: 68px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FriendsBox = styled.div`
  position: absolute;
  top: 506px;
  left: 82px;
  z-index: 1px;
  width: 1114px;
  height: 383px;
  flex-shrink: 0;
  border-radius: 64px;
  background: #E1E9F0;
`;

const ProfileTitle = styled.h2`
  position: absolute;
  top: 60px;
  left: 39px;
  display: flex;
  width: 177px;
  height: 57px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [introduction, setIntroduction] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/auth/user', {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <Container>
      <ProfileBox>
        <ProfilePint src={PintIcon} alt='pint_icon' />
        <ProfileName>
          {user?.nickname || '로그인이 필요합니다'}
        </ProfileName>
        <Introduction>소개</Introduction>
        <IntroductionTextBox>
          <IntroductionText 
            placeholder='소개글을 입력해주세요.'
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
          />
        </IntroductionTextBox>
      </ProfileBox>
      </Container>
    </Wrapper>
  );
}

export default MyPage;