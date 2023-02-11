let cachedToken = null;

export function getToken() {
  if (cachedToken) {
    return cachedToken;
  }

  cachedToken = localStorage.getItem("jwt");
  return cachedToken;
}
