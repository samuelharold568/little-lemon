import React, { useState, useReducer } from 'react';
import { addReservationData, fetchAPI } from '../utils/api';
import BookingForm from '../component/BookingForm';
import useFormInput from '../customHook/useFormInput';

function BookingPage() {
  const [dateVisit, resetValueDate] = useFormInput('');
  const [time, resetTime] = useFormInput('');
  const [guest, resetGuest] = useFormInput('');
  const [occasion, resetOccasion] = useFormInput('');
  const [alertStatus, setAlertStatus] = useState('');
  const newDate = new Date();

  const UpdateTimes = (state, action) => {
    if (action.type) {
      return state = state.filter((element) => element !== action.selectTime);
    }
  };

  const [times, dispatchTimes] = useReducer(UpdateTimes, fetchAPI(newDate));

  const dateV = dateVisit.value;
  const timeV = time.value;
  const guestV = guest.value;
  const occasionV = occasion.value;

  const clearForm = () => {
    resetValueDate('');
    resetTime('');
    resetGuest('');
    resetOccasion('');
    setAlertStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dateV !== '') {
      setAlertStatus('success');
      dispatchTimes({
        type: dateV,
        selectTime: timeV,
      });

      addReservationData([{
        dateV,
        timeV,
        guestV,
        occasionV,
      }]);

      setTimeout(clearForm, 3000);
    }

    if (dateV === '') {
      setAlertStatus('warning');
      setTimeout(clearForm, 2000);
    }
  };

  return (
    <BookingForm
      times={times}
      date={dateVisit.value}
      time={time.value}
      guest={guest.value}
      occasion={occasion.value}
      dateChange={dateVisit.onChange}
      timeChange={time.onChange}
      guestChange={guest.onChange}
      occasionChange={occasion.onChange}
      handleSubmit={handleSubmit}
      status={alertStatus}
    />
  );
}

export default BookingPage;
