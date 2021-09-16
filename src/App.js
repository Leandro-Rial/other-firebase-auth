import React from 'react';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
