import React from 'react';
import Text from '../../foundation/Text';
import Modal from '../Modal';
import FormCadastro from '../../patterns/FormCadastro';
import { CabecalhoWrapper } from './styles/CabecalhoWrapper';

export default function Cabecalho() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <CabecalhoWrapper>
      <CabecalhoWrapper.LeftSide>
        <Text>
          Portfolio.
        </Text>
      </CabecalhoWrapper.LeftSide>
      <CabecalhoWrapper.CentralSide>
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>
        <Text
          onClick={() => {
            // isModalOpen = true;
            setModalState(!isModalOpen); // novo state sendo atribuido
          }}
        >
          Contato
        </Text>
      </CabecalhoWrapper.CentralSide>
      <CabecalhoWrapper.RightSide>
        <Text tag="a" href="/sobre" style={{ textDecoration: 'none' }}>
          Sobre
        </Text>
      </CabecalhoWrapper.RightSide>
    </CabecalhoWrapper>
  );
}
