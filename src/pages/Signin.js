import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';
import Button from '../styles/Button';
import Card from '../styles/Card';
import Col from 'react-bootstrap/Col';
import Page from '../components/Page';
import Link from '../styles/Link';
import { useAuth } from '../contexts/AuthContext';

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signin, currentUser } = useAuth();
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
  
  if(currentUser){
    history.push('/');
  }

  return (
    <Page
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <Col sm={8} md={6} className="mx-auto">
        <Card className="py-4 px-4 my-4">
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
                Sign in
              </Button>
            </Form>
          </Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="w-100 text-center mt-2 mb-2 px-4">
            Don't have an account? <Link to="sign-up">Create one</Link>.
          </div>
          <div className="w-100 text-center mt-2 mb-4 px-4">
            Forgot your password? <Link to="/forgot-password">Reset it.</Link>
          </div>
        </Card>
      </Col>
    </Page>
  );
}
