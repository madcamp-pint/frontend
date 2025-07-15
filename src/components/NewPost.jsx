import React, { useState, useRef } from "react";
import styled from "styled-components";

import mText1 from "../assets/images/NewPost_png/10m_text.png";
import mText2 from "../assets/images/NewPost_png/50m_text.png";
import mText from "../assets/images/NewPost_png/100m_text.png";

import captionInstruction from "../assets/images/NewPost_png/caption_instruction.png";
import captionTitle from "../assets/images/NewPost_png/caption_title.png";
import image from "../assets/images/NewPost_png/핀트 이름을 입력하세요.png";
import locationHintTextImg from "../assets/images/NewPost_png/location_hint_text.png";
import locationTitle from "../assets/images/NewPost_png/location_title.png";
import publicPrivateTextImg from "../assets/images/NewPost_png/public_private_text.png";
import publicPublicTextImg from "../assets/images/NewPost_png/public_public_text.png";
import publicTitle from "../assets/images/NewPost_png/public_title.png";
import rectangle240652343 from "../assets/images/NewPost_png/Rectangle 240652343.png";
import tagEntireBox from "../assets/images/NewPost_png/tag_entire_box.png";
import tagFriendId from "../assets/images/NewPost_png/tag_friend_id.png";
import tagPrivateText from "../assets/images/NewPost_png/tag_private_text.png";
import tagSearchIcon from "../assets/images/NewPost_png/tag_search_icon.png";
import tagSelectedBox from "../assets/images/NewPost_png/tag_selected_box.png";
import tagTitle from "../assets/images/NewPost_png/tag_title.png";
import unlockTitle from "../assets/images/NewPost_png/unlock_title.png";
import uploadBox from "../assets/images/NewPost_png/upload_box.png";
import uploadMax from "../assets/images/NewPost_png/upload_max.png";
import uploadPlusIcon from "../assets/images/NewPost_png/upload_plus_icon.png";
import uploadTitle from "../assets/images/NewPost_png/upload_title.png";
import vector13892 from "../assets/images/NewPost_png/Vector 13892.png";
import vector13893 from "../assets/images/NewPost_png/Vector 13893.png";

import entireBox from "../assets/images/NewPost_png/entire_box.png";
import locationAddrBox from "../assets/images/NewPost_png/location_addr_box.png";
import locationHintBox from "../assets/images/NewPost_png/location_hint_box.png";
import captionBox from "../assets/images/NewPost_png/caption_box.png";
import publicEntireBox from "../assets/images/NewPost_png/public_entire_box.png";
import publicSelectedBoxImg from "../assets/images/NewPost_png/public_selected_box.png";
import unlockEntireBox from "../assets/images/NewPost_png/unlock_entire_box.png";
import unlockSelectedBoxImg from "../assets/images/NewPost_png/unlock_selected_box.png";
import rectangle240652345 from "../assets/images/NewPost_png/Rectangle 240652345.png";

// styled-components
const ComponentWrapper = styled.div`
  height: 1084px;
  width: 433px;
  overflow-x: hidden;
  padding-bottom: 47px;
  position: relative;
  /* Hide scrollbar for all browsers */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const OverlapGroup = styled.div`
  background-image: url(${entireBox});
  background-size: 105% 105%;
  height: 1084px;
  left: -4px;
  position: relative;
  width: 433px;
`;

const Overlap = styled.div`
  height: 47px;
  left: 51px;
  position: absolute;
  top: 541px;
  width: 337px;
`;

const Vector = styled.img`
  height: 1px;
  left: 183px;
  position: absolute;
  top: 6px;
  width: 138px;
`;

const TagEntireBox = styled.img`
  height: 47px;
  left: 0;
  position: absolute;
  top: 0;
  width: 337px;
`;

const TagSelectedBox = styled.img`
  height: 41px;
  left: 170px;
  position: absolute;
  top: 3px;
  width: 164px;
`;

const TagPrivateText = styled.img`
  height: 14px;
  left: 55px;
  position: absolute;
  top: 16px;
  width: 58px;
`;

const TagFriendId = styled.img`
  height: 11px;
  left: 211px;
  position: absolute;
  top: 17px;
  width: 103px;
`;

const TagSearchIcon = styled.img`
  height: 12px;
  left: 186px;
  position: absolute;
  top: 17px;
  width: 12px;
`;

const Img = styled.img`
  height: 27px;
  left: 49px;
  position: absolute;
  top: 39px;
  width: 285px;
  cursor: pointer;
