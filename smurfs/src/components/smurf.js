import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <p>{props.name}</p>
      <p>is {props.height} cm tall</p>
      <p>is {props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf; 
