async function fetchPOST(_URL, _dataAppend) {
  const URL = _URL;
  const dataAppend = _dataAppend;
  const fetchInit = await fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataAppend),
  });
  return fetchInit;
}

async function fetchGET(_URL, _dataAppend = "") {
  const URL = _URL;
  const dataAppend = _dataAppend;
  const fetchInit = await fetch(URL + dataAppend, {
    method: "GET",
  });
  return fetchInit;
}

module.exports = { fetchPOST, fetchGET };
