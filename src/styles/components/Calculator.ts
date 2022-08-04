import styled from 'styled-components';

export const buttonSize = 64;
export const gap = 10;

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
  position: relative;

  > span {
    position: absolute;
    top: 4px;
    left: 12px;
  }
  
  * {
    color: #1b1b1b;
  }

  h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-areas:
    'topActions topActions topActions topActions'
    'numbers numbers numbers rightActions';
  margin-top: ${gap}px;
  width: ${(gap * 3) + (buttonSize * 4)}px;
`;

export const TopActions = styled.div`
  grid-area: topActions;
  gap: ${gap}px;
  margin-bottom: ${gap}px;
  display: flex;
`;

export const Numbers = styled.div`
  margin-right: ${gap}px;
  gap: ${gap}px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-width: ${buttonSize * 3 + (gap * 2)}px;
  justify-content: center;
`;

export const RightActions = styled.div`
  grid-area: rightActions;
  gap: ${gap}px;
  display: flex;
  flex-direction: column;
  height: ${buttonSize *4 + (gap * 3)}px;
`;
