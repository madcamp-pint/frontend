import React from 'react';
import './NewPost.css';

// index.js 파일에서 svg 객체를 import 합니다.
import { svg } from '../assets/images/NewPost_svg';

const NewPost = () => {
  return (
    <div className="new-post-container">
      {/* svg 객체에서 entireBox를 찾아 배경으로 사용합니다. */}
      <img src={svg.entireBox} alt="배경" className="background-svg" />

      <div className="content-wrapper">
        {/* 이제 svg.파일이름 형식으로 다른 아이콘들을 추가할 수 있습니다. */}
        {/* 예: <img src={svg.uploadTitle} alt="업로드" /> */}
      </div>
    </div>
  );
};

export default NewPost;