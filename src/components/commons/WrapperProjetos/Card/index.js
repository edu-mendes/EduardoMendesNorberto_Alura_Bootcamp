import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import CardTitle from './CardTitle';

const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

CardWrapper.CentralSide = styled.section`
  border: 1px solid #E9C46A;
  box-sizing: border-box;
  ${breakpointsMedia({
    md: css`
      max-width: 290px;
      flex: 1;
      order: initial;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
`;

CardWrapper.LeftSide = styled.section`
  border: 1px solid #E9C46A;
  box-sizing: border-box;
  order: 1;
  ${breakpointsMedia({
    md: css`
        max-width: 290px;
      `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

CardWrapper.RightSide = styled.section`
  border: 1px solid #E9C46A;
  box-sizing: border-box;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;

export default function Card() {
  return (
    <CardWrapper>
      <CardWrapper.LeftSide>
        <img src="/images/17973919 1.png" alt="Imagem de capa do projeto" />
        <CardTitle />
      </CardWrapper.LeftSide>
      <CardWrapper.CentralSide>
        <img src="/images/4901374 1.png" alt="Imagem de capa do projeto" />
        <CardTitle />
      </CardWrapper.CentralSide>
      <CardWrapper.RightSide>
        <img src="/images/17973919 1.png" alt="Imagem de capa do projeto" />
        <CardTitle />
      </CardWrapper.RightSide>
    </CardWrapper>
  );
}
