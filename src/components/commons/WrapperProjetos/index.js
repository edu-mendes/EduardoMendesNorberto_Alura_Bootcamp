import React from 'react';
import Card from './Card';
import CardDestaque from './CardDestaque';
import SectionTitle from './SectionTitle';

export default function WrapperProjetos() {
  return (
    <div>
      <SectionTitle />
      <Card />
      <CardDestaque />
    </div>
  );
}
