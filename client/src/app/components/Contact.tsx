"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      //add local Host as well
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setResponse(data.message);
    } catch (error: any) {
      console.error(error);
      setResponse(error.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-neutral-900 p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            suppressHydrationWarning
            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            suppressHydrationWarning
            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            suppressHydrationWarning
            className="p-3 rounded-lg bg-neutral-800 border border-neutral-700"
          />

          <button
            type="submit"
            disabled={loading}
            suppressHydrationWarning
            className="bg-green-600 hover:bg-green-500 py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {response && <p className="mt-4 text-green-400">{response}</p>}
      </div>
    </section>
  );
}
