import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root';
// import { startMock } from './mock';

// startMock();

const root = createRoot(document.getElementById('root'));
root.render(<Root />);
