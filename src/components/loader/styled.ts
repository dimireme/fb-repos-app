import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    rgba(255, 255, 255, 1) 16%,
    rgba(255, 255, 255, 0.5) 100%
  );
  z-index: 20;
`;
Container.displayName = 'Container';

const rotate = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(360deg); }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  transition: 2s;
  border-bottom: none;
  box-sizing: border-box;
  border-right: none;
  animation: ${rotate} 0.5s linear infinite;
`;
Circle.displayName = 'Circle';
