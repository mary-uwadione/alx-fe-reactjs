import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '300px', padding: '5px' }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '300px', padding: '5px' }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '300px', padding: '5px', height: '100px' }}
        />

        <button type="submit" style={{ padding: '5px 15px', marginTop: '10px' }}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

