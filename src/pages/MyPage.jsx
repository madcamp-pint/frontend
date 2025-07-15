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

const Profile = styled.h1`
  position: absolute;
  top: 35px;
  left: 160px;
  z-index: 1px;
  color: #000;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  width: 177px;
  height: 57px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 500;
`;

const ProfileBox = styled.div`
  position: relative;
  top: 55px;
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
  overflow: hidden;
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
  overflow: hidden;
`;

const UserName = styled.h2`
  position: absolute;
  top: 26px;
  left: 483px;
  display: flex;
  align-items: left;
  width: 300px;
  height: 24px;
  flex-shrink: 0;
  color: #747474;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DuplicateMsg = styled.span`
  margin-left: 80px;
  color: ${props => props.duplicate ? 'red' : 'green'};
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
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
  overflow: hidden;
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
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  border: none;
  outline: none;
`;

const Link = styled.h2`
  position: absolute;
  top: 127px;
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
  font-weight: 400;
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
  overflow: hidden;
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
  font-weight: 100;
  line-height: normal;
  border: none;
  outline: none;
  &::placeholder {
`;

const Email = styled.h2`
  position: absolute;
  position: relative;
  top: 23px;
  left: 810px;
  display: flex;
  width: 400px;
  height: 24px;
  // flex-direction: column;
  // justify-content: center;
  flex-shrink: 0;
  color: #747474;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const EmailTextBox = styled.div`
  position: absolute;
  top: 65px;
  left: 800px;
  display: flex;
  width: 257px;
  height: 51px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 25.5px;
  background: #FFF;
  overflow: hidden;
`;

const EmailText = styled.input`
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
  font-weight: 100;
  line-height: normal;
  border: none;
  outline: none;
`;

const EmailLabel = styled.h2`
  position: absolute;
  top: 21px;
  left: 800px;
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
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
`;


const SaveButton = styled.button`
  position: absolute;
  top: 171px;
  left: 949px;
  width: 108px;
  height: 51px;
  flex-shrink: 0;
  border: none;
  outline: none;
  border-radius: 25.5px;
  background: #ABD8FF;
`;

const SaveText = styled.h2`
  position: absolute;
  top: -2px;
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
  top: 450px;
  left: 208px;
  z-index: 1px;
  width: 1114px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 64px;
  background: #E1E9F0;
`;

const ProfileTitle = styled.h2`
  position: absolute;
  top: -80px;
  left: -60px;
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
  font-weight: 500;
  line-height: normal;
`;

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [introduction, setIntroduction] = useState('');
  const [userName, setUserName] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [duplicateMsg, setDuplicateMsg] = useState('');
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/auth/user', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setUserName(data?.userName || '');      // userId 필드로 저장되어 있다고 가정
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (!userName) {
      setIsDuplicate(false);
      setDuplicateMsg('');
      return;
    }
    const timer = setTimeout(() => {
      fetch(`http://localhost:4000/auth/check-username?username=${encodeURIComponent(userName)}`)
        .then(res => res.json())
        .then(data => {
          setIsDuplicate(data.duplicate);
          setDuplicateMsg(data.duplicate ? '이미 사용 중인 ID입니다.' : '사용 가능한 ID입니다.');
        })
        .catch(err => {
          setIsDuplicate(false);
          setDuplicateMsg('중복 체크 실패');
        });
    }, 500);
    return () => clearTimeout(timer);
  }, [userName]);

  const isValidEmail = (value) => {
    // 간단한 이메일 정규식
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !isValidEmail(value)) {
      setEmailMsg('이메일 형식이 아닙니다.');
    } else {
      setEmailMsg('');
    }
  };

  const handleSave = async () => {
    const data = {
      introduction,
      userName,
      link,
      email,
    };

    try {
      const response = await fetch('http://localhost:4000/auth/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert('저장되었습니다!');
      } else {
        alert(result.message || '저장 실패');
      }
    } catch (err) {
      alert('서버 오류');
    }
  };

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
        <UserName>
          사용자 이름 
          <DuplicateMsg duplicate={isDuplicate}>{duplicateMsg}</DuplicateMsg>
        </UserName>
        <UserNameTextBox>
          <UserNameText
            placeholder='사용할 ID를 입력해주세요'
            value={userName}
            onChange={e => {
              const onlyEnglish = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
              setUserName(onlyEnglish);
            }}
          />
        </UserNameTextBox>
        <Link>링크</Link>
        <LinkTextBox>
          <LinkText
            type='url'
            placeholder='링크를 입력해주세요'
            value={link}
            onChange={e => {
              const linkOnlyEnglish = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
              setLink(linkOnlyEnglish);
            }}
          />
        </LinkTextBox>
        <Email>
          이메일
          <DuplicateMsg duplicate={!!emailMsg}>{emailMsg}</DuplicateMsg>
        </Email>
        <EmailTextBox>
          <EmailText
            placeholder='이메일을 입력해주세요'
            value={email}
            onChange={handleEmailChange}
          />
        </EmailTextBox>
        <SaveButton onClick={handleSave}>
          <SaveText>저장</SaveText>
        </SaveButton>
      </ProfileBox>
      <Profile>프로필</Profile>

      <FriendsBox>
        <ProfileTitle>친구</ProfileTitle>
      </FriendsBox>
      </Container>
    </Wrapper>
  );
}

export default MyPage;