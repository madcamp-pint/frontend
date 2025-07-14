import React from 'react';
import IconUploadPlusIcon from '../assets/images/NewPost_png/upload_plus_icon.png';

const NewPost = () => {
  const newPostStyle = {
    position: 'relative',
    width: '433px',
    height: '1148px',
    borderRadius: '18px',
    background: '#FFF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    margin: 'auto', // 스크롤 컨테이너 안에서 중앙 정렬
  };

  return (
    <div style={newPostStyle}>
      <img src={IconUploadPlusIcon} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} alt="Upload Plus Icon" />
      {/* NewPostPopup 컴포넌트 */}
    </div>
  );
};

export default NewPost;

export default NewPost;
