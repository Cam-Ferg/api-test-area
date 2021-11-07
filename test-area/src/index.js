import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

const Header = () => (
  <div>
    <h1>Multi Step Registration</h1>
  </div>
);

export default Header;