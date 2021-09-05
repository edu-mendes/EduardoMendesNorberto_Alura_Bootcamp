import React from 'react';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { CapaWrapper } from './styles/CapaWrapper';

export default function Capa() {
  return (
    <>
      <Box
        backgroundImage="url(/images/background-watermark.png)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center left"
      >
        <CapaWrapper>
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
            Oi, eu sou Eduardo
          </Text>
          <Text
            variant="paragraph1"
            tag="span"
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
          <span aria-label="Emoji">
            👋
          </span>
        </CapaWrapper>
        <Box />

      </Box>
    </>
  );
}
