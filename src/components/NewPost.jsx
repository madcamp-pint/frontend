import React from "react";
import styled from "styled-components";

import mText1 from "../assets/images/NewPost_png/10m_text.png";
import mText2 from "../assets/images/NewPost_png/50m_text.png";
import mText from "../assets/images/NewPost_png/100m_text.png";
import IMG8299Png from "../assets/images/NewPost_png/IMG_8299.png.png";
import VID1349Mp4 from "../assets/images/NewPost_png/VID_1349.mp4.png";
import captionInstruction from "../assets/images/NewPost_png/caption_instruction.png";
import captionTitle from "../assets/images/NewPost_png/caption_title.png";
import image2 from "../assets/images/NewPost_png/이연재.png";
import image from "../assets/images/NewPost_png/핀트 이름을 입력하세요.png";
import locationHintText from "../assets/images/NewPost_png/location_hint_text.png";
import locationText from "../assets/images/NewPost_png/location_text.png";
import locationTitle from "../assets/images/NewPost_png/location_title.png";
import publicPrivateText from "../assets/images/NewPost_png/public_private_text.png";
import publicPublicText from "../assets/images/NewPost_png/public_public_text.png";
import publicTitle from "../assets/images/NewPost_png/public_title.png";
import rectangle240652340 from "../assets/images/NewPost_png/Rectangle 240652340.png";
import rectangle240652343 from "../assets/images/NewPost_png/Rectangle 240652343.png";
import tagEntireBox from "../assets/images/NewPost_png/tag_entire_box.png";
import tagFriendBox from "../assets/images/NewPost_png/tag_friend_box.png";
import tagFriendId from "../assets/images/NewPost_png/tag_friend_id.png";
import tagFriendName from "../assets/images/NewPost_png/tag_friend_name.png";
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
import publicSelectedBox from "../assets/images/NewPost_png/public_selected_box.png";
import unlockEntireBox from "../assets/images/NewPost_png/unlock_entire_box.png";
import unlockSelectedBox from "../assets/images/NewPost_png/unlock_selected_box.png";

// styled-components
const ComponentWrapper = styled.div`
  height: 1148px;
  width: 433px;
  overflow-x: hidden;
`;

const OverlapGroup = styled.div`
  background-image: url(${entireBox});
  background-size: 105% 105%;
  height: 1148px;
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
  top: 653px;
  width: 95px;
`;

const CaptionTitle = styled.img`
  height: 15px;
  left: 55px;
  position: absolute;
  top: 794px;
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
`;

const LocationText = styled.img`
  height: 14px;
  left: 15px;
  position: absolute;
  top: 16px;
  width: 196px;
`;

const LocationHintTextWrapper = styled.div`
  background-image: url(${locationHintBox});
  background-size: 100% 100%;
  height: 55px;
  left: 45px;
  position: absolute;
  top: 180px;
  width: 345px;
`;

const LocationHintText = styled.img`
  height: 16px;
  left: 19px;
  position: absolute;
  top: 20px;
  width: 191px;
`;

const Div = styled.div`
  height: 80px;
  left: 46px;
  position: absolute;
  top: 678px;
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
  top: 826px;
  width: 346px;
`;

const CaptionInstruction = styled.img`
  height: 14px;
  left: 28px;
  position: absolute;
  top: 23px;
  width: 138px;
`;

const Overlap2 = styled.div`
  background-image: url(${publicEntireBox});
  background-size: 100% 100%;
  height: 47px;
  left: 51px;
  position: absolute;
  top: 431px;
  width: 337px;
`;

const PublicPublicTextWrapper = styled.div`
  background-image: url(${publicSelectedBox});
  background-size: 100% 100%;
  height: 41px;
  left: 3px;
  position: absolute;
  top: 3px;
  width: 164px;
`;

const PublicPublicText = styled.img`
  height: 14px;
  left: 69px;
  position: absolute;
  top: 13px;
  width: 27px;
`;

const PublicPrivateText = styled.img`
  height: 14px;
  left: 224px;
  position: absolute;
  top: 16px;
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

const ElementTextWrapper = styled.div`
  background-image: url(${unlockSelectedBox});
  background-size: 100% 100%;
  height: 41px;
  left: 3px;
  position: absolute;
  top: 3px;
  width: 109px;
`;

const ElementText = styled.img`
  height: 12px;
  left: 39px;
  position: absolute;
  top: 15px;
  width: 28px;
`;

const ElementMText = styled.img`
  height: 12px;
  left: 153px;
  position: absolute;
  top: 18px;
  width: 29px;
`;

const ElementText2 = styled.img`
  height: 12px;
  left: 262px;
  position: absolute;
  top: 18px;
  width: 36px;
`;

const Overlap4 = styled.div`
  height: 28px;
  left: 47px;
  position: absolute;
  top: 589px;
  width: 127px;
`;

const TagFriendBox = styled.img`
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 65px;
`;

const TagFriendName = styled.img`
  height: 10px;
  left: 18px;
  position: absolute;
  top: 9px;
  width: 28px;
`;

const Rectangle2 = styled.img`
  height: 28px;
  left: 62px;
  position: absolute;
  top: 0;
  width: 65px;
`;

const Img2 = styled.img`
  height: 10px;
  left: 80px;
  position: absolute;
  top: 9px;
  width: 28px;
`;


// Component
export const Component = () => {
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

        <Img alt="Img" src={image} />
        <Vector2 alt="Vector" src={vector13892} />
        <LocationTitle alt="Location title" src={locationTitle} />
        <UnlockTitle alt="Unlock title" src={unlockTitle} />
        <PublicTitle alt="Public title" src={publicTitle} />
        <TagTitle alt="Tag title" src={tagTitle} />
        <UploadTitle alt="Upload title" src={uploadTitle} />
        <CaptionTitle alt="Caption title" src={captionTitle} />

        <LocationTextWrapper>
          <LocationText alt="Location text" src={locationText} />
        </LocationTextWrapper>

        <LocationHintTextWrapper>
          <LocationHintText alt="Location hint text" src={locationHintText} />
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

        <Overlap2>
          <PublicPublicTextWrapper>
            <PublicPublicText alt="Public public text" src={publicPublicText} />
          </PublicPublicTextWrapper>
          <PublicPrivateText alt="Public private text" src={publicPrivateText} />
        </Overlap2>

        <Overlap3>
          <ElementTextWrapper>
            <ElementText alt="Element text" src={mText1} />
          </ElementTextWrapper>
          <ElementMText alt="Element text" src={mText2} />
          <ElementText2 alt="Element text" src={mText} />
        </Overlap3>

        <Overlap4>
          <TagFriendBox alt="Tag friend box" src={tagFriendBox} />
          <TagFriendName alt="Tag friend name" src={tagFriendName} />
          <Rectangle2 alt="Rectangle" src={rectangle240652340} />
          <Img2 alt="Img" src={image2} />
        </Overlap4>
      </OverlapGroup>
    </ComponentWrapper>
  );
};
