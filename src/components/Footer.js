import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Made by kuanalex</p>
      <Link href="https://github.com/kuanalex" target="_blank">
        <FaGithub />
      </Link>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: #2b579a;
  color: #ffffff;
`;

const Link = styled.a`
  position: relative;
  top: 0.2rem;
  margin-left: 1rem;
  color: #ccc;
  font-size: 2rem;
  &:hover {
    color: #ffffff;
  }
  &:active {
    color: #ffffff;
  }
`;

export default Footer;