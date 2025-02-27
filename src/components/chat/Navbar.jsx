import { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Import profile icon
import "../../styles/chatStyle/style/chat.css";
import { useNavigate } from "react-router-dom";
export default function Navbar({ onOpenProfile }) {
  const navigate = useNavigate();
  return (
    <nav className="chat-navbar">
      <img 
      onClick={() => navigate("/")}
      src="/robot.ico" alt="Chat-bot" className="w-8 h-8" />
      <a href="mailto:max.mustermann@example.com?body=My custom mail body" className="profile-button" onClick={onOpenProfile}>
        <FaUserCircle size={28} />
      </a>
    </nav>
  );
}
