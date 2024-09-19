interface Hackathon {
    media: string;
    competition: string;
    projectName: string;
    description: string;
    stack: string[];
    url: string;
    demo?: string;
}

const hackathons: Hackathon[] = [
    {
        media: "/WEC_Game.mp4",
        competition: "Western Engineering Competition 2023 - 1st Place in Team Programming 🥇",
        projectName: "ExploreBC 🏕️",
        description:
            "A game for elementary students to learn about the beautiful nature of British Columbia. Students have 2 minutes to find all emojis that would unlock different facts about BC's nature. Once the game finishes, students can take a quiz to test their understanding. Developed in 8 hours with my amazing team - Eduardo and Nishchint!",
        stack: ["NextJS", "CharkaUI", "localStorage"],
        url: "https://devpost.com/software/study-spot-finder",
        demo: "https://wec-2023-neossat.vercel.app/",
    },
    {
        media: "/MedMate_Client.mov",
        competition: "#islandHealth Code Hack 2023",
        projectName: "MedMate 💊",
        description:
            "MedMate is a system of 3 apps. Within 24 hours, my friends Chris, Matthew and I developed a system facilitating all doctors and patients interactions with a central health database. The system includes: <br/>✔️ A web app for patients to view and control their own health records. <br/>✔️ A cross-platform app (currently designed for iPad) for doctors to write to the health database. <br/>✔️ A webpage to show a person's public info in case of emergency.",
        stack: ["NextJS", "ChakraUI"],
        url: "https://github.com/julhoang/code_hack_patient_app",
    },
    {
        media: "",
        competition: "UVic's VikeLabs Summer 2024 - 3rd place 🥉",
        projectName: "NoteNetwork 📚",
        description:
            "NoteNetwork is a platform where UVic students can share curated links and videos for specific courses, saving time and effort for future students. Developed in 5 hours with my besties - Chris and Khushboo!",
        stack: ["NextJS", "Firebase", "RadixUI"],
        url: "https://github.com/julhoang/notenetwork/tree/main",
    },
];

function ProjectCard({
    media,
    competition,
    projectName,
    description,
    stack,
    url,
    demo,
}: Hackathon) {
    return (
        <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm">{competition}</p>
            <h4 className="font-bold text-3xl my-2">{projectName}</h4>
            <p
                className="whitespace-normal"
                dangerouslySetInnerHTML={{ __html: description }}
            ></p>

            <div>
                {stack.map((tech) => (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        {tech}
                    </span>
                ))}
            </div>

            {demo && (
                <a
                    href={demo}
                    className="text-blue-500 hover:underline"
                >
                    View Demo
                </a>
            )}
            <a href={url}>View Project</a>
        </div>
    );
}

export default function HackathonSection() {
    return (
        <div className="bg-slate-100 p-10 text-left">
            <h2 className="font-bold text-5xl md:text-7xl mb-2">hackathons.</h2>
            <p className="text-lg md:text-xl md:w-1/2 mb-4 md:mb-8">
                Adrenaline-fueled competitions, powered by too much coffee ☕, greasy pizza 🍕, and
                a mountain of salty chips 🥨.
            </p>

            <div className="grid md:grid-rows-3 divide-y-2">
                <div className="md:grid md:grid-cols-2 py-10 md:gap-10">
                    <video
                        width={"100%"}
                        src={hackathons[0].media}
                        controls
                        className="rounded-lg mb-5 md:mb-0"
                    />
                    <ProjectCard {...hackathons[0]} />
                </div>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 py-10 md:gap-10">
                    <ProjectCard {...hackathons[1]} />
                    <video
                        width={"100%"}
                        src={hackathons[1].media}
                        controls
                        className="rounded-lg mb-5 md:mb-0"
                    />
                </div>

                <div className="md:grid md:grid-cols-2 py-10 md:gap-10">
                    <video
                        width={"100%"}
                        src={hackathons[0].media}
                        controls
                        className="rounded-lg mb-5 md:mb-0"
                    />
                    <ProjectCard {...hackathons[2]} />
                </div>
            </div>
        </div>
    );
}
