import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '../styles/Button';
import Alert from 'react-bootstrap/Alert';
import Card from '../styles/Card';
import Page from '../styles/Page';
import Link from '../styles/Link';
import { useAuth } from '../contexts/AuthContext';

export default function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setMessage('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Please check your inbox for further instructions');
    } catch (e) {
      setError('Failed to reset password');
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
          <h2 className="text-center mb-4">Reset Password</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button
              className="w-100 mt-4"
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
            >
              Reset Password
            </Button>
          </Form>
        </Card.Body>
        {message && <Alert variant="success">{error}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="w-100 text-center mt-2 mb-2 px-4">
          <Link to="/sign-in">Log in</Link>
        </div>
      </Card>
    </Page>
  );
}
