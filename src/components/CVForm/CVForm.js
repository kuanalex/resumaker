import React from "react";
import styled from "styled-components";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Button from "../Utils/Button";

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onChangeProject,
  onAddProject,
  onDeleteProject,
  onLoadExample,
  onReset,
}) => {
  return (
    <CVFormWrapper>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Experience
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <Project
        project={cv.project}
        onChange={onChangeProject}
        onAdd={onAddProject}
        onDelete={onDeleteProject}
      />
      <Education
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />

      <Button text="Load Example CV" onClick={onLoadExample} primary></Button>
      <Button text="Reset Form" onClick={onReset} red></Button>
      
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: #ccc;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default CVForm;