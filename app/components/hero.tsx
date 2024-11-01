import foto from "../nana.jpg";

function Profile() {
    return <img src={foto.src} alt="Sahna Putri Profile" className="fotoku" />;
  }

  export default function Hero() {
    return (
  <div className="container mx-auto p-2 text-center">
        <h1 className="text-black font-bold">CV ONLINE</h1>
        <h1 className="text-2xl:">Sahna Putri Yunindra</h1>
        <Profile />
        <p>Saya Sahna Putri, mahasiswa Ma'soem University Prodi Sistem Informasi Semester 5</p>
        </div>
    );
}