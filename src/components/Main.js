import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import exampleCV from './Utils/exampleCV';
import emptyCV from './Utils/emptyCV';

const Main = () => {
  const [cv, setCv] = useState(emptyCV);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };


  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    }));
  };

  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleChangeProject = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newProject = prevState.project.map((projectItem) => {
        if (projectItem.id === id) {
          return { ...projectItem, [name]: value };
        }
        return projectItem;
      });
      return { ...prevState, project: [...newProject] };
    });
  };

  const handleAddProject = () => {
    setCv((prevState) => ({
      ...prevState,
      project: [
        ...prevState.project,
        {
          id: uuidv4(),
          projectName: '',
          projectDescription: ''
        },
      ],
    }));
  };

  const handleDeleteProject = (id) => {
    setCv((prevState) => {
      const newProject = prevState.project.filter(
        (projectItem) => projectItem.id !== id
      );
      return { ...prevState, project: [...newProject] };
    });
  };


  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          universityName: '',
          city: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
        },
      ],
    }));
  };

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleLoadExample = () => {
    setCv(exampleCV);
  };

  const handleReset = () => {
    setCv(emptyCV);
  };

  return (
    <MainWrapper>
      <CVForm
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onChangeProject={handleChangeProject}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onLoadExample={handleLoadExample}
        onReset={handleReset}
      />
      <CVPreview cv={cv} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 6rem;
  padding: 5rem;
  margin-bottom: 4rem;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export default Main;

