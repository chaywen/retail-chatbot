// src/utils/api.js
export const sendMessage = async (message) => {
  const res = await fetch(process.env.REACT_APP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) throw new Error('API error');
  return res.json();
};
