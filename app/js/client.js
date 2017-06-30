import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const app = document.getElementById('app');

class Layout extends React.Component {
  render() {
    return (
      <div>
      <Header />
      
      <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Layout/>, app);
