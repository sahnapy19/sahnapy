import React from 'react';

// Objek Hobi
const hobbies = [
  { id: 1, name: "Mendengarkan Musik", image: '/musik.jpg' },
  { id: 2, name: "Memotret", image: '/foto.jpg' },
  { id: 3, name: "Motoran", image: '/motor.jpg' },
  { id: 4, name: "Traveling", image: '/travel.jpg' },
];

export default function MyGallery() {
  return (
    < div className="container mx-auto p-2 text-center pt-20">
    <h2 className="text-black font-bold">My Gallery</h2>
    <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {hobbies.map(hobby => (
          <div key={hobby.id} className="border-2 border-indigo-400/75 rounded-lg bg-pink-200 p-4">
            <img src={hobby.image} alt={hobby.name} className="fotoku" />
            <h3 className="text-lg font-semibold">{hobby.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}