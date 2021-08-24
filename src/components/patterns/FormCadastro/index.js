import React from 'react';
import { Lottie } from '@crello/react-lottie';
import errorAnimation from './animations/error.json';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import TextArea from '../../forms/TextArea';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = React.useState({
    email: '',
    nome: '',
    mensagem: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.email.length === 0 || userInfo.nome.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          email: userInfo.email,
          name: userInfo.nome,
          mensagem: userInfo.mensagem,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
        marginBottom="32px"
      >
        ENVIE SUA MENSANGEM
      </Text>
      <div>
        <Text
          variant="paragraph1"
          tag="p"
        >
          SEU NOME
        </Text>
        <TextField
          name="nome"
          value={userInfo.nome}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <Text
          variant="paragraph1"
          tag="p"
        >
          SEU E-MAIL
        </Text>
        <TextField
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <Text
          variant="paragraph1"
          tag="p"
        >
          SEU MENSAGEM
        </Text>
        <TextArea
          name="mensagem"
          value={userInfo.mensagem}
          onChange={handleChange}
        />
      </div>

      <Text
        variant="primary.main"
        type="submit"
        tag="h1"
        disabled={isFormInvalid}
      >
        ENVIAR
      </Text>
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box>
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: true, autoplay: true }}
          />
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: true, autoplay: true }}
          />
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
