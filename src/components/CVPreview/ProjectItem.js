import React from 'react'
import styled from 'styled-components'
import Subsection from '../Utils/Subsection'

const ExperienceItem = ({ projectItem }) => {
  return (
    <ProjectItemWrapper>
      <Info>
        <Subsection title={projectItem.projectName}>
          <div>
            {projectItem.projectDescription}
          </div>
        </Subsection>
      </Info>
    </ProjectItemWrapper>
  )
}

const ProjectItemWrapper = styled.div`
  display: flex;
`

const Info = styled.div`
  width: 100%;
`

export default ExperienceItem