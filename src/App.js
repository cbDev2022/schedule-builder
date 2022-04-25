import React from 'react'; 
import Nav from './components/nav';
import Main from './components/homepage';
import Account from './components/account';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Main></Main>
        <Account></Account>
      </main>
    </div>
  );
}

export default App;
