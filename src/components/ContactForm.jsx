import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form;

    // ✅ Validation
    if (!name || !email || !phone || !message) {
      return setToast("All fields are required!");
    }
    if (!validateEmail(email)) {
      return setToast("Invalid email format!");
    }

    setLoading(true);
    setToast("");

    try {
      const res = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      console.log("Response from API:", data); // ✅ JSON response console me dikhega

      // ✅ Handle both 200 and 201 as success
      if (res.status === 200 || res.status === 200) {
        setToast("Form Submitted ✅");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setToast(`Error: ${res.status}`);
      }
    } catch (err) {
      console.error(err);
      setToast("Network error. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-3 rounded focus:outline-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-3 rounded focus:outline-blue-500"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border p-3 rounded focus:outline-blue-500"
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border p-3 rounded h-28 focus:outline-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {toast && (
          <p className="text-center text-sm mt-3 text-gray-700">{toast}</p>
        )}
      </form>
    </section>
  );
}
