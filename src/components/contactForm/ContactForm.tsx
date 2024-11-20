import { useState } from 'react';
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer aqui bota o codigo bobão`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.statusText);
      }

      const data = await response.json();
      setStatus(data.message || 'Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    
    <form id="contact-form" onSubmit={handleSubmit}>
    <h1>Entre em Contato!</h1>
    <div className="form-group">
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
    </div>
    <div className="form-group">
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
    </div>
    <div className="form-group">
      <label>
        Mensagem:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </label>
    </div>
    <button type="submit">Enviar</button>
    <p className="status">{status}</p>
  </form>
  

  );
}

export default ContactForm;
