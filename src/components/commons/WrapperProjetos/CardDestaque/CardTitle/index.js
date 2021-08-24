import React from 'react';
import styled from 'styled-components';

const TypografiaCardTitle = styled.h4`
  width: 106px;
  height: 71px;
  left: 894px;
  top: 1881px;
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-transform: capitalize;
`;

export default function CardTitle() {
  return (
    <div>
      <TypografiaCardTitle>Projeto Report</TypografiaCardTitle>
    </div>
  );
}
