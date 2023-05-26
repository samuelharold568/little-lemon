import React from 'react';

function AvailableTimes({ times }) {
  return (
    <>
      {times.map((time) => <option key={time + 1}>{time}</option>)}
    </>
  );
}

export default AvailableTimes;
