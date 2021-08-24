import React from 'react';
import Text from '../../foundation/Text';
import { CabecalhoWrapper } from './styles/CabecalhoWrapper';

export default function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <CabecalhoWrapper.LeftSide>
        <Text>
          &lt;ME/&gt;
        </Text>
      </CabecalhoWrapper.LeftSide>
      <CabecalhoWrapper.CentralSide>
        <Text>
          Contato
        </Text>
      </CabecalhoWrapper.CentralSide>
      <CabecalhoWrapper.RightSide>
        <Text>
          Sobre Mim
        </Text>
      </CabecalhoWrapper.RightSide>
    </CabecalhoWrapper>
  );
}
