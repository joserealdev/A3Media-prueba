import styled from "styled-components";
import Dropdown from "./Dropdown";

const HeaderStyled = styled.header`
  display: flex;
  padding: 20px;
  background-color: var(--primary);
`;

const Header = () => (
  <HeaderStyled>
    <Dropdown />
  </HeaderStyled>
);

export default Header;
