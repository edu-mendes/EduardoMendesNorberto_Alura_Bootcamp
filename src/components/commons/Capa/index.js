import React from 'react';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

export default function Capa() {
  return (
    <>
      <Box
        backgroundImage="url(/images/background.jpg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
        // display="flex"
        // flexDirection="column"
        // alignContent="center"
        // justifyContent="center"
      >
        <Box
          backgroundColor="#FFF8E6"
        >
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
            Eduardo Mendes
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
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
            Portifolio
          </Text>
        </Box>

      </Box>
    </>
  );
}
