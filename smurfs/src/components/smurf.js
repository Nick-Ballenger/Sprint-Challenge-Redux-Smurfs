import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <p>{props.name}</p>
      <li>is {props.height} tall</li>
      <li> Is {props.age} smurf years old</li>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf; 
