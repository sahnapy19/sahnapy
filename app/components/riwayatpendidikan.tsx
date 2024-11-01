export default function RiwayatPendidikan() {
    return (
        < div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-black font-bold"> Riwayat Pendidikan</h2>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-pink-200 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">SD</div>
                    <div className="col-span-12 md:col-span-4">SDN Cipaku 2</div>
                    <div className="col-span-12 md:col-span-4">2010-2016</div>
                </div>
            </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-pink-200 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">SMP</div>
                    <div className="col-span-12 md:col-span-4">SMPN 1 Paseh</div>
                    <div className="col-span-12 md:col-span-4">2016-2019</div>
                </div>
            </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-pink-200 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">SMA</div>
                    <div className="col-span-12 md:col-span-4">SMK Muhammadiyah Majalaya</div>
                    <div className="col-span-12 md:col-span-4">2019-2022</div>
                </div>
            </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-pink-200 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">SISTEM INFORMASI</div>
                    <div className="col-span-12 md:col-span-4">Ma'soem University</div>
                    <div className="col-span-12 md:col-span-4">2022-sekarang</div>
                </div>
            </div>
            </div>
          </div>
    );
  }

  interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
    }

    function RowRiwayat(props: RowRiwayatProps) {
        return(
            <div className="border-2 border-indigo-600/75 rounded-lg bg-pink-800 p-2 my-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-1">
                        <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
                        <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
                        <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                    </div>
                </div>
            </div>
        )
    }