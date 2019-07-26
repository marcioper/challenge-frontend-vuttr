import React from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <Loader type="Rings" color="#00BFFF" height={120} width={120} />
    </Container>
  );
}
