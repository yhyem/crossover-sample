import { styled } from "styled-components";

const Button = (props) => {
  const { setWidth, setHeight, children, changeBtn } = props;
  return (
    <>
      <ButtonBlock
        width={setWidth}
        height={setHeight}
        active={changeBtn.toString()}
      >
        {children}
      </ButtonBlock>
    </>
  );
};

export default Button;

const ButtonBlock = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ active, theme }) =>
    active === "true" ? theme.colors.BLUE2 : theme.colors.BLUE1};
  color: #ffffff;
  font-weight: 600;
  line-height: ${({ height }) => height};
  font-size: 36px;
  border-radius: 25px;
`;
