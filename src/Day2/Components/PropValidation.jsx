import React from "react";
import PropTypes, { object } from "prop-types";
function PropValidation({ name, age, arr, func }) {
  return (
    <div>
      {
      typeof name != 'string' ||
      typeof age !== 'number' ||
      typeof arr != 'object' ||
      typeof func != 'function' 
      ? 
      (
        <h2>Invalid Proptypes</h2>
      ) :
       (
        <div>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{arr[0]}</h1>
          <button onClick={func}>Click Here!</button>
        </div>
      )
      }
    </div>
  );
}

PropValidation.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  arr: PropTypes.array,
  func: PropTypes.func,
};

export default PropValidation;
