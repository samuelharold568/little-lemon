import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Center,
  VStack,
  Stack,
  Heading,
} from '@chakra-ui/react';
import AvailableTimes from './AvailableTimes';
import AlertCustom from './AlertCustom';

function BookingForm({
  date, time, times, guest, occasion, dateChange,
  timeChange, guestChange, occasionChange, handleSubmit, status,
}) {
  return (
    <Stack bg="#FFF8DE" h="100vh">
      <Center pt="5%" pb="5%">
        <VStack w="100%">
          {status && <AlertCustom status={status} date={date} />}
          <Heading as="h2" mb="40px">Booking Form</Heading>
          <FormControl maxW="700px" w="90%">
            <FormLabel color="#333333">Choose date</FormLabel>
            <Input borderColor="#F4CE14" color="#495E57" mb="10px" type="date" id="res-date" value={date} onChange={dateChange} />
            <FormLabel color="#333333">Choose time</FormLabel>
            <Select id="selectTime" borderColor="#F4CE14" color="#495E57" mb="10px" value={time} onChange={timeChange}>
              <AvailableTimes times={times} />
            </Select>
            <FormLabel color="#333333">Number of guests</FormLabel>
            <Input borderColor="#F4CE14" color="#495E57" mb="10px" type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={guestChange} />
            <FormLabel color="#333333">Occasion</FormLabel>
            <Select color="#495E57" borderColor="#F4CE14" mb="10px" value={occasion} onChange={occasionChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Select>
            <Input id="btnBooking" color="#333333" bg="#F4CE14" mt="30px" type="submit" value="Make Your reservation" onClick={handleSubmit} />
          </FormControl>
        </VStack>
      </Center>
    </Stack>
  );
}

export default BookingForm;
