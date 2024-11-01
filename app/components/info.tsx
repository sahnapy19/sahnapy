export default function PersonalInfoSection() {
    const MyInfos = {
       
        TTL: 'Bandung, 19 Januari 2004',
        Gender: 'Perempuan',
        TinggiBadan: '155 cm',
        BeratBadan: '40 kg',
        StatusPernikahan: 'Belum Menikah',
        Whatsapp: '+62 889-7199-0856',
        Email: 'sahnaputriy@gmail.com'
    };

    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-black font-bold">My Info</h2>
            <div className="mt-5">
                {Object.entries(MyInfos).map(([key, value], index) => (
                    <div key={index} className="border-2 border-indigo-600/75 rounded-lg bg-pink-200 p-3 my-2 w-1/2 mx-auto text-center">
                        <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{value}
                    </div>
                ))}
            </div>
        </div>
    );
}
