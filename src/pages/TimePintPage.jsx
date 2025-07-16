import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import TimePintRegisterPopup from '../components/TimePintRegisterPopup';
import TimePintViewPopup from '../components/TimePintViewPopup';
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
  overflow: ${({ isPopupOpen }) => (isPopupOpen ? 'hidden' : 'auto')};

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
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
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

const TimeText = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${({ isOpen }) => (isOpen ? '#448AFF' : '#FF3A3A')};
`;

const TimePintPage = () => {
  const [registerPint, setRegisterPint] = useState(false);
  const [viewPint, setViewPint] = useState(null);
  const [pintList, setPintList] = useState([]);
  const [time, setTime] = useState({});

  const isPopupOpen = registerPint || viewPint;

  const fetchTimePints = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/time-pints');
      const data = await res.json();
      setPintList(data);
    } catch (err) {
      console.error('Time PINT 불러오기 실패:', err);
    }
  };

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

  useEffect(() => {
    fetchTimePints();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  return (
    <Wrapper>
      <Sidebar />
      <Container isPopupOpen={isPopupOpen}>
        {/* title */}
        <TitleWrapper>
          <TitleIcon src={Icon} />
          <TitleText>Time PINT</TitleText>
        </TitleWrapper>

        {/* card list */}
        <ListWrapper>
          {/* add card */}
          <AddCard onClick={() => setRegisterPint(true)}>+</AddCard>

          {/* register Time PINT */}
          {registerPint && (
            <TimePintRegisterPopup 
              onClose={() => {
                setRegisterPint(false);
                fetchTimePints();
              }} 
            />
          )}

          {/* view Time PINT */}
          {viewPint && (
            <TimePintViewPopup pint={viewPint} onClose={() => setViewPint(null)} />
          )}

          {/* card data */}
          {pintList
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((item) => {
              const timeLeft = calculateTimeLeft(item.openDate);
              const isOpen = timeLeft === '오픈 가능';

              return (
                <Card 
                  key={item._id} 
                  onClick={() => 
                    setViewPint({
                      title: item.name,
                      timeLeft,
                      isPublic: item.isPublic,
                      tags: item.tags,
                      mediaUrl: item.mediaUrl,
                      content: item.content,
                      openDate: item.openDate,
                    })
                  }
                >
                  <BlackText>{item.name}</BlackText>
                  <TimeText isOpen={isOpen}>{timeLeft}</TimeText>
                </Card>
              );
          })}
        </ListWrapper>
      </Container>
    </Wrapper>
  );
}

export default TimePintPage;