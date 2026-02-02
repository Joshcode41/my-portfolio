"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message submitted!"); // replace with email handler if needed
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
      <input
        className="border p-2 rounded-md w-full"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="border p-2 rounded-md w-full"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        className="border p-2 rounded-md w-full"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      {/* Motion wrapper for the button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button type="submit">Send Message</Button>
      </motion.div>
    </form>
  );
}
