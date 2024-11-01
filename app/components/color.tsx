"use client";
import { FC } from "react";

interface ColorProps {
  setWarna: (warna: string) => void; // Pastikan tipe untuk setWarna
}

const Color: FC<ColorProps> = ({ setWarna }) => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1>Ubah state warna ke warna:</h1>
      <button
        className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
        onClick={() => setWarna("light")}
      >
        Light
      </button>
      <button
        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("dark")}
      >
        Dark
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna("blue")}
      >
        Blue
      </button>
    </div>
  );
};

export default Color;
