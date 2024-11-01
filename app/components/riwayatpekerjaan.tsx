export default function RiwayatPekerjaan() {
    return (
        < div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-black font-bold"> Riwayat Pekerjaan</h2>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-pink-200 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">2019</div>
                    <div className="col-span-12 md:col-span-4">PT. Mayora</div>
                    <div className="col-span-12 md:col-span-4">HRD</div>
                </div>
            </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-pink-200 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">2021</div>
                    <div className="col-span-12 md:col-span-4">Indihome</div>
                    <div className="col-span-12 md:col-span-4">Staff Administrasi</div>
                </div>
            </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-pink-200 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">2022</div>
                    <div className="col-span-12 md:col-span-4">PT. Shoope Indonesia</div>
                    <div className="col-span-12 md:col-span-4">Data Enginer</div>
                </div>
            </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-pink-200 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">2023</div>
                    <div className="col-span-12 md:col-span-4">PT. Pertamina</div>
                    <div className="col-span-12 md:col-span-4">Manager</div>
                </div>
            </div>
            </div>
          </div>
    );
  }

  interface RowRiwayatProps {
    tahun: string;
    instansi: string;
    jabatan: string;
    }

    function RowRiwayat(props: RowRiwayatProps) {
        return(
            <div className="border-2 border-indigo-600/75 rounded-lg bg-pink-800 p-2 my-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-1">
                        <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                        <div className="col-span-12 md:col-span-4">{props.instansi}</div>
                        <div className="col-span-12 md:col-span-4">{props.jabatan}</div>
                    </div>
                </div>
            </div>
        )
    }