import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurfpocalypse 5 the Smurfening</h1>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}

                age={smurf.age}

                height={smurf.height}
              />
            );
           })}
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;