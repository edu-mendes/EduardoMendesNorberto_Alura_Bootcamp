import React from 'react';
import styled from 'styled-components';

const TypografiaCardTitle = styled.h4`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-transform: capitalize;
  text-align: center;
`;

export default function CardTitle() {
  return (
    <div>
      <TypografiaCardTitle>Projeto Report</TypografiaCardTitle>
    </div>
  );
}
