import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import '../styles/global.css';

export default function Page({children}) {
  return(<PageContainer>
    {children}
  </PageContainer>)
}

const PageContainer = styled(Container)`
  background-color: var(--yellow100);
  min-height: 100vh;
`;
