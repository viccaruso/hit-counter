'use client';
import React from 'react';

export default function Blur({ children }) {
  const [blur, setBlur] = React.useState(false);

  return (
    <button className={blur ? 'censored' : ''} onClick={() => setBlur(!blur)}>
      {children}
    </button>
  );
}
