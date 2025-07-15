import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import TimePintPopup from '../components/TimePintPopup';
import Icon from '../assets/images/time_pint.png';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
`;

const Container = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  margin: 20px 20px 20px 8px;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  background-color: #FAFAFA;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 8px;
  width: 1304px
`;

const TitleIcon = styled.img`
  width: 52px;
  height: 52px;
`;

const TitleText = styled.span`
  font-size: 28px;
  font-weight: 700;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const Card = styled.div`
  width: 340px;
  height: 160px;
  border-radius: 12px;
  background-color: #E1E9F0;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const AddCard = styled(Card)`
  background-color: #E9E9E9;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: #BCBCBC;
  cursor: pointer;
`;

const BlackText = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #121212;
`;

const RedText = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #FF3A3A;
`;

const TimePintPage = () => {

  // time PINT 리스트 더미데이터
  const dummyData = [
    { id: 1, title: '몰입캠프1', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
    { id: 2, title: '몰입캠프2', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
    { id: 3, title: '몰입캠프3', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
    { id: 4, title: '몰입캠프4', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
    { id: 5, title: '몰입캠프5', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
    { id: 6, title: '몰입캠프6', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
    { id: 7, title: '몰입캠프7', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
    { id: 8, title: '몰입캠프8', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
    { id: 9, title: '몰입캠프9', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
    { id: 10, title: '몰입캠프10', timeLeft: '0년 0개월 0일 0시간 0분 남음' },
  ];

  const [popup, setPopup] = useState(false);

  return (
    <Wrapper>
      <Sidebar />
      <Container>
        {/* title */}
        <TitleWrapper>
          <TitleIcon src={Icon} />
          <TitleText>time PINT</TitleText>
        </TitleWrapper>

        {/* card list */}
        <ListWrapper>
          {/* add card */}
          <AddCard onClick={() => setPopup(true)}>+</AddCard>
          {popup && <TimePintPopup onClose={() => setPopup(false)} />}

          {/* card data */}
          {[...dummyData]
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <Card key={item.id}>
                <BlackText>{item.title}</BlackText>
                <RedText>{item.timeLeft}</RedText>
              </Card>
          ))}
        </ListWrapper>
      </Container>
    </Wrapper>
  );
}

export default TimePintPage;