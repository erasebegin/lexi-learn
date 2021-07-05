import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomLink({ children, to }) {
  return (
    <Link to={to} style={{ color: 'var(--brown100)' }}>
      {children}
    </Link>
  );
}
