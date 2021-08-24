import React from 'react';
import styled from 'styled-components';

const TypografiaCardText = styled.p`
  width: 250px;
  height: 109px;
  left: 894px;
  top: 1982px;

  font-family: 'Fira Sans Condensed', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
`;

export default function CardText() {
  return (
    <div>
      <TypografiaCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.
      </TypografiaCardText>
    </div>
  );
}
