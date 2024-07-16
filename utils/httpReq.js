const BASE_URL = "https://fakestoreapi.com";

async function postData(data, path) {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return json;
  } catch {
    alert("You did not sign up bro...");
  }
}

async function getData(path) {
  try {
    const response = await fetch(`${BASE_URL}${path}`);
    const json = await response.json();
    return json;
  } catch {
    alert("Something went wrong ! Try again later...");
  }
}

export { postData, getData };
