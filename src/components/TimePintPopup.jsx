import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: absolute;
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
    align-items: center;
    gap: 12px;
`;

const Label = styled.label`
    width: 500px;
    font-size: 20px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 500px;
    background: #E9E9E9;
    max-width: 480px;
    font-size: 16px;
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    padding: 14px;
    border: none;
    border-radius: 8px;

    &:focus {
    outline: none;
    }
    
    &::placeholder {
        color: #A1A1A1;
    }
`;

const Textarea = styled.textarea`
    width: 488px;
    height: 100px;
    font-size: 16px;
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    background: #E9E9E9;
    border: none;
    border-radius: 8px;
    padding: 12px;
    resize: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #A1A1A1;
    }
`;

const ToggleWrapper = styled.div`
    display: flex;
    width: 500px;
    height: 40px;
    background: #E9E9E9;
    padding: 4px 5px;
    border-radius: 8px;
    overflow: hidden;
`;

const ToggleOption = styled.button`
    flex: 1;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    background: ${({ active }) => (active ? 'white' : 'transparent')};
    border: none;
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 36px;
`;

const CancelButton = styled.button`
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

const SubmitButton = styled.button`
    background: #6DEBEE;
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

const TimePintPopup = ({ onClose }) => {
    const [isPublic, setIsPublic] = useState(true);

    return (
        <Overlay onClick={onClose}>
            <Wrapper onClick={(e) => e.stopPropagation()}>
                <ContentWrapper>
                    <Label>핀트 이름</Label>
                    <Input placeholder="핀트 이름을 입력하세요." />
                    
                    <Label>오픈 시간</Label>
                    <Input placeholder="시간대를 입력하세요." />

                    <Label>공개 여부</Label>
                    <ToggleWrapper>
                        <ToggleOption active={isPublic} onClick={() => setIsPublic(true)}>공개</ToggleOption>
                        <ToggleOption active={!isPublic} onClick={() => setIsPublic(false)}>비공개</ToggleOption>
                    </ToggleWrapper>
                    
                    <Label>친구 태그</Label>
                    <Input placeholder="친구 검색" />

                    <Label>사진 및 동영상</Label>
                    <Input type="file" />

                    <Label>내용</Label>
                    <Textarea placeholder="타임 핀트에 담을 메시지를 입력하세요." />
                </ContentWrapper>

                <ButtonWrapper>
                    <CancelButton onClick={onClose}>취소</CancelButton>
                    <SubmitButton>완료</SubmitButton>
                </ButtonWrapper>
            </Wrapper>
        </Overlay>
    );
}

export default TimePintPopup;