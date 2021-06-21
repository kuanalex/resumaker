import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";
import TextArea from "../Utils/TextArea";

const ProjectItem = ({ id, projectItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="projectName"
        placeholder="Project name"
        value={projectItem.projectName}
      />
    <TextArea
        onChange={(e) => onChange(e, id)}
        name="projectDescription"
        placeholder="Project description"
        value={projectItem.projectDescription}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </>
  );
};

export default ProjectItem;