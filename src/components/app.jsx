import React from 'react';

import CostsIndex from '../containers/costs_index';

const App = (props) => {
  console.log('App reached!');
  return (
    <div className="app-container">
      <CostsIndex monthsCostsFromParams={props.match.params.id} />
    </div>
  );
};

export default App;
