import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';
import Button from '../styles/Button';
import Card from '../styles/Card';
import Page from '../components/Page';
import Link from '../styles/Link';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (e) {
      setError('Failed to create an account');
      console.error(e);
    }
    setLoading(false);
  }

  return (
    <Page className="d-flex align-items-center justify-content-center">
      <Card className="py-4 px-4">
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={confirmPasswordRef} required />
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
        <div className="w-100 text-center mt-2 mb-4 px-4">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </div>
      </Card>
    </Page>
  );
}
