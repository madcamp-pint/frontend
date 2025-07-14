import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import mainDarkgray from '../assets/images/sidebar/main_darkgray.png';
import mainWhite from '../assets/images/sidebar/main_white.png';
import placeDarkgray from '../assets/images/sidebar/place_darkgray.png';
import placeWhite from '../assets/images/sidebar/place_white.png';
import timeDarkgray from '../assets/images/sidebar/time_darkgray.png';
import timeWhite from '../assets/images/sidebar/time_white.png';
import userDarkgray from '../assets/images/sidebar/user_darkgray.png';
import userWhite from '../assets/images/sidebar/user_white.png';
import logoutDarkgray from '../assets/images/sidebar/logout_darkgray.png';
import logoutWhite from '../assets/images/sidebar/logout_white.png';

const Wrapper = styled.div`
    width: 80px;
    height: 100vh;
    background-color: #121212;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const IconGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    outline: none;
    margin: 32px 0;
    cursor: pointer;

    img {
        width: 32px;
        height: 32px;
        object-fit: contain;
        transition: filter 0.3s ease;
    }

    &:hover img {
        filter: brightness(1.5);
    }

    &:focus {
        outline: none;
    }
`;

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const topList = [
        { path: '/main', darkgray: mainDarkgray, white: mainWhite },
        { path: '/place', darkgray: placeDarkgray, white: placeWhite },
        { path: '/time', darkgray: timeDarkgray, white: timeWhite },
    ];

    const bottomList = [
        { path: '/mypage', darkgray: userDarkgray, white: userWhite },
        { path: '/logout', darkgray: logoutDarkgray, white: logoutWhite },
    ];

    const renderIcons = (list) =>
        list.map(({ path, darkgray, white }) => (
            <IconButton key={path} onClick={() => navigate(path)}>
                <img src={location.pathname === path ? white : darkgray} />
            </IconButton>
        ));

    return (
        <Wrapper>
            {/* top : main, place, time */}
            <IconGroup>{renderIcons(topList)}</IconGroup>
            {/* bottom : mypage, logout */}
            <IconGroup>{renderIcons(bottomList)}</IconGroup>
        </Wrapper>
    );
}

export default Sidebar;