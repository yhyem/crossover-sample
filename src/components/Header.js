import { styled } from "styled-components";
import { useState } from "react";

import logo from "../assets/images/logo.svg";
import logout from "../assets/images/btn-logout.svg";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <HeaderBlock>
      <Logo src={logo} />
      {isLogin && <Logout src={logout} />}
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

const Logout = styled.img`
  float: right;
  margin: 42px 363px 42px 0;
`;
