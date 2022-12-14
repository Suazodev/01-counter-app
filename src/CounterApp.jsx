import PropTypes from 'prop-types';
import { useState } from 'react';

export default function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAddOne = () => setCounter(counter + 1);
  const handleSubstractOne = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAddOne } > +1 </button>
      <button onClick={ handleSubstractOne } > -1 </button>
      <button onClick={ handleReset } > Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}
