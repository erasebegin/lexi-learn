import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from '../styles/Button';
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
      <h1>Lexi Learn</h1>
      <div className="header-right">
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
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--yellow300);
  border-bottom: 1px solid var(--yellow500);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  .header-right {
    display: flex;
    align-items: center;
  }

  p {
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;
