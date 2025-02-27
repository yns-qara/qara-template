import { useState, useRef, useEffect } from "react";
import Navbar from "../components/chat/Navbar";
import { ProfileModal } from "../components/chat/ProfileModal";
import MessageInput from "../components/chat/MessageInput";
import { Message } from "../components/chat/Message";
import { sendMessageToChatbot } from "../../api/api";
import "../styles/chatStyle/style/chat.css";


import Particles from "react-tsparticles";
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from "react";


export default function Chat() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  // Initialize particles with loadSlim
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  const particleOptions = {
    background: {
      color: {
        value: "#4a90e2",  // Dark background
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSendMessage = async (content) => {
    setLoading(true);
    scrollToBottom();

    if (!content.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await sendMessageToChatbot(content);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        content: response.data || "I'm sorry, I didn't understand that.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), content: "Failed to get a response. Please try again.", sender: "bot", timestamp: new Date() }
      ]);
    } finally {
      setLoading(false);
    }



  };


  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatContainerRef = useRef(null);
  // scroll to the bottom of the chat container
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // scroll to the bottom when the component mounts in a function





  return (
    <div className="chat-container">

      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleOptions} />


      <Navbar onOpenProfile={() => setIsProfileOpen(true)} />
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      <main className="chat-main">
        <div className="chat-box">
          <div ref={chatContainerRef} className="chat-messages">
            {messages.map((message) => (
              <Message loading={loading} key={message.id} message={message} />
            ))}
          </div>
          {loading ? 
          <div className="message-input loader">The bot is Typing...</div> : 
          <MessageInput onSendMessage={handleSendMessage} />}
        </div>
      </main>
    </div>
  );
}
