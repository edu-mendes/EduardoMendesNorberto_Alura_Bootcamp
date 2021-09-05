import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Footer from '../src/components/commons/Footer';
import Box from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';

export default function Page404() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cabecalho />
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
        marginTop={{
          xs: '32px',
          md: 'initial',
        }}
        marginBottom={{
          xs: '12px',
          md: '16px',
        }}
      >
        404
      </Text>
      <Text
        variant="paragraph1"
        tag="span"
        color="tertiary.main"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
        marginTop={{
          xs: '32px',
          md: 'initial',
        }}
        marginBottom={{
          xs: '12px',
          md: '16px',
        }}
      >
        Página não encontrada
      </Text>
      <Footer />
    </Box>
  );
}
