// App.js
import React from 'react';
import CreateUserForm from './Components/CreateUserForm.js';

const appContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '85vh', // This will make the container take the full height of the viewport
};

function App() {
  return (
    <div style={appContainerStyle}>
      <h1>Joi Creation Form</h1>
      <CreateUserForm />
    </div>
  );
}

export default App;
