import React, { useState } from "react";
import styled from "styled-components";

import mText1 from "../assets/images/NewPost_png/10m_text.png";
import mText2 from "../assets/images/NewPost_png/50m_text.png";
import mText from "../assets/images/NewPost_png/100m_text.png";
import IMG8299Png from "../assets/images/NewPost_png/IMG_8299.png.png";
import VID1349Mp4 from "../assets/images/NewPost_png/VID_1349.mp4.png";
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
import uploadFileNameBox from "../assets/images/NewPost_png/upload_file_name_box.png";
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

// styled-components
const ComponentWrapper = styled.div`
  height: 1084px;
  width: 433px;
  overflow-x: hidden;
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

const UploadFileNameBox = styled.img`
  height: 28px;
  left: 0;
  position: absolute;
  top: 52px;
  width: 113px;
`;

const ImgPng = styled.img`
  height: 11px;
  left: 23px;
  position: absolute;
  top: 62px;
  width: 68px;
`;

const Rectangle = styled.img`
  height: 28px;
  left: 111px;
  position: absolute;
  top: 52px;
  width: 113px;
`;

const VID = styled.img`
  height: 11px;
  left: 133px;
  position: absolute;
  top: 62px;
  width: 69px;
`;

const UploadMax = styled.img`
  height: 10px;
  left: 145px;
  position: absolute;
  top: 23px;
  width: 61px;
`;

const UploadPlusIcon = styled.img`
  height: 10px;
  left: 130px;
  position: absolute;
  top: 23px;
  width: 9px;
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

// Component
export const Component = ({ onClose, address }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [pintName, setPintName] = useState("");
  const [selectedRadius, setSelectedRadius] = useState(10);
  const [isEditingHint, setIsEditingHint] = useState(false);
  const [locationHint, setLocationHint] = useState("");
  const [visibility, setVisibility] = useState('public');

  const handlePintNameClick = () => {
    setIsEditing(true);
  };

  const handlePintNameBlur = () => {
    setIsEditing(false);
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

        <Div>
          <UploadBox alt="Upload box" src={uploadBox} />
          <UploadFileNameBox alt="Upload file name box" src={uploadFileNameBox} />
          <ImgPng alt="Img png" src={IMG8299Png} />
          <Rectangle alt="Rectangle" src={rectangle240652343} />
          <VID alt="Vid" src={VID1349Mp4} />
          <UploadMax alt="Upload max" src={uploadMax} />
          <UploadPlusIcon alt="Upload plus icon" src={uploadPlusIcon} />
        </Div>

        <CaptionInstructionWrapper>
          <CaptionInstruction alt="Caption instruction" src={captionInstruction} />
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
    </ComponentWrapper>
  );
};