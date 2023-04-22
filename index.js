import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Calculator';
import reportWebVitals from './reportWebVitals';
import DraggableComponent from './DragableComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DraggableComponent />
  </React.StrictMode>
);

reportWebVitals();
