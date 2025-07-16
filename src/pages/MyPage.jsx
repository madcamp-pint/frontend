import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import PintIcon from '../assets/images/pint.png';

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
  background-color: #fafafa;
  overflow-y: auto;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

const ProfileBox = styled.div`
  background: #e1e9f0;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 24px;
`;

const InputGroup = styled.div`
  flex: 1;
`;

const Label = styled.label`
  font-size: 16px;
  color: #747474;
  margin-bottom: 8px;
  display: block;
`;

const InputWrapper = styled.div`
  background: #fff;
  border-radius: 25.5px;
  padding: 12px 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  background: transparent;
`;

const SaveButton = styled.button`
  align-self: flex-end;
  width: 108px;
  height: 40px;
  border-radius: 25.5px;
  background: #abd8ff;
  border: none;
  font-weight: 600;
  color: #FAFAFA;
  font-size: 16px;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

const FriendsBox = styled.div`
  background: #e1e9f0;
  border-radius: 20px;
  padding: 32px;
`;

const NicknameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NicknameIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const NicknameText = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #121212;
`;

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [introduction, setIntroduction] = useState('');
  const [userName, setUserName] = useState('');
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/auth/user', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setUserName(data?.userName || '');
        setIntroduction(data?.introduction || '');
        setLink(data?.link || '');
        setEmail(data?.email || '');
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSave = async () => {
    const data = { introduction, userName, link, email };
    try {
      const response = await fetch('http://localhost:4000/auth/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        <ContentSection>
          <Title>프로필</Title>
          <ProfileBox>
            <NicknameRow>
              <NicknameIcon src={PintIcon} alt="pint" />
              <NicknameText>{user?.nickname || '로그인이 필요합니다'}</NicknameText>
            </NicknameRow>
            <FlexRow>
              <InputGroup>
                <Label>사용자 ID</Label>
                <InputWrapper>
                  <Input
                    placeholder="사용자 이름"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </InputWrapper>
              </InputGroup>
              <InputGroup>
                <Label>소개</Label>
                <InputWrapper>
                  <Input
                    placeholder="소개글을 입력해주세요"
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                  />
                </InputWrapper>
              </InputGroup>
            </FlexRow>
            <FlexRow>
              <InputGroup>
                <Label>링크</Label>
                <InputWrapper>
                  <Input
                    placeholder="링크를 입력해주세요"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </InputWrapper>
              </InputGroup>
              <InputGroup>
                <Label>이메일</Label>
                <InputWrapper>
                  <Input
                    placeholder="이메일을 입력해주세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputWrapper>
              </InputGroup>
            </FlexRow>
            <SaveButton onClick={handleSave}>저장</SaveButton>
          </ProfileBox>

          <Title>친구</Title>
          <FriendsBox>
            <Label>친구 추가</Label>
            <InputWrapper>
              <Input placeholder="친구 아이디 입력" />
            </InputWrapper>
            <Label style={{ marginTop: '20px' }}>친구 목록</Label>
            {/* 친구 목록 나열 컴포넌트 들어갈 자리 */}
          </FriendsBox>
        </ContentSection>
      </Container>
    </Wrapper>
  );
};

export default MyPage;