async function getData(category) {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const dataJson = await data.json();
  const limitedData = dataJson.meals.slice(0, 7);

  if (dataJson.meals.length < 7) {
    limitedData.push(...dataJson.meals.slice(7));
  }

  return { error: false, data: limitedData };
}

async function detailMenu(id) {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const dataJson = await data.json();

  console.log('ini fungsi detailMenu', dataJson);

  return { error: false, data: dataJson.meals };
}

const BASE_URL = 'https://notes-api.dicoding.dev/v1';

function getAccessToken() {
  const item = localStorage.getItem('accessToken');
  console.log('ini item localStorage', item);
  return item;
}

function putAccessToken(keys) {
  const item = localStorage.setItem('accessToken', keys);
  console.log('ini item menyimpan', item);
  return item;
}

async function fetchWithToken(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  console.log('ini response fetchToken', response);

  return response;
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

export {
  getData,
  detailMenu,
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  BASE_URL,
};