`;

const PintNameInput = styled.input`
  height: 27px;
  left: 49px;
  position: absolute;
  top: 39px;
  width: 285px;
  background-color: transparent;
  border: none;
  font-size: 27px;
  color: #000;
  padding-left: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const PintNameDisplay = styled.div`
  height: 27px;
  left: 49px;
  position: absolute;
  top: 39px;
  width: 285px;
  font-size: 27px;
  color: #000;
  padding-left: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Vector2 = styled.img`
  height: 1px;
  left: 50px;
  object-fit: cover;
  position: absolute;
  top: 76px;
  width: 337px;
`;

const LocationTitle = styled.img`
  height: 15px;
  left: 51px;
  position: absolute;
  top: 102px;
  width: 27px;
`;

const UnlockTitle = styled.img`
  height: 15px;
  left: 51px;
  position: absolute;
  top: 281px;
  width: 94px;
`;

const PublicTitle = styled.img`
  height: 15px;
  left: 52px;
  position: absolute;
  top: 405px;
  width: 61px;
`;

const TagTitle = styled.img`
  height: 15px;
  left: 52px;
  position: absolute;
  top: 512px;
  width: 61px;
`;

const UploadTitle = styled.img`
  height: 15px;
  left: 51px;
  position: absolute;
  top: 622px;
  width: 95px;
`;

const CaptionTitle = styled.img`
  height: 15px;
  left: 55px;
  position: absolute;
  top: 763px;
  width: 62px;
`;

const CaptionTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: #000;
  box-sizing: border-box;
  resize: none;
  overflow-y: auto;
  padding: 23px;
  margin: 0;
  line-height: 1.5;
  vertical-align: top;
  &:focus {
    outline: none;
  }
`;

const CaptionDisplay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #000;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  box-sizing: border-box;
  padding: 23px;
  margin: 0;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
`;

const CaptionInput = styled.input`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: #000;
  box-sizing: border-box;
  /* padding-left removed for full width */

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const LocationTextWrapper = styled.div`
  background-image: url(${locationAddrBox});
  background-size: 100% 100%;
  height: 47px;
  left: 49px;
  position: absolute;
  top: 128px;
  width: 337px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
`;

const LocationAddressText = styled.div`
  font-size: 16px;
  color: #333;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LocationHintTextWrapper = styled.div`
  background-image: url(${locationHintBox});
  background-size: 100% 100%;
  height: 55px;
  left: 45px;
  position: absolute;
  top: 180px;
  width: 345px;
  position: relative;
`;

const LocationHintPlaceholder = styled.img`
  height: 16px;
  left: 19px;
  position: absolute;
  top: 20px;
  width: 191px;
  cursor: pointer;
`;

const LocationHintInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: transparent;
  border: none;
  padding: 20px 19px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #aaa;
  }
`;

const LocationHintDisplay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px 19px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Div = styled.div`
  height: 80px;
  left: 46px;
  position: absolute;
  top: 647px;
  width: 346px;
`;

const UploadBox = styled.img`
  height: 55px;
  left: 0;
  position: absolute;
  top: 0;
  width: 346px;
`;

const UploadFileNameBox = styled.div`
  width: 107px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 3px;
  margin-left: 4px;
`;

const DeleteButton = styled.div`
  display: flex;
  width: 21px;
  height: 11px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #D1D1D1;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 11px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  cursor: pointer;
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  z-index: 10;
`;







const UploadMax = styled.img`
  height: 10px;
  left: 155px; /* Adjusted position */
  position: absolute;
  top: 23px;
  width: 61px;
`;

const UploadPlusIcon = styled.img`
  height: 10px;
  left: 140px; /* Adjusted position */
  position: absolute;
  top: 23px;
  width: 9px;
`;



const UploadedFileNameText = styled.div`
  display: flex;
  width: 79px;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 11px;
  font-style: normal;
  font-weight: 100;
  line-height: 11px; /* Adjusted line-height */
`;

const UploadedFilesContainer = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0px; /* Adjusted gap for no vertical spacing */
  padding: 0; /* Remove horizontal padding for alignment */
  box-sizing: border-box;
`;

const CaptionInstructionWrapper = styled.div`
  background-image: url(${captionBox});
  background-size: 100% 100%;
  height: 280px;
  left: 46px;
  position: absolute;
  top: 792px;
  width: 346px;
`;

const CaptionInstruction = styled.img`
  height: 14px;
  left: 28px;
  position: absolute;
  top: 23px;
  width: 138px;
`;

const VisibilityWrapper = styled.div`
  background-image: url(${publicEntireBox});
  background-size: 100% 100%;
  height: 47px;
  left: 51px;
  position: absolute;
  top: 431px;
  width: 337px;
`;

const VisibilitySelectedBox = styled.img`
  height: 41px;
  width: 164px;
  position: absolute;
  top: 3px;
  left: ${({ 'data-visibility': visibility }) => (visibility === 'public' ? '3px' : '170px')};
  transition: left 0.3s ease-in-out;
