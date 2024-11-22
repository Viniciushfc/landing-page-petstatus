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
          'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE1NTM5MzI2MDIwMDAxNjE4OTU0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJ2aGZjYW1wb3NAbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWmJNUzBTLWNSdW9BbE1JRTF6RDBCZyIsIm5iZiI6MTczMjMxMzkyOSwiaWF0IjoxNzMyMzE0MjI5LCJleHAiOjE3MzIzMTc4MjksImp0aSI6IjRlNjhjYWFlZWFjNmIyYzM2MzU5MzU4MzU4NTYzOTc2ZThkN2Y0ODAifQ.Bey952KOGlDUhr_4CdcIB0yMpogWUmJFVU6eANgpoHnsaJlKZiUjaOosUvgfxKQB_Hxvc2GjrjWo10MfQFymR5G5xQoTdQcoAX4DMys3dUNw80yT3frM1Sn2gvqrCYFKtr3P0VzB9XpszNftdjChyuJwKIhHQ1EAf_NzMN_YhxBGyL0FB9lv6iAyrOEnci-Ye3x3-0rbcyrG9k-g39MMlLL5Oxl0HNHxKSUceXvf1Hub3UKei5edojnNpX2oVxFe5eF9jv-Xx5jxN86VIph5LLSOSuZjLHrxPnhV2ouEp2VuZkzWNCDS_rynamY7cn0lu8mobG-QyVwnwMfZyZV_5g`,
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
