import React from 'react';
import styled from 'styled-components';
import { FaHome, FaMapMarkerAlt, FaEnvelope, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    width: 80px;
    height: 100vh;
    background-color: #121212;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top; 20px;
`;

const IconGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    outline: none;
    color: #777777;
    font-size: 22px;
    margin: 20px 0;
    cursor: pointer;

    &:hover {
        color: #FAFAFA;
    }

    &:focus {
        outline: none;
        color: #FAFAFA;
    }
`;

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <IconGroup>
                {/* 메인페이지 */}
                <IconButton onClick={() => navigate('/main')}>
                    <FaHome />
                </IconButton>
                {/* placePint 페이지 */}
                <IconButton onClick={() => navigate('/place')}>
                    <FaMapMarkerAlt />
                </IconButton>
                {/* timePint 페이지 */}
                <IconButton onClick={() => navigate('/time')}>
                    <FaEnvelope />
                </IconButton>
            </IconGroup>
            <IconGroup>
                {/* 마이페이지 */}
                <IconButton onClick={() => navigate('/mypage')}>
                    <FaUser />
                </IconButton>
                {/* 로그아웃 */}
                <IconButton onClick={() => navigate('/logout')}>
                    <FaSignOutAlt />
                </IconButton>
            </IconGroup>
        </Wrapper>
    );
}

export default Sidebar;