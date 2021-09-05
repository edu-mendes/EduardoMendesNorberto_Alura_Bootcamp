import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Footer from '../src/components/commons/Footer';
import ProjectCard from '../src/components/commons/ProjectCard';
import Box from '../src/components/foundation/layout/Box';

export default function PageSobre() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cabecalho />
      <ProjectCard />
      <Footer />
    </Box>
  );
}
