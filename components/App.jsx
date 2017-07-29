import React from 'react';
import { Link } from 'react-router';

function App({ children, routes }) {

  return(
    <div style={{maxWidth: '500px'}}>
      <h2 style={{marginBottom: 0}}>React for GitHub Pages</h2>
      <a href="https://github.com/rafrex/react-github-pages"
        style={{marginBottom: '1em', display: 'block'}}
      >
        https://github.com/rafrex/react-github-pages
      </a>
      <nav>
        {generateMapMenu()}
      </nav>
      {children}
    </div>
  );
}

export default App;
