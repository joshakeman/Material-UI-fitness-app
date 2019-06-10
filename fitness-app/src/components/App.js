import React from 'react';
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />

        <Exercises />
        
        <Footer />
      </div>
    );
  } 
}

export default App;
