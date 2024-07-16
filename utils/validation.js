function validateUsername(username, regex) {
  if (regex.test(username)) {
    return true;
  } else {
    return false;
  }
}

export { validateUsername };
