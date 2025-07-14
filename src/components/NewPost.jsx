import React from 'react';

import { ReactComponent as EntireBox } from '../assets/images/NewPost_svg/entire_box.svg';
import { ReactComponent as IconUploadPlusIcon } from '../assets/images/NewPost_svg/upload_plus_icon.svg';


const NewPost = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'lightgray', border: '2px solid blue' }}>
      <EntireBox style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
      <IconUploadPlusIcon style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '2px solid red' }} />
      {/* NewPostPopup 컴포넌트 */}
    </div>
  );
};

export default NewPost;


