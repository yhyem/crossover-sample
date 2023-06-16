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
    activeColor,
  } = props;
  return (
    <>
      <ButtonBlock
        width={setWidth}
        height={setHeight}
        active={changeBtn}
        disabled={isDisabled}
        fontSize={fontSize}
        backcolor={backColor}
        activecolor={activeColor}
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
  background-color: ${({ active, backcolor, activecolor }) =>
    active === "true" ? activecolor : backcolor};
  color: #ffffff;
  font-weight: 600;
  line-height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: 25px;
`;
