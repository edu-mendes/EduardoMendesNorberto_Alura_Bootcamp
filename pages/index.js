import React from 'react';
import Footer from '../src/components/commons/Footer';
import Box from '../src/components/foundation/layout/Box';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import Capa from '../src/components/commons/Capa';
import Cabecalho from '../src/components/commons/Cabecalho';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';
import Text from '../src/components/foundation/Text';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cabecalho />
      <Capa />
      <WrapperProjetos />
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
        margin={{
          xs: 'auto',
          md: 'auto',
        }}
        variant="title"
        tag="h2"
        color="tertiary.main"
      >
        Entre em contato
      </Text>
      <Text
        margin={{
          xs: 'auto',
          md: 'auto',
        }}
        // display="flex"
        // borderColor="black"
        // borderStyle="solid"
        // borderRadius="10px"
        color="tertiary.main"
        tag="h1"
        variant="title"
        onClick={() => {
          // isModalOpen = true;
          setModalState(!isModalOpen); // novo state sendo atribuido
        }}
      >
        X
      </Text>
      <Footer />
    </Box>
  );
}
