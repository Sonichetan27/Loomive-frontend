import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { sendAssistantMessage } from "../services/assistantService";

const GREETING = {
  role: "assistant",
  content:
    "Hi! I'm Loomiva's assistant 🧶 Ask me about our products, customization, materials, or shipping — happy to help!",
};

// Only the last few turns are sent back to the API on each request,
// so the payload (and token cost) stays small no matter how long the chat runs.
const MAX_HISTORY_TURNS = 8;

const AIAssistantWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(false);

    try {
      const history = nextMessages
        .filter((m) => m !== GREETING)
        .slice(-MAX_HISTORY_TURNS)
        .map((m) => ({ role: m.role, content: m.content }));

      const { reply } = await sendAssistantMessage(text, history);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply || "Sorry, I didn't quite catch that — could you rephrase?" },
      ]);
    } catch (err) {
      console.error("Assistant error:", err);
      setError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble replying right now. You can also reach us directly on WhatsApp!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle button — sits just above the WhatsApp bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Open Loomiva assistant"}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-pink-600 text-white shadow-lg shadow-pink-600/30 flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-40 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm h-[28rem] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">

          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-pink-600 text-white shrink-0">
            <Sparkles size={18} />
            <div className="leading-tight">
              <p className="font-display font-bold text-lg leading-none">Loomiva Assistant</p>
              <p className="text-xs text-pink-100">Usually replies in seconds</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl ${
                    m.role === "user"
                      ? "bg-pink-600 text-white rounded-br-sm"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                </div>
              </div>
            )}

            {error && (
              <a
                href="https://wa.me/918305804566"
                target="_blank"
                rel="noreferrer"
                className="block text-center text-xs text-pink-600 hover:underline pt-1"
              >
                Chat with us on WhatsApp instead →
              </a>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 p-3 border-t border-gray-200 dark:border-gray-700 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about products, sizing..."
              className="flex-1 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-pink-500/40"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="w-9 h-9 rounded-xl bg-pink-600 text-white flex items-center justify-center disabled:opacity-40 transition-opacity"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistantWidget;
