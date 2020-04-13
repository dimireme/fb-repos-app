import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 32px;
`;
Container.displayName = 'Container';

export const Item = styled.span<{ isActive?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: ${(props) => (props.isActive ? '1px solid #5e35b1' : 'none')};
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  line-height: 40px;
  &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    color: #5e35b1;
    path {
      fill: #5e35b1;
    }
  }
`;
Item.displayName = 'Item';

export const ArrowLeft = styled.div`
  width: 10px;
  height: 10px;
  border-top: 2px solid #5e35b1;
  border-left: 2px solid #5e35b1;
  transform: rotate(-45deg);
`;
ArrowLeft.displayName = 'ArrowLeft';

export const ArrowRight = styled(ArrowLeft)`
  transform: rotate(135deg);
`;
