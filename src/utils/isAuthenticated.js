export function isAuthenticated() {
  const jwt = localStorage.getItem("jwt");
  return !!jwt;
}