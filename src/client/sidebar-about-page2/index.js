import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/index';
import './styles.css';

const container = document.getElementById('index');
const root = createRoot(container);
root.render(<App />);
