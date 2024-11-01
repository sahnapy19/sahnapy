"use client";
import { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    // Simulasi input ke database di sini
    console.log('Data submitted:', { name, message, rating });
  };

  const handleClear = () => {
    setName('');
    setMessage('');
    setRating(0);
    setSubmitted(false);
  };

  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-black font-bold">Contact Form</h2>
      <br></br>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#ffccff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nama:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px' }}
            />

            <label htmlFor="message">Komentar:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px' }}
            ></textarea>

            <label>Rating:</label>
            <div style={{ marginBottom: '10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} style={{ cursor: 'pointer', fontSize: '24px', color: star <= rating ? 'gold' : 'gray' }} onClick={() => setRating(star)}>
                  ★
                </span>
              ))}
            </div>

            <button type="submit" style={{ marginTop: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>
              Submit
            </button>
            <button type="button" onClick={handleClear} style={{ marginLeft: '10px', marginTop: '10px', backgroundColor: '#ccc', color: 'black', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>
              Clear
            </button>
          </form>
        ) : (
          <div>
            <h2>Data Submitted</h2>
            <p>Nama: {name}</p>
            <p>Pesan: {message}</p>
            <p>Rating: {rating} bintang</p>
            <p>Data di atas akan segera di input ke database. Terima kasih!</p>
            <button onClick={handleClear} style={{ marginTop: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>
              Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
