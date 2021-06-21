import React from "react";
import styled from "styled-components";
import { FaFileInvoice } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <FaFileInvoice />
      </Logo>
      <h1>Resumaker App</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #2b579a;
  color: #ffffff;
`;

const Logo = styled.div`
  display: flex;
  margin-right: 1rem;
  font-size: 4rem;
`;

export default Header;