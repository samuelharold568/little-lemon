const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const fetchAPI = function (date) {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

function getReservationData() {
  const item = localStorage.getItem('littleLemon');
  const parseItem = JSON.parse(item);
  return parseItem || [];
}

function storeReservationData(data) {
  const item = localStorage.setItem('littleLemon', JSON.stringify(data));
  return item;
}

function addReservationData(data) {
  const getData = getReservationData();

  if (getData.length > 10) {
    getData.splice(0, getData.length - 10);
  }

  const addData = getData.concat(data);
  return storeReservationData(addData);
}

export {
  fetchAPI, submitAPI, storeReservationData, addReservationData, getReservationData,
};
