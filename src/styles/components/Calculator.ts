import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 16px;
  width: 320px;
  height: 500px;
  background-color: #ffae70;
  padding: 12px;
`;

export const Display = styled.div`
  background-color: #fdfdfb;
  border-radius: 8px;
  padding: 8px 12px;
  height: 100px;
  display: flex;
  align-items: center;
  
  span {
    color: #1b1b1b;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
  }
`;
