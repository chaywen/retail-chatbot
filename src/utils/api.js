const API_URL = "https://nfhuqnv2h6.execute-api.us-east-1.amazonaws.com";

export async function sendMessage(message) {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call failed:", error);
    return { text: "Error: Unable to connect to backend." };
  }
}
