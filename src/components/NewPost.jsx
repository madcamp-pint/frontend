import React from 'react';
import EntireBox from '../assets/images/NewPost_png/entire_box.png';
import IconUploadPlusIcon from '../assets/images/NewPost_png/upload_plus_icon.png';

const NewPost = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'lightgray', border: '2px solid blue' }}>
      <img src={EntireBox} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} alt="Entire Box" />
      <img src={IconUploadPlusIcon} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '2px solid red' }} alt="Upload Plus Icon" />
      {/* NewPostPopup 컴포넌트 */}
    </div>
  );
};

export default NewPost;
