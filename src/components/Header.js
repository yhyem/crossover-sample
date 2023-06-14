import { styled } from "styled-components";

import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <HeaderBlock>
      <Logo src={logo}></Logo>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.div`
  width: 100%;
  height: 116px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY};
`;

const Logo = styled.img`
  margin: 41px 0 41px 363px;
`;
