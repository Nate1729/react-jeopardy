import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import styles from './App.module.css';

ReactDOM.render(
  <React.StrictMode>
    <App className={styles.app}/>
  </React.StrictMode>,
  document.getElementById('root')
);
