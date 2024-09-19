import Image from "next/image";

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
        url: "https://github.com/julhoang/wec-2023-neossat",
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
        media: "/notenetwork.png",
        competition: "UVic's VikeLabs Summer 2024 - 3rd place 🥉",
        projectName: "NoteNetwork 📚",
        description:
            "NoteNetwork is a platform where UVic students can share curated links and videos for specific courses, saving time and effort for future students. Developed in 5 hours with my besties - Chris and Khushboo!",
        stack: ["NextJS", "Firebase", "RadixUI", "shadcn/ui"],
        url: "https://github.com/julhoang/notenetwork/tree/main",
    },
];

function ProjectCard({ competition, projectName, description, stack, url, demo }: Hackathon) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p className="font-semibold text-sm">{competition}</p>
                    <h4 className="font-bold text-3xl my-2 text-blue-800">{projectName}</h4>
                    <p
                        className="whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>

                    <div className="my-5">
                        {stack.map((tech) => (
                            <span
                                key={tech}
                                className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-0">
                    {demo && (
                        <a
                            href={demo}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            View Demo
                        </a>
                    )}

                    <a
                        href={url}
                        type="button"
                        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 w-fit"
                    >
                        <svg
                            className="w-4 h-4 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        View Code on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function HackathonSection() {
    return (
        <div className="bg-slate-50 p-10 text-left">
            <h2 className="font-bold text-5xl md:text-7xl mb-2 text-blue-700">hackathons.</h2>
            <p className="text-lg md:text-xl md:w-1/2 mb-4 md:mb-8">
                Adrenaline-fueled competitions, powered by too much coffee ☕, greasy pizza 🍕, and
                a mountain of salty chips 🥨.
            </p>

            <div className="grid md:grid-rows-3 divide-y">
                <div className="md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <video
                        width={"100%"}
                        src={hackathons[0].media}
                        controls
                        className="rounded-lg mb-5 md:mb-0"
                    />
                    <ProjectCard {...hackathons[0]} />
                </div>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <ProjectCard {...hackathons[1]} />
                    <video
                        width={"100%"}
                        src={hackathons[1].media}
                        controls
                        className="rounded-lg mb-5 md:mb-0"
                    />
                </div>

                <div className="md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <Image
                        alt="NoteNetwork mockup"
                        src={hackathons[2].media}
                        width={500}
                        height={300}
                        className="rounded-lg mb-5 md:mb-0"
                    />
                    <ProjectCard {...hackathons[2]} />
                </div>
            </div>
        </div>
    );
}
