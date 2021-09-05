import React from 'react';
import styled from 'styled-components';

const TypografiaSectionTitle = styled.h2`
 

  font-family: 'Fira Sans Condensed', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 72px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

`;

export default function SectionTitle() {
  return (
    <div>
      <TypografiaSectionTitle>
        MEUS PROJETOS
      </TypografiaSectionTitle>
    </div>
  );
}
