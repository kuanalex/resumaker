import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";

const Sidebar = ({ personalInfo }) => {
  return (
    <SidebarWrapper>
      <Section title="Personal Details" contrastTitle direction="column">
        <Subsection title="Address">{personalInfo.address}</Subsection>
        <Subsection title="Phone Number">{personalInfo.phoneNumber}</Subsection>
        <Subsection title="Email">{personalInfo.email}</Subsection>
      </Section>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  padding: 2rem;
  background-color: #ddd;
`;

export default Sidebar;