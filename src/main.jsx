import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx';
import { CategoryContextProvider } from './context/CategoryContext.jsx';
import { VideoContextProvider } from './context/VideoContext.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <CategoryContextProvider>
      <VideoContextProvider>
        <App />
      </VideoContextProvider>
    </CategoryContextProvider>
    </Router>
  </React.StrictMode>,
)
