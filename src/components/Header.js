import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { currentUser, signout } = useAuth();
  function handleLogout() {
    try {
      signout();
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <HeaderContainer>
      {currentUser ? (
        <>
          <p>
            Signed in as <strong>{currentUser.email}</strong>
          </p>
          <Button variant="light" onClick={handleLogout}>
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign up</Link>
        </>
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--yellow500);

  p {
    margin-right: 1rem;
    margin-bottom: 0;
  }

  button {
    background: var(--yellow400);
    border: 1px solid var(--yellow500);
  }
`;
