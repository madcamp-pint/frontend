import React from 'react';
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
  background: #E9E9E9;
  border-radius: 8px;
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
  return (
    <Overlay onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <ContentWrapper>
          <Label>핀트 이름</Label>
          <Value>{pint.title}</Value>

          <Label>남은 시간</Label>
          <Value>{pint.timeLeft}</Value>

          <Label>공개 여부</Label>
          <Value>공개/비공개</Value>

          <Label>태그된 친구</Label>
          <Value>. . . . . .</Value>

          <Label>첨부파일</Label>
          <Value>. . . . . .</Value>

          <Label>내용</Label>
          <Value>. . . . . .</Value>
        </ContentWrapper>

        <ButtonWrapper>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </ButtonWrapper>
      </Wrapper>
    </Overlay>
  );
}

export default TimePintViewPopup;