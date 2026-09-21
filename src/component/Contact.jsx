import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, your message has been sent!`);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title"><span className="call-icon">📞</span> Contact Us</h1>

      <form className="contact-card" onSubmit={handleSubmit}>
        <h2 className="card-heading"><span className="msg-icon">✉️</span> Send Message</h2>

        <input 
          type="text" 
          placeholder="Full Name" 
          value={form.name}
          onChange={(e)=>setForm({...form, name: e.target.value})}
          required
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          value={form.email}
          onChange={(e)=>setForm({...form, email: e.target.value})}
          required
        />
        <input 
          type="text" 
          placeholder="Subject" 
          value={form.subject}
          onChange={(e)=>setForm({...form, subject: e.target.value})}
          required
        />
        <textarea 
          placeholder="Your Message" 
          rows="3"
          value={form.message}
          onChange={(e)=>setForm({...form, message: e.target.value})}
          required
        ></textarea>

        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </div>
  );
}