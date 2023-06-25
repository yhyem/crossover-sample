import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.svg";
import logout from "../assets/images/btn-logout.svg";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token") ? true : false;

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <HeaderBlock>
      <Link to="/main">
        <Logo src={logo} />
      </Link>
      {isLogin && <LogoutButton src={logout} onClick={onLogout} />}
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

const LogoutButton = styled.img`
  float: right;
  margin: 42px 363px 42px 0;
`;
