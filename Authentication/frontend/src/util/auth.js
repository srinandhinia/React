import { redirect } from "react-router-dom";

export function getDurationToken() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expiration = new Date(storedExpirationDate);
  const now = new Date();

  const duration = expiration.getTime() - now.getTime();
  return duration;
}

export default function getAuthToken() {
  const token = localStorage.getItem("token");

  const duration = localStorage.getItem("expiration");
  if (!token) {
    return null;
  }

  if (duration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
}
