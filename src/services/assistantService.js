import API from "./api";

// Sends the visitor's message + recent conversation history to the backend,
// which forwards it to the AI with store context (products, categories, FAQs).
// No login required — this is a public, anonymous endpoint.
export const sendAssistantMessage = async (message, history = []) => {
  const res = await API.post("/assistant/chat", { message, history });
  return res.data; // { reply: string }
};
