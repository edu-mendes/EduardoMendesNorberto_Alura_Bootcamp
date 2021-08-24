import React from 'react';
import styled from 'styled-components';
import CardTitle from './CardTitle';
import CardImage from './CardImage';
import CardText from './CardText';

const CardDestaqueWrapper = styled.section`
  border: solid palegoldenrod;
  display: flex;
  width: 900px;
  height: 320px;
  left: 270px;
  top: 1853px;
  margin-top: 30px;
  margin-bottom: 52px;
  margin-left: 270px;
`;

const CardDirection = styled.div`
 margin-left: 20px;
 text-align: justify;
`;

export default function CardDestaque() {
  return (
    <CardDestaqueWrapper>
      <CardImage />
      <CardDirection>
        <CardTitle />
        <CardText />
      </CardDirection>
    </CardDestaqueWrapper>
  );
}
