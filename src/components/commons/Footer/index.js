import React from 'react';
import styled from 'styled-components';
import FooterIcon from './FooterIcon';

const FooterWrapper = styled.footer`
 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  background: #FFF8E6;
  border-top-color: #E9C46A;
  border-top-style: solid;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <FooterIcon />
    </FooterWrapper>
  );
}