`;

const VisibilityText = styled.img`
  position: absolute;
  top: 16px;
  height: 14px;
  cursor: pointer;
  z-index: 1;
`;

const PublicText = styled(VisibilityText)`
  left: 69px;
  width: 27px;
`;

const PrivateText = styled(VisibilityText)`
  left: 224px;
  width: 40px;
`;

const Overlap3 = styled.div`
  background-image: url(${unlockEntireBox});
  background-size: 100% 100%;
  height: 47px;
  left: 51px;
  position: absolute;
  top: 316px;
  width: 337px;
`;

const UnlockSelectedBox = styled.img`
  height: 41px;
  position: absolute;
  top: 3px;
  width: 109px;
  left: ${({ 'data-radius': radius }) => {
    if (radius === 50) return '113px';
    if (radius === 100) return '226px';
    return '3px';
  }};
  transition: left 0.3s ease-in-out;
`;

const RadiusText = styled.img`
  height: 12px;
  position: absolute;
  top: 18px;
  cursor: pointer;
  z-index: 1;
`;

const Radius10m = styled(RadiusText)`
  left: 39px;
  width: 28px;
`;

const Radius50m = styled(RadiusText)`
  left: 153px;
  width: 29px;
`;

const Radius100m = styled(RadiusText)`
  left: 262px;
  width: 36px;
`;

const SaveButton = styled.button`
  width: 83px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 15px;
  background: rgba(109, 235, 238, 0.50);
  border: none;
  color: #222;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const SaveButtonText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`;

const BottomButtonRow = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding: 0 16px 16px 16px;
  box-sizing: border-box;
  background: transparent;
`;

const CancelButton = styled.button`
  width: 83px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 15px;
  background: url(${rectangle240652345}) no-repeat center/cover;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
