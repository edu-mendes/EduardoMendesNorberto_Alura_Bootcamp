/* eslint-disable max-len */
import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Footer from '../src/components/commons/Footer';
import Box from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';

export default function PageSobre() {
  const baseUrl = 'https://api.github.com/users/edu-mendes/repos';

  const [resposta, setResposta] = React.useState([]);
  React.useEffect(() => {
    fetch(baseUrl)
      .then((respostaDoServidor) => respostaDoServidor.json())
      .then((respostaCompleta) => {
        setResposta(respostaCompleta);
      });
  }, []);

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
        Sobre Mim
      </Text>
      <Box
        display="flex"
        flexWrap="nowrap"
        flexDirection="row"
        justifyContent="space-evenly"
      >
        <Text
          variant="paragraph1"
          tag="span"
          color="tertiary.main"
          style={{
            maxWidth: '300px',
            textAlign: 'justify',
          }}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at imperdiet urna. Nunc lacinia justo sed augue rutrum cursus. Sed venenatis sem in felis efficitur imperdiet. Etiam dignissim neque vel facilisis facilisis. Morbi vel ligula eros. Nulla dictum porta ante, in luctus nulla dapibus quis. Mauris ipsum arcu, dignissim a felis non, eleifend congue ante.
        </Text>
        <Text
          variant="paragraph1"
          tag="span"
          color="tertiary.main"
          style={{
            maxWidth: '300px',
            textAlign: 'justify',
          }}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at imperdiet urna. Nunc lacinia justo sed augue rutrum cursus. Sed venenatis sem in felis efficitur imperdiet. Etiam dignissim neque vel facilisis facilisis. Morbi vel ligula eros. Nulla dictum porta ante, in luctus nulla dapibus quis. Mauris ipsum arcu, dignissim a felis non, eleifend congue ante.
        </Text>
      </Box>
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
        Meus repositórios
      </Text>
      {resposta.map((item) => (
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
        >
          <Text
            variant="smallestException"
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
            {item.name}
          </Text>
          <Text
            tag="a"
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
            {item.html_url}
          </Text>
        </Box>
      ))}
      <Footer />
    </Box>
  );
}
