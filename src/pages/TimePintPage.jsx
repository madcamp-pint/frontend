import React from 'react'
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
`;

const Container = styled.div`
  flex: 1;
  margin: 20px;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
  overflow-y: auto;
`;

const TimePintPage = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <p>TimePintPage</p>
      </Container>
    </Wrapper>
  );
}

export default TimePintPage;