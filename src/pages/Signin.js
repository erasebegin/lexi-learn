import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link, useHistory } from 'react-router-dom';
import Card from '../styles/Card';
import Page from '../styles/Page';
import { useAuth } from '../contexts/AuthContext';

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signin } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (e) {
      setError('Failed to sign in');
      console.error(e);
    }
    setLoading(false);
  }

  return (
    <Page
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <Card className="py-4 px-4">
        <Card.Body>
          <h2 className="text-center mb-4">Sign in</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              className="w-100 mt-4"
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </Form>
        </Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="w-100 text-center mt-2 mb-2 px-4">
          Don't have an account? <Link to="sign-up">Create one</Link>.
        </div>
        <div className="w-100 text-center mt-2 mb-4 px-4">
          Forgot your password? Reset it.
        </div>
      </Card>
    </Page>
  );
}
