import React from 'react';
import * as Components from './Components.js';

function App() {
  const [signIn] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer
        signinIn={signIn}
      ></Components.SignUpContainer>
    </Components.Container>
  );
}

export default App;
