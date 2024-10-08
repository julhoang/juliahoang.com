import Image from "next/image";
import ProjectCard, { ProjectDetails } from "../components/ProjectCard";

const projects: ProjectDetails[] = [
    {
        media: "/artisway.png",
        competition: "Feb 2024 - Present",
        projectName: "Artisway.ca 🎨",
        description:
            "Artisway is a user-friendly digital marketplace connecting local artisans and craft enthusiasts on Vancouver Island to showcase and sell unique handmade goods. Developed as part of the Start-up Programming course at UVic, this project taught us how to build a startup from the ground up, focusing not only on technical development but also on the business side of things.",
        stack: ["NextJS (app)", "ChakraUI", "tailwindCSS", "Supabase (PostgreSQL)", "Prisma"],
        url: "https://artisway.ca",
        color: "green",
    },
    {
        media: "/pantrypal.mov",
        competition: "Jan - Apr 2023",
        projectName: "PantryPal 🥕",
        description:
            "PantryPal is a web app that aims to help users manage their pantry more effectively and reduce food waste by tracking pantry items and recommending recipes using ingredients that will soon expire. This app simplifies the process of finding recipes and ensure that users maximize their ingredient usage before they go bad. Made as a team project for Requirements Engineering course.",
        stack: [
            "NextJS (pages)",
            "ChakraUI",
            "Supabase (PostgreSQL)",
            "Prisma",
            "Cucumber w/ Selenium",
            "Jest",
        ],
        url: "https://github.com/julhoang/pantrypal",
        color: "green",
    },
    {
        media: "/notella.mp4",
        competition: "Jun - Aug 2021",
        projectName: "Notella 📝",
        description:
            "Notella is a Chrome Extension that lets you save highlighted text from any webpage, neatly organizing it all in one place. It stores everything in localStorage, so your highlights are always right where you left them. My first ever personal project to access my skills before starting university!",
        stack: ["HTML", "CSS", "JavaScript", "localStorage"],
        url: "https://github.com/julhoang/Notella",
        color: "green",
    },
];

export default function ProjectSection() {
    const styles = {
        text: "text-emerald-700",
        badge: "bg-green-200 text-emerald-800 dark:bg-green-900 dark:text-green-300",
        button: "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    };
    return (
        <div className="bg-teal-50 p-5 sm:p-10 text-left bg-opacity-25">
            {/*-------- Section header --------*/}
            <h2 className="font-bold text-5xl md:text-7xl mb-2 text-emerald-700">web apps.</h2>
            <p className="text-lg md:text-xl md:w-1/2 mb-4 md:mb-8">
                I love building web apps that don’t just work well, but also look amazing. Usually,
                I go for a minimalistic vibe—but this colorful website? Well, that's just another
                side of me! Check out some of my favorite projects below!
            </p>

            {/*-------- Project listings --------*/}
            <div className="grid md:grid-rows-3 divide-y">
                <div className="md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <Image
                        src={projects[0].media}
                        width={600}
                        height={300}
                        alt="NoteNetwork mockup"
                        className="rounded-lg mb-5 md:mb-0 transition-all duration-300 hover:scale-105"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col justify-between h-full">
                            {/*-------- Project Details --------*/}
                            <div>
                                <p className="font-semibold text-sm">{projects[0].competition}</p>
                                <h3 className={"font-bold text-3xl my-2 " + styles.text}>
                                    {projects[0].projectName}
                                </h3>
                                <p
                                    className="whitespace-normal"
                                    dangerouslySetInnerHTML={{ __html: projects[0].description }}
                                ></p>

                                <div className="my-5">
                                    {projects[0].stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className={
                                                "text-sm font-medium me-2 px-2.5 py-0.5 rounded whitespace-pre-wrap " +
                                                styles.badge
                                            }
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/*-------- Buttons --------*/}
                            <div className="flex flex-col md:flex-row md:gap-0">
                                <a
                                    href={projects[0].url}
                                    type="button"
                                    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 w-fit"
                                >
                                    Visit Artisway.ca
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <ProjectCard {...projects[1]} />
                    <video
                        width={"100%"}
                        src={projects[1].media}
                        controls
                        preload="metadata"
                        className="rounded-lg mb-5 md:mb-0"
                    />
                </div>

                <div className="md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <video
                        width={"100%"}
                        src={projects[2].media}
                        controls
                        preload="metadata"
                        className="rounded-lg mb-5 md:mb-0"
                    />

                    <ProjectCard {...projects[2]} />
                </div>
            </div>
        </div>
    );
}
