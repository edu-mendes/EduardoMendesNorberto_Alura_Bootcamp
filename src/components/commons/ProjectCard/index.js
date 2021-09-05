/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import db from '../../../../api/bd.json';

const ProjectCardWrapper = styled.div`
  background-color: red;
  border: black 2px solid;
  position: relative;
  width: 20vw;
`;

function ProjectCard() {
  return (
    <ProjectCardWrapper>
      {db.projects.map((dado) => (
        <div>
          <p>{dado.title}</p>
          <p>{dado.description}</p>
          <a>{dado.link}</a>
          <Image
            src={dado.image}
            alt="texto alternativo"
            width="500"
            height="500"
          />
        </div>
      ))}
    </ProjectCardWrapper>
  );
}

export default ProjectCard;
