import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CabecalhoWrapper = styled.div`
  font-family: 'Fira Sans Condensed';
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 18px;
  background: #FFF8E6;
  border-color: #E9C46A;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })} */

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  background: #FFF8E6;
  border-top-color: #E9C46A;
  border-top-style: solid;
`;

CabecalhoWrapper.LeftSide = styled.div`
  padding: 0;
  margin-left: 300px;
  order: 1;
  width: 50px;
  height: 100%;
  background: #E9C46A;
  color: #fff;
  text-align: center;
  ${breakpointsMedia({
    md: css`
        width: 50px;
        height: 40px;
      `,
    lg: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 50px;
      height: 32px;
      padding: 0 16px;
      max-width: 768px;
    `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
      width: 80px;
      height: 30px;
    `,
  })}
`;

CabecalhoWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 17px;
  padding: 12px;
  
  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
`;

CabecalhoWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;
