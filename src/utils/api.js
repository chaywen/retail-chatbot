export const sendMessageToBackend = async (message) => {
  console.log("📡 API URL:", process.env.REACT_APP_API_URL);
  console.log("📝 Payload:", { message });

  try {
    const res = await fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: message, userId: "web-user" }),

    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API error: ${res.status} ${errorText}`);
    }

    const data = await res.json();
    console.log("📥 Received from API:", data);
    return data;
  } catch (err) {
    console.error("❌ API call failed:", err.message);
    throw err;
  }
};
