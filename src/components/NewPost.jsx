import React from "react";

// === 이미지 import ===
import mText1 from "../assets/images/NewPost_png/10m_text.png";
import mText2 from "../assets/images/NewPost_png/50m_text.png";
import mText from "../assets/images/NewPost_png/100m_text.png";
import IMG8299Png from "../assets/images/NewPost_png/IMG_8299.png.png";
import VID1349Mp4 from "../assets/images/NewPost_png/VID_1349.mp4.png";
import captionInstruction from "../assets/images/NewPost_png/caption_instruction.png";
import captionTitle from "../assets/images/NewPost_png/caption_title.png";
import pintNameInput from "../assets/images/NewPost_png/핀트 이름을 입력하세요.png";
import leeYeonJae from "../assets/images/NewPost_png/이연재.png";
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
import rectangleBg from "../assets/images/NewPost_png/rectangle-240652323.png";

export default function NewPost() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div
        className="relative"
        style={{
          width: "441px",
          height: "982px",
          backgroundImage: `url(${rectangleBg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute w-[337px] h-[47px] top-[541px] left-[51px]">
          <img
            className="w-[138px] top-1.5 left-[183px] absolute h-px"
            alt="Vector"
            src={vector13893}
          />
          <img className="absolute w-[337px] h-[47px] top-0 left-0" alt="Tag entire box" src={tagEntireBox} />
          <img className="absolute w-[164px] h-[41px] top-[3px] left-[170px]" alt="Tag selected box" src={tagSelectedBox} />
          <img className="absolute w-[58px] h-3.5 top-4 left-[55px]" alt="Tag private text" src={tagPrivateText} />
          <img className="absolute w-[103px] h-[11px] top-[17px] left-[211px]" alt="Tag friend id" src={tagFriendId} />
          <img className="absolute w-3 h-3 top-[17px] left-[186px]" alt="Tag search icon" src={tagSearchIcon} />
        </div>

        <img className="absolute w-[285px] h-[27px] top-[39px] left-[49px]" alt="Image" src={pintNameInput} />
        <img className="w-[337px] top-[76px] left-[50px] object-cover absolute h-px" alt="Vector" src={vector13892} />
        <img className="absolute w-[27px] h-[15px] top-[102px] left-[51px]" alt="Location title" src={locationTitle} />
        <img className="absolute w-[94px] h-[15px] top-[281px] left-[51px]" alt="Unlock title" src={unlockTitle} />
        <img className="absolute w-[61px] h-[15px] top-[405px] left-[52px]" alt="Public title" src={publicTitle} />
        <img className="absolute w-[61px] h-[15px] top-[512px] left-[52px]" alt="Tag title" src={tagTitle} />
        <img className="absolute w-[95px] h-[15px] top-[653px] left-[51px]" alt="Upload title" src={uploadTitle} />
        <img className="absolute w-[62px] h-[15px] top-[794px] left-[55px]" alt="Caption title" src={captionTitle} />

        <div className="absolute w-[337px] h-[47px] top-32 left-[49px]" style={{ backgroundImage: `url(${locationText})`, backgroundSize: "100% 100%" }}>
          <img className="absolute w-[196px] h-3.5 top-4 left-[15px]" alt="Location text" src={locationText} />
        </div>

        <div className="absolute w-[345px] h-[55px] top-[180px] left-[45px]" style={{ backgroundImage: `url(${locationHintText})`, backgroundSize: "100% 100%" }}>
          <img className="absolute w-[191px] h-4 top-5 left-[19px]" alt="Location hint text" src={locationHintText} />
        </div>

        <div className="absolute w-[346px] h-20 top-[678px] left-[46px]">
          <img className="absolute w-[346px] h-[55px] top-0 left-0" alt="Upload box" src={uploadBox} />
          <img className="absolute w-[113px] h-7 top-[52px] left-0" alt="Upload file name box" src={uploadFileNameBox} />
          <img className="absolute w-[68px] h-[11px] top-[62px] left-[23px]" alt="Img png" src={IMG8299Png} />
          <img className="w-[113px] top-[52px] left-[111px] absolute h-7" alt="Rectangle" src={rectangle240652343} />
          <img className="absolute w-[69px] h-[11px] top-[62px] left-[133px]" alt="Vid" src={VID1349Mp4} />
          <img className="absolute w-[61px] h-2.5 top-[23px] left-[145px]" alt="Upload max" src={uploadMax} />
          <img className="absolute w-[9px] h-2.5 top-[23px] left-[130px]" alt="Upload plus icon" src={uploadPlusIcon} />
        </div>

        {/* ...나머지 export 코드도 동일하게 계속 추가 */}
        {/* unlock, public, tag friend box 등등 전부 같은 방식으로 */}

      </div>
    </div>
  );
}
