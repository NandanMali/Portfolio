// Placeholder submission service.
//
// Replace the body of this function with a real call to your Node/Express
// backend, e.g.:
//
//   const res = await fetch("https://your-api.com/api/contact", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData),
//   });
//   if (!res.ok) throw new Error("Request failed");
//   return res.json();
//
// Until that's wired up, this throws so the UI never fakes a success state.

import axios from 'axios';

export async function submitContactForm(formData) {
 const res = await axios.post("http://localhost:5000/api/contact", formData);
  if (!(res.status===200)) throw new Error("Request failed");
  return true;}

