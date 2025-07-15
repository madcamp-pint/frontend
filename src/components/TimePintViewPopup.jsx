import React, { useEffect, useState} from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px 30px;
`;

const Wrapper = styled.div`
  background: #FAFAFA;
  border-radius: 24px;
  width: 500px;
  padding: 40px 28px;
  gap: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const Value = styled.div`
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  background: ${({ highlight }) => (highlight ? '#E1E9F0' : '#E9E9E9')};
  min-height: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const CloseButton = styled.button`
  background: #E5E5E5;
  color: black;
  width: 100px;
  height: 40px;
  border-radius: 100px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

const TimePintViewPopup = ({ onClose, pint }) => {
    const { title, openDate, isPublic, tags, mediaUrl, content } = pint;
    const [liveTimeLeft, setLiveTimeLeft] = useState('');
    
    const calculateTimeLeft = (targetDate) => {
        const now = new Date();
        const target = new Date(targetDate);

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
        const interval = setInterval(() => {
        const updated = calculateTimeLeft(openDate);
        setLiveTimeLeft(updated);
        }, 1000);

        return () => clearInterval(interval);
    }, [openDate]);

    const isOpened = liveTimeLeft === '오픈 가능';

    return (
        <Overlay onClick={onClose}>
            <Wrapper onClick={(e) => e.stopPropagation()}>
                <ContentWrapper>
                    <Label>핀트 이름</Label>
                    <Value>{title}</Value>

                    <Label>남은 시간</Label>
                    <Value>{liveTimeLeft}</Value>

                    <Label>공개 여부</Label>
                    <Value>{isPublic ? '공개' : '비공개'}</Value>

                    <Label>태그된 친구</Label>
                    <Value>
                        {Array.isArray(tags) && tags.filter((t) => t.trim() !== '').length > 0
                            ? tags.filter((t) => t.trim() !== '').join(', ')
                            : '없음'}
                    </Value>

                    {isOpened && (
                        <>
                            <Label>첨부파일</Label>
                            <Value highlight>
                                {mediaUrl ? (
                                <a href={`http://localhost:4000${mediaUrl}`} target="_blank" rel="noopener noreferrer">
                                    파일 보기
                                </a>
                                ) : '없음'}
                            </Value>

                            <Label>내용</Label>
                            <Value highlight>{content || '없음'}</Value>
                        </>
                    )}
                </ContentWrapper>

                <ButtonWrapper>
                    <CloseButton onClick={onClose}>닫기</CloseButton>
                </ButtonWrapper>
            </Wrapper>
        </Overlay>
    );
}

export default TimePintViewPopup;