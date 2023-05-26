import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './component/BookingForm';
import { fetchAPI } from './utils/api';

test('renders BookingForm component', () => {
  const {container} = render(<BookingForm  times={fetchAPI(new Date())}/>);

  const HeadingElement = screen.getByText('Booking Form');
  const selectTime = container.querySelector('.selectTime');

  expect(HeadingElement).toBeInTheDocument();
  expect(selectTime).toBeDefined();
});
