import { styled } from "styled-components";

const Button = (props) => {
  const {
    setWidth,
    setHeight,
    children,
    changeBtn,
    isDisabled,
    fontSize,
    backColor,
  } = props;
  return (
    <>
      <ButtonBlock
        width={setWidth}
        height={setHeight}
        active={changeBtn}
        disabled={isDisabled}
        fontSize={fontSize}
        backColor={backColor}
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
  background-color: ${({ active, backColor, theme }) =>
    active === "true" ? theme.colors.BLUE2 : backColor};
  color: #ffffff;
  font-weight: 600;
  line-height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: 25px;
`;
