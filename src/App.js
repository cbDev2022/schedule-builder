import React from 'react'; 
import Nav from './components/nav';
import Main from './components/homepage';
import Account from './components/account';

function App() {

  return (
    <div>
      <Nav></Nav>
      <Account></Account>
      <main>
        <Main></Main>
      </main>
    </div>
  );
}

export default App;