`;

const CancelButtonText = styled.span`
  display: flex;
  width: 46px;
  height: 15px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`;

// Component
export const Component = ({ onClose, address, user, position }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [pintName, setPintName] = useState("");
  const [selectedRadius, setSelectedRadius] = useState(10);
  const [isEditingHint, setIsEditingHint] = useState(false);
  const [locationHint, setLocationHint] = useState("");
  const [visibility, setVisibility] = useState('public');
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [caption, setCaption] = useState("");
  const [isEditingCaption, setIsEditingCaption] = useState(false);

  // 저장 핸들러
  const handleSave = async () => {
    if (!pintName || !address || selectedFiles.length === 0) {
      alert('핀트 이름, 주소, 파일을 모두 입력해주세요.');
      return;
    }
    const formData = new FormData();
    formData.append('pintName', pintName);
    formData.append('radius', selectedRadius);
    formData.append('locationHint', locationHint);
    formData.append('visibility', visibility);
    formData.append('caption', caption);
    formData.append('address', address);
    if (position) {
      formData.append('latitude', position.lat);
      formData.append('longitude', position.lng);
    }
    if (user) {
      formData.append('creator', user.kakaoId);
      formData.append('nickname', user.nickname || user.displayName || '');
      formData.append('profileImage', user.profileImage || user._json?.properties?.profile_image || '');
      formData.append('thumbnailImage', user.thumbnailImage || user._json?.properties?.thumbnail_image || '');
      formData.append('provider', user.provider || '');
      formData.append('displayName', user.displayName || '');
    }
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });
    try {
      const response = await fetch('http://localhost:4000/api/pints', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
      if (!response.ok) throw new Error('저장 실패');
      // 입력값 초기화 및 모달 닫기
      console.log('핀트 저장 성공!');
      setPintName("");
      setSelectedRadius(10);
      setIsEditingHint(false);
      setLocationHint("");
      setVisibility('public');
      setSelectedFiles([]);
      setCaption("");
      setIsEditingCaption(false);
      onClose();
    } catch (err) {
      alert('저장에 실패했습니다. 다시 시도해주세요.');
      console.error('핀트 저장 에러:', err);
    }
  };

  const handlePintNameClick = () => {
    setIsEditing(true);
  };

  const handlePintNameBlur = () => {
    setIsEditing(false);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    if (files.length > 0) {
      setSelectedFiles(prevFiles => [...prevFiles, ...files]); // Add new files to existing ones
    }
  };

  const handleRemoveFile = (indexToRemove) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  const renderPintName = () => {
    if (isEditing) {
      return (
        <PintNameInput
          type="text"
          value={pintName}
          onChange={(e) => setPintName(e.target.value)}
          onBlur={handlePintNameBlur}
          autoFocus
        />
      );
    }

    if (pintName) {
      return (
        <PintNameDisplay onClick={handlePintNameClick}>
          {pintName}
        </PintNameDisplay>
      );
    }

    return (
      <Img
        alt="핀트 이름을 입력하세요"
        src={image}
        onClick={handlePintNameClick}
      />
    );
  };

  return (
    <ComponentWrapper>
      <OverlapGroup>
        <Overlap>
          <Vector alt="Vector" src={vector13893} />
          <TagEntireBox alt="Tag entire box" src={tagEntireBox} />
          <TagSelectedBox alt="Tag selected box" src={tagSelectedBox} />
          <TagPrivateText alt="Tag private text" src={tagPrivateText} />
          <TagFriendId alt="Tag friend id" src={tagFriendId} />
          <TagSearchIcon alt="Tag search icon" src={tagSearchIcon} />
        </Overlap>

        {renderPintName()}
        <Vector2 alt="Vector" src={vector13892} />
        <LocationTitle alt="Location title" src={locationTitle} />
        <UnlockTitle alt="Unlock title" src={unlockTitle} />
        <PublicTitle alt="Public title" src={publicTitle} />
        <TagTitle alt="Tag title" src={tagTitle} />
        <UploadTitle alt="Upload title" src={uploadTitle} />
        <CaptionTitle alt="Caption title" src={captionTitle} />

        <LocationTextWrapper>
          <LocationAddressText>{address || "주소를 불러오는 중..."}</LocationAddressText>
        </LocationTextWrapper>

        <LocationHintTextWrapper>
          {isEditingHint ? (
            <LocationHintInput
              type="text"
              value={locationHint}
              onChange={(e) => setLocationHint(e.target.value)}
              onBlur={() => setIsEditingHint(false)}
              autoFocus
            />
          ) : locationHint ? (
            <LocationHintDisplay onClick={() => setIsEditingHint(true)}>
              {locationHint}
            </LocationHintDisplay>
          ) : (
            <LocationHintPlaceholder
              alt="Location hint text"
              src={locationHintTextImg}
              onClick={() => setIsEditingHint(true)}
            />
          )}
        </LocationHintTextWrapper>

        <Div onClick={() => fileInputRef.current.click()}>
          <UploadBox alt="Upload box" src={uploadBox} />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            accept="image/*,video/*"
            multiple
          />
          <UploadMax alt="Upload max" src={uploadMax} />
          <UploadPlusIcon alt="Upload plus icon" src={uploadPlusIcon} />
          {selectedFiles.length > 0 && (
            <UploadedFilesContainer>
              {selectedFiles.map((file, index) => (
                <UploadFileNameBox key={index}>
                  <DeleteButton onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering file input click
                    handleRemoveFile(index);
                  }}>x</DeleteButton>
                  <UploadedFileNameText>{file.name}</UploadedFileNameText>
                </UploadFileNameBox>
              ))}
            </UploadedFilesContainer>
          )}
        </Div>

        <CaptionInstructionWrapper>
          {isEditingCaption ? (
            <CaptionTextarea
              value={caption}
              onChange={e => setCaption(e.target.value)}
              onBlur={() => setIsEditingCaption(false)}
              autoFocus
            />
          ) : caption ? (
            <CaptionDisplay onClick={() => setIsEditingCaption(true)}>
              {caption}
            </CaptionDisplay>
          ) : (
            <CaptionInstruction
              alt="Caption instruction"
              src={captionInstruction}
              style={{ cursor: 'pointer', zIndex: 2 }}
              onClick={() => setIsEditingCaption(true)}
            />
          )}
        </CaptionInstructionWrapper>

        <VisibilityWrapper>
          <VisibilitySelectedBox src={publicSelectedBoxImg} data-visibility={visibility} />
          <PublicText src={publicPublicTextImg} onClick={() => setVisibility('public')} />
          <PrivateText src={publicPrivateTextImg} onClick={() => setVisibility('private')} />
        </VisibilityWrapper>

        <Overlap3>
          <UnlockSelectedBox src={unlockSelectedBoxImg} data-radius={selectedRadius} />
          <Radius10m src={mText1} onClick={() => setSelectedRadius(10)} />
          <Radius50m src={mText2} onClick={() => setSelectedRadius(50)} />
          <Radius100m src={mText} onClick={() => setSelectedRadius(100)} />
        </Overlap3>

      </OverlapGroup>
      <BottomButtonRow>
        <CancelButton onClick={onClose}><CancelButtonText>취소</CancelButtonText></CancelButton>
        <SaveButton onClick={handleSave}><SaveButtonText>저장</SaveButtonText></SaveButton>
      </BottomButtonRow>
    </ComponentWrapper>
  );
};