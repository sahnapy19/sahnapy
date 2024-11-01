export default function SkillsSection() {
    const skills = [
        'JavaScript',
        'React',
        'CSS',
        'HTML',
        'TypeScript',
        'UI/UX Design'

    ];

    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-black font-bold">Skill</h2>
            <div className="flex flex-col items-center mt-5">
                {skills.map((skill, index) => (
                    <div key={index} className="border-2 border-indigo-600/75 rounded-lg bg-pink-200 p-3 my-2 w-1/2 text-center">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}
